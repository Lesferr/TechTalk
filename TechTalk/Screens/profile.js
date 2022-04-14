import React { useState } from 'react';
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

// Fonts
import { useFonts } from 'expo-font';
import SSLight from '../../assets/fonts/SourceSansPro/SourceSansProLight.ttf';
import SSRegular from '../../assets/fonts/SourceSansPro/SourceSansProRegular.ttf';
import SSBold from '../../assets/fonts/SourceSansPro/SourceSansProBold.ttf';

        function Photos({ photos }) {
        const imgWidth = Dimensions.get('screen').width * 0.33333;
        return (
<View style={{}}>
<View
        style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                }}
                >
                {photos.map((photo, index) => (
<View>
<Image
              style={{ width: imgWidth, height: imgWidth }}
                      source={{
                      uri: `https://picsum.photos/200/300?random=${index + 1}`,
                      }}
                      />
</View>
        ))}
</View>
</View>
        );
        }

        function Albums() {
        const [albums] = useState([
        {
        name: 'My Photos'
        images [
        https://picsum.photos/id/0/367/267,
        https://picsum.photos/id/1062/367/267,
        https://picsum.photos/id/1077/367/267,
        https://picsum.photos/id/117/367/267,
        ],
        
        {
        name: 'Travels',
        images: [
        https://picsum.photos/id/122/367/267,
        https://https://picsum.photos/id/128/367/267,
        https://https://picsum.photos/536/354,
        https://https://picsum.photos/id/110/367/267,
        ],
        
        ]);
        const imgWidth = Dimensions.get('screen').width * 0.33333;
        return (
<View style={{ flex: 1, backgroundColor: '#fff', paddingBottom: 20 }}>
        {albums.map((album) => (
<TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
        {album.images.map((img) => (
<Image
              style={{ width: imgWidth + 50, height: imgWidth + 50 }}
                      source={{ uri: img }}
                      />
                      ))}
<View
            style={{
                    position: 'absolute',
                    bottom: 11,
                    left: 11,
                    backgroundColor: '#111',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 6,
                    }}
                    >
<Text style={{ color: '#fff', fontFamily: 'SSBold', fontSize: 20 }}>
        {album.name}
</Text>
</View>
</TouchableOpacity>
        ))}
</View>
        );


        function Tags({ photos }) {
        const imgWidth = Dimensions.get('screen').width * 0.33333;
        return (
<View style={{}}>
<View
        style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                }}
                >
                {photos.map((photo, index) => (
<View>
<Image
              style={{ width: imgWidth, height: imgWidth }}
                      source={{
                      uri: 'https://picsum.photos/id/123/367/267',
                      }}
                      <image/>
</View>
        ))}
</View>
</View>
        );
        

        export default function ProfileScreen1() {
        const [loaded] = useFonts({
        SSLight,
        SSRegular,
        SSBold,
        });

        const [showContent, setShowContent] = useState('Photos');

        if (!loaded) {
        return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<ActivityIndicator size='large' />
</View>
        );
        }

        return (
<View style={{ flex: 1, backgroundColor: '#fff' }}>
<ScrollView showsVerticalScrollIndicator={false}>
<>
<View>
<Image
              style={styles.coverImage}
                      source={{ uri: 'https://picsum.photos/500/500?random=211' }}
                      />
</View>
<View style={styles.profileContainer}>
        {/* Profile Details */}
<View>
              {/* Profile Image */}
<View style={styles.profileImageView}>
<Image
                  style={styles.profileImage}
                          source={{
                          uri: 'https://media.istockphoto.com/photos/african-american-business-woman-picture-id962182606?k=6&m=962182606&s=170667a&w=0&h=dODlimj39LOmJdH23aD869fnH5sy23LQmCNT5Mkr-84=',
                          }}
                          />
</View>
        {/* Profile Name and Bio */}
<View style={styles.nameAndBioView}>
<Text style={styles.userFullName}>{'Amber Eiland'}</Text>
<Text style={styles.userBio}>{'I love to live life to the fullest'}</Text>
</View>
        {/* Posts/Followers/Following View */}
<View style={styles.countsView}>
<View style={styles.countView}>
<Text style={styles.countNum}>13</Text>
<Text style={styles.countText}>Posts</Text>
</View>
<View style={styles.countView}>
<Text style={styles.countNum}>1246</Text>
<Text style={styles.countText}>Followers</Text>
</View>
<View style={styles.countView}>
<Text style={styles.countNum}>348</Text>
<Text style={styles.countText}>Following</Text>
</View>
</View>
        {/* Interact Buttons View */}
<View style={styles.interactButtonsView}>
<TouchableOpacity style={styles.interactButton}>
<Text style={styles.interactButtonText}>Follow</Text>
</TouchableOpacity>
<TouchableOpacity
                  style={{
                          ...styles.interactButton,
                          backgroundColor: 'white',
                          borderWidth: 2,
                          borderColor: '#4b7bec',
                          }}
                          >
<Text
                    style={{ ...styles.interactButtonText, color: '#4b7bec' }}
                            >
                            Message
</Text>
</TouchableOpacity>
</View>
        {/* Mutual Followed By Text */}
<View style={{ paddingHorizontal: 25, marginTop: 10 }}>
<Text style={{ fontFamily: 'SSRegular', fontSize: 16 }}>
        {'Followed by '}
<Text style={{ fontFamily: 'SSBold' }}>john_doe </Text>
        {'and '}
<Text style={{ fontFamily: 'SSBold' }}>19 others</Text>
</Text>
</View>
</View>
        {/* Profile Content */}
<View style={{ marginTop: 20 }}>
<View style={styles.profileContentButtonsView}>
<TouchableOpacity
                  style={{
                          ...styles.showContentButton,
                          borderBottomWidth: showContent === 'Photos' ? 2 : 0,
                          }}
                          onPress={() => setShowContent('Photos')}
                          >
<Text style={styles.showContentButtonText}>Photos</Text>
</TouchableOpacity>
<TouchableOpacity
                  style={{
                          ...styles.showContentButton,
                          borderBottomWidth: showContent === 'Albums' ? 2 : 0,
                          }}
                          onPress={() => setShowContent('Albums')}
                          >
<Text style={styles.showContentButtonText}>Albums</Text>
</TouchableOpacity>
<TouchableOpacity
                  style={{
                          ...styles.showContentButton,
                          borderBottomWidth: showContent === 'Tags' ? 2 : 0,
                          }}
                          onPress={() => setShowContent('Tags')}
                          >
<Text style={styles.showContentButtonText}>Tags</Text>
</TouchableOpacity>
</View>
        {showContent === 'Photos' ? (
<Photos photos={new Array(13).fill(1)} />
        ) : showContent === 'Albums' ? (
<Albums />
        ) : (
<Tags photos={new Array(23).fill(1)} />
        )}
</View>
</View>
</>
</ScrollView>
</View>
        );
        }

        const styles = StyleSheet.create({
        coverImage: { height: 300, width: '100%' },
        profileContainer: {
        // height: 1000,
        backgroundColor: '#fff',
        marginTop: -100,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        },
        profileImageView: { alignItems: 'center', marginTop: -50 },
        profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#fff',
        },
        nameAndBioView: { alignItems: 'center', marginTop: 10 },
        userFullName: { fontFamily: 'SSBold', fontSize: 26 },
        userBio: {
        fontFamily: 'SSRegular',
        fontSize: 15,
        color: '#333',
        marginTop: 4,
        },
        countsView: { flexDirection: 'row', marginTop: 20 },
        countView: { flex: 1, alignItems: 'center' },
        countNum: { fontFamily: 'SSBold', fontSize: 20 },
        countText: { fontFamily: 'SSRegular', fontSize: 18, color: '#333' },
        interactButtonsView: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 20,
        },
        interactButton: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#4b7bec'
        margin: 5,
        borderRadius: 4,
        },
        interactButtonText: {
        fontFamily: 'SSBold',
        color: '#fff',
        fontSize: 18,
        paddingVertical: 6,
        },
        profileContentButtonsView: {
        flexDirection: 'row',
        borderTopWidth: 2,
        borderTopColor: '#f1f3f6',
        },
        showContentButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: '#000',
        },
        showContentButtonText: {
        fontFamily: 'SSRegular',
        fontSize: 18,
        }
