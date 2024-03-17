import {configureStore} from '@reduxjs/toolkit';
import favReducer from './FavSlice';

export const store = configureStore({
  reducer: favReducer,
});
