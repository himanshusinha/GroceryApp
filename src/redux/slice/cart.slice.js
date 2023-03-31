import {createSlice} from '@reduxjs/toolkit';
const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    addToCart(state, action) {
      const {payload} = action;
      const itemInCart = state?.find(item => item?.id === payload.id);
      if (itemInCart) {
        return state;
      } else {
        return state?.concat({...payload, quantity: 1});
      }
    },
    incrementQuantity: (state, action) => {
      const {payload} = action;
      const item = state.find(item => item.id === payload?.id);
      return state.map((i, index) => {
        if (i.id == payload?.id) {
          return {...i, quantity: i.quantity + 1};
        }
        return {...i};
      });
    },
    decrementQuantity: (state, action) => {
      const {payload} = action;

      const item = state.find(item => item.id === payload?.id);
      if (item.quantity === 1) {
        return state.filter(i => i.id !== payload?.id);
      } else {
        return state.map(i => {
          return i.id === payload ? {...i, quantity: i.quantity - 1} : i;
        });
      }

      // const item = state.find((item) => item.id === payload?.id) ;
      // console.log(item,"kkkkkkkkkkk")

      // if(item.quantity>1){

      //   return state.map((i) =>{
      //     if (i.id == payload?.id && i.quantity>0 ) {
      //       return { ...i, quantity : i.quantity - 1}
      //     }
      //   })
      // }
      // else{
      //   return state.filter(obj => obj?.id !== action?.payload.id)
      // }
    },
  },
});

export const {
  add,
  remove,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  addToWishList,
} = cartSlice.actions;
export default cartSlice.reducer;
