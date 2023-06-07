const initialState = {
    photos: [],
    loading: true,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PHOTOS_SUCCESS':
        return {
          ...state,
          photos: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_PHOTOS_ERROR':
        return {
          ...state,
          photos: [],
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  