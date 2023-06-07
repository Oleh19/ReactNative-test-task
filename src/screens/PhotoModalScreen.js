import React from 'react';
import { View, Text, Image } from 'react-native';
import style from '../styles';

const PhotoModalScreen = ({ photo }) => {
  return (
    <View style={styles.photoContainer}>
      <Image source={{ uri: photo.urls.thumb }} style={styles.thumbnail} />
      <Text style={styles.title}>{photo.user.name}</Text>
      <Text style={styles.author}>{photo.user.username}</Text>
    </View>
  );
};

export default PhotoModalScreen;
