import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

// Fonts
import SSLight from '../../assets/fonts/SourceSansPro/SourceSansProLight.ttf';
import SSRegular from '../../assets/fonts/SourceSansPro/SourceSansProRegular.ttf';
import SSBold from '../../assets/fonts/SourceSansPro/SourceSansProBold.ttf';

const { width } = Dimensions.get('screen');
const GRID_SIZE = width / 3;

const COLORS = {
  primary: '#4b7bec',
  white: '#fff',
  black: '#111',
  border: '#f1f3f6',
  text: '#333',
};

const albumsData = [
  {
    name: 'My Photos',
    images: [
      'https://picsum.photos/id/0/367/267',
      'https://picsum.photos/id/1062/367/267',
      'https://picsum.photos/id/1077/367/267',
    ],
  },
  {
    name: 'Travels',
    images: [
      'https://picsum.photos/id/122/367/267',
      'https://picsum.photos/id/128/367/267',
      'https://picsum.photos/id/110/367/267',
    ],
  },
];

function Photos({ photos }) {
  return (
    <View style={styles.gridContainer}>
      {photos.map((_, index) => (
        <Image
          key={`photo-${index}`}
          style={styles.gridImage}
          source={{
            uri: `https://picsum.photos/200/300?random=${index + 1}`,
          }}
        />
      ))}
    </View>
  );
}

function Tags({ photos }) {
  return (
    <View style={styles.gridContainer}>
      {photos.map((_, index) => (
        <Image
          key={`tag-${index}`}
          style={styles.gridImage}
          source={{
            uri: `https://picsum.photos/200/300?random=${index + 50}`,
          }}
        />
      ))}
    </View>
  );
}

function Albums() {
  return (
    <View style={styles.albumsContainer}>
      {albumsData.map((album, index) => (
        <TouchableOpacity
          key={`album-${index}`}
          style={styles.albumCard}
          activeOpacity={0.9}
        >
          <View style={styles.albumImagesRow}>
            {album.images.map((img, imgIndex) => (
              <Image
                key={`img-${imgIndex}`}
                style={styles.albumImage}
                source={{ uri: img }}
              />
            ))}
          </View>

          <View style={styles.albumOverlay}>
            <Text style={styles.albumTitle}>{album.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('Photos');

  const [fontsLoaded] = useFonts({
    SSLight,
    SSRegular,
    SSBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'Photos':
        return <Photos photos={new Array(13).fill(1)} />;

      case 'Albums':
        return <Albums />;

      case 'Tags':
        return <Tags photos={new Array(23).fill(1)} />;

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Cover Image */}
        <Image
          style={styles.coverImage}
          source={{
            uri: 'https://picsum.photos/500/500?random=211',
          }}
        />

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          {/* Profile Image */}
          <View style={styles.profileImageWrapper}>
            <Image
              style={styles.profileImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
              }}
            />
          </View>

          {/* Name + Bio */}
          <View style={styles.nameAndBioView}>
            <Text style={styles.userFullName}>Amber Eiland</Text>

            <Text style={styles.userBio}>
              I love to live life to the fullest
            </Text>
          </View>

          {/* Stats */}
          <View style={styles.countsView}>
            {[
              { label: 'Posts', value: '13' },
              { label: 'Followers', value: '1246' },
              { label: 'Following', value: '348' },
            ].map((item) => (
              <View key={item.label} style={styles.countView}>
                <Text style={styles.countNum}>{item.value}</Text>
                <Text style={styles.countText}>{item.label}</Text>
              </View>
            ))}
          </View>

          {/* Buttons */}
          <View style={styles.interactButtonsView}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.messageButton}>
              <Icon name="message-circle" size={18} color={COLORS.primary} />

              <Text style={styles.messageButtonText}>Message</Text>
            </TouchableOpacity>
          </View>

          {/* Mutuals */}
          <View style={styles.mutualContainer}>
            <Text style={styles.mutualText}>
              Followed by{' '}
              <Text style={styles.boldText}>john_doe</Text>
              {' and '}
              <Text style={styles.boldText}>19 others</Text>
            </Text>
          </View>

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            {['Photos', 'Albums', 'Tags'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tabButton,
                  activeTab === tab && styles.activeTabButton,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={styles.tabButtonText}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Dynamic Content */}
          {renderContent()}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  coverImage: {
    width: '100%',
    height: 300,
  },

  profileContainer: {
    marginTop: -100,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 30,
  },

  profileImageWrapper: {
    alignItems: 'center',
    marginTop: -50,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.white,
  },

  nameAndBioView: {
    alignItems: 'center',
    marginTop: 10,
  },

  userFullName: {
    fontSize: 26,
    fontFamily: 'SSBold',
  },

  userBio: {
    marginTop: 4,
    fontSize: 15,
    color: COLORS.text,
    fontFamily: 'SSRegular',
  },

  countsView: {
    flexDirection: 'row',
    marginTop: 20,
  },

  countView: {
    flex: 1,
    alignItems: 'center',
  },

  countNum: {
    fontSize: 20,
    fontFamily: 'SSBold',
  },

  countText: {
    fontSize: 16,
    color: COLORS.text,
    fontFamily: 'SSRegular',
  },

  interactButtonsView: {
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 20,
  },

  followButton: {
    flex: 1,
    margin: 5,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
  },

  followButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'SSBold',
  },

  messageButton: {
    flex: 1,
    margin: 5,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    gap: 8,
    backgroundColor: COLORS.white,
  },

  messageButtonText: {
    color: COLORS.primary,
    fontSize: 18,
    fontFamily: 'SSBold',
  },

  mutualContainer: {
    marginTop: 10,
    paddingHorizontal: 25,
  },

  mutualText: {
    fontSize: 16,
    fontFamily: 'SSRegular',
  },

  boldText: {
    fontFamily: 'SSBold',
  },

  tabsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderTopWidth: 2,
    borderTopColor: COLORS.border,
  },

  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0,
  },

  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.black,
  },

  tabButtonText: {
    fontSize: 16,
    fontFamily: 'SSRegular',
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  gridImage: {
    width: GRID_SIZE,
    height: GRID_SIZE,
  },

  albumsContainer: {
    paddingBottom: 20,
  },

  albumCard: {
    marginTop: 10,
  },

  albumImagesRow: {
    flexDirection: 'row',
  },

  albumImage: {
    width: width / 3,
    height: width / 3,
  },

  albumOverlay: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: COLORS.black,
  },

  albumTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'SSBold',
  },
});
