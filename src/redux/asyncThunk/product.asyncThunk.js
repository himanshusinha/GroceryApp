import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  GetAllCategoriesService,
  GetProductByCategoryService,
  GetProductJeweleryService,
  GetProductListService,
} from '../services/product.services';
import {ASYNC_ROUTES} from '../constant/redux.constants';

export const fetchProducts = createAsyncThunk(
  ASYNC_ROUTES.GET_ALL_PRODUCT,
  async (data, {rejectWithValue}) => {
    try {
      const response = await GetProductListService(data);
      console.log(response);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const GetAllCategories = createAsyncThunk(
  ASYNC_ROUTES.GET_ALL_CATEGORIES,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await GetAllCategoriesService(payload);

      console.log(response, 'thunk');
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const GetProductByCategory = createAsyncThunk(
  ASYNC_ROUTES.GET_PRODUCT_JEWELERY,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await GetProductByCategoryService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
