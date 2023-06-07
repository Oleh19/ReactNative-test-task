import axios from 'axios';

export const fetchPhotosSuccess = (photos) => ({
  type: 'FETCH_PHOTOS_SUCCESS',
  payload: photos,
});

export const fetchPhotosError = (error) => ({
  type: 'FETCH_PHOTOS_ERROR',
  payload: error,
});

export const fetchPhotos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos', {
        headers: {
          Authorization: 'Client-ID gXv_HQqcatYEBItAblK08Yh0oxP4QDEmmfdlGuCnEnQ',
        },
      });
      dispatch(fetchPhotosSuccess(response.data));
    } catch (error) {
      dispatch(fetchPhotosError(error.message));
    }
  };
};
