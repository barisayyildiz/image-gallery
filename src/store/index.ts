import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './image'

export default configureStore({
  reducer: {
    image: imageReducer,
  },
});
