const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// ==============================
// REGISTER
// ==============================
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate fields
    if (!username || !email || !password) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(409).json({
        message: 'User already exists',
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // Generate JWT token
    const accessToken = jwt.sign(
      {
        id: savedUser._id,
        email: savedUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );

    // Remove password
    const { password: _, ...userData } = savedUser._doc;

    res.status(201).json({
      message: 'User registered successfully',
      accessToken,
      user: userData,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Registration failed',
      error: err.message,
    });
  }
});

// ==============================
// LOGIN
// ==============================
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate fields
    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required',
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: 'Invalid credentials',
      });
    }

    // Generate JWT
    const accessToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );

    // Remove password
    const { password: _, ...userData } = user._doc;

    res.status(200).json({
      message: 'Login successful',
      accessToken,
      user: userData,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Login failed',
      error: err.message,
    });
  }
});

module.exports = router;
