import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut } from 'redux/operations/auth';

const handlePending = (state, action) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    loading: false,
    error: null,
    authorized: false,
    token: null,
  },
  extraReducers: {
    [register.pending]: handlePending,
    [register.rejected]: handleRejected,
    [register.fulfilled](state, action) {
      state.loading = false;
      state.error = null;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    [logIn.pending]: handlePending,
    [logIn.rejected]: handleRejected,
    [logIn.fulfilled](state, action) {
      state.loading = false;
      state.error = null;
      state.token = action.payload.token;
    },

    [logOut.pending]: handlePending,
    [logOut.rejected]: handleRejected,
    [logOut.fulfilled](state) {
      state.loading = false;
      state.error = null;
      state.user = null;
      state.token = null;
    },
  },
});

export const authReducer = authSlice.reducer;
