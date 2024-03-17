import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  fav: [],
};

export const FavSlice = createSlice({
  name: 'Fav',
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.fav.push(action.payload);
    },
    removeFav: (state, action) => {
      //const id = action.payload;
      state.fav = state.fav.filter(books => books.key != action.payload);
    },
  },
});

export const {addFav, removeFav} = FavSlice.actions;

export default FavSlice.reducer;
