import {createSlice} from '@reduxjs/toolkit';
import {
  fetchProducts,
  GetAllCategories,
  GetProductByCategory,
  GetProductJewelery,
} from '../asyncThunk/product.asyncThunk';
import {THUNK_STATUS} from '../constant/redux.constants';
import {GetProductsById} from '../asyncThunk/fetchproduct.asyncThunk';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    category: [],
    categoryJwel: [],
    status: THUNK_STATUS.SUCCESS,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = THUNK_STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action?.payload?.data;
        state.status = THUNK_STATUS.SUCCESS;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = THUNK_STATUS.ERROR;
      })
      .addCase(GetProductsById.fulfilled, (state, action) => {
        state.data = action?.payload?.data.id;
      })
      .addCase(GetAllCategories.fulfilled, (state, action) => {
        state.category = action?.payload?.category;
      })
      .addCase(GetProductByCategory.fulfilled, (state, action) => {
        state.data = action?.payload?.data;
      });
  },
});

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;
