import React from 'react';
import { View, Image } from 'react-native';
import style from '../styles';

const PhotoScreen = ({ route }) => {
  const { photo } = route.params;

  return (
    <View style={styles.fullPhotoContainer}>
      <Image
        source={{ uri: photo.urls.regular }}
        style={styles.fullPhoto}
      />
    </View>
  );
};

export default PhotoScreen;
