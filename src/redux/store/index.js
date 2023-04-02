import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productReducer from '../slice/product.slice';
import cartReducer from '../slice/cart.slice';
import wishlistReducer from '../slice/wishlist.slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
let persistConfig = {
  key: 'root',
  storage,
};
let rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});
let persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
