import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getUserProfileService,
  googleSignInService,
} from '../services/auth.services';
import {ASYNC_ROUTES} from '../constant';

export const signInThunk = createAsyncThunk(
  ASYNC_ROUTES.AUTH_SIGN_IN,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await googleSignInService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getUserProfile = createAsyncThunk(
  ASYNC_ROUTES.GET_USER_PROFILE,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getUserProfileService(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
