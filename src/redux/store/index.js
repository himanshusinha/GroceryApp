import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../slice/product.slice';
import cartReducer from '../slice/cart.slice';
import wishlistReducer from '../slice/wishlist.slice';
const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
