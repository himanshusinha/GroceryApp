import {createSlice} from '@reduxjs/toolkit';
const initialState = [];

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,

  reducers: {
    addToWishList(state, action) {
      const {payload} = action;
      const itemInWishList = state?.find(item => item?.id === payload.id);
      if (itemInWishList) {
        return state;
      } else {
        return state?.concat({...payload, quantity: 1});
      }
    },
    removeFromWishList(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const {addToWishList, removeFromWishList} = wishlistSlice.actions;
export default wishlistSlice.reducer;
