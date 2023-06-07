import React, { useEffect } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../redux/actions';
import style from '../styles';
import PhotoModalScreen from './PhotoModalScreen';

const PhotoListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const openPhotoScreen = (photo) => {
    navigation.navigate('Photo', { photo });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {photos.map((photo) => (
        <TouchableOpacity
          key={photo.id}
          onPress={() => openPhotoScreen(photo)}
        >
          <PhotoModalScreen photo={photo} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default PhotoListScreen;
