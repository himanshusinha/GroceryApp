import {combineReducers} from '@reduxjs/toolkit';
import cartSlice from './cart.slice';
import productSlice from './product.slice';
import wishlistSlice from './wishlist.slice';
import authSlice from './auth.slice';
export default combineReducers({
  authSlice: authSlice,
  cartSlice: cartSlice,
  productSlice: productSlice,
  wishListSlice: wishlistSlice,
});
