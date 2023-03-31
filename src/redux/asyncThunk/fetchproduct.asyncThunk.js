import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetProductByIdService} from '../services/product.services';
import {ASYNC_ROUTES} from '../constant/redux.constants';

export const GetProductsById = createAsyncThunk(
  ASYNC_ROUTES.GET_PRODUCT_BY_ID,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await GetProductByIdService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
