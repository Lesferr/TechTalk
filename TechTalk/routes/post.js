const router = require('express').Router();

const Post = require('../models/Post');
const User = require('../models/User');
const verifyToken = require('../middleware/verifyToken');

// =====================================
// CREATE POST
// =====================================
router.post('/', verifyToken, async (req, res) => {
  try {
    const newPost = new Post({
      ...req.body,
      userId: req.user.id,
    });

    const savedPost = await newPost.save();

    res.status(201).json({
      message: 'Post created successfully',
      post: savedPost,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to create post',
      error: err.message,
    });
  }
});

// =====================================
// UPDATE POST
// =====================================
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: 'Post not found',
      });
    }

    // Check ownership
    if (post.userId !== req.user.id) {
      return res.status(403).json({
        message: 'You can only update your own posts',
      });
    }

    await post.updateOne({
      $set: req.body,
    });

    res.status(200).json({
      message: 'Post updated successfully',
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to update post',
      error: err.message,
    });
  }
});

// =====================================
// DELETE POST
// =====================================
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: 'Post not found',
      });
    }

    // Check ownership
    if (post.userId !== req.user.id) {
      return res.status(403).json({
        message: 'You can only delete your own posts',
      });
    }

    await post.deleteOne();

    res.status(200).json({
      message: 'Post deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to delete post',
      error: err.message,
    });
  }
});

// =====================================
// LIKE / UNLIKE POST
// =====================================
router.put('/:id/like', verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: 'Post not found',
      });
    }

    const alreadyLiked = post.likes.includes(req.user.id);

    if (!alreadyLiked) {
      await post.updateOne({
        $push: {
          likes: req.user.id,
        },
      });

      return res.status(200).json({
        message: 'Post liked',
      });
    }

    await post.updateOne({
      $pull: {
        likes: req.user.id,
      },
    });

    res.status(200).json({
      message: 'Post unliked',
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to like/unlike post',
      error: err.message,
    });
  }
});

// =====================================
// GET SINGLE POST
// =====================================
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: 'Post not found',
      });
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      message: 'Failed to fetch post',
      error: err.message,
    });
  }
});

// =====================================
// TIMELINE POSTS
// =====================================
router.get('/timeline/:userId', verifyToken, async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);

    if (!currentUser) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    // User posts
    const userPosts = await Post.find({
      userId: currentUser._id,
    });

    // Following posts
    const followingPosts = await Promise.all(
      currentUser.followings.map((friendId) =>
        Post.find({ userId: friendId })
      )
    );

    // Combine posts
    const timelinePosts = userPosts.concat(...followingPosts);

    // Sort newest first
    timelinePosts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    res.status(200).json(timelinePosts);
  } catch (err) {
    res.status(500).json({
      message: 'Failed to fetch timeline',
      error: err.message,
    });
  }
});

module.exports = router;
