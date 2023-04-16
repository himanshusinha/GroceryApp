import {createSlice} from '@reduxjs/toolkit';
import {signInThunk} from '../asyncThunk/authAsyncThunk';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action?.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signInThunk.pending, (state, action) => {
        state.status = THUNK_STATUS.LOADING;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.user = action?.payload?._data;
        state.status = THUNK_STATUS.SUCCESS;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.status = THUNK_STATUS.ERROR;
      });
  },
});

export const {login, logout} = authSlice.actions;

// selectors
export const selectUser = state => state.user.user;

export default authSlice.reducer;
