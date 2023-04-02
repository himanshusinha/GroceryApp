import {createSlice} from '@reduxjs/toolkit';
const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart(state, action) {
      const {payload} = action;
      const {id} = payload;
      const doesItemExist = state.find(item => item.id === id);
      if (doesItemExist) {
        return state.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    reduceItemFromCart(state, action) {
      let tempData = state.data;
      tempData.map(item => {
        if (item.id == action.payload.id) {
          item.quantity = item.quantity - 1;
        }
      });
    },
    removeToCart(state, action) {
      let tempData = state.data;
      tempData.slice(action.payload, 1);
      state.data = tempData;
    },
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
});

export const {addToCart, reduceItemFromCart, removeToCart} = cartSlice.actions;
export default cartSlice.reducer;
