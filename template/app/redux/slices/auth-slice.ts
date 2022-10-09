import {createSlice} from '@reduxjs/toolkit';
import {authLogin} from '@services';
export const user = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: '1',
    user: undefined,
    isLoading: {},
    userInfo: undefined,
    error: {},
    user_type: undefined,
  },
  reducers: {
    reset: state => {
      state.isLoading = {};
      state.isAuthenticated = '-1';
      state.user = undefined;
      state.error = {};
      state.user_type = undefined;
    },
    changeAuhtentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(authLogin.pending, state => {
      state.isLoading = {...state.isLoading, authLogin: true};
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, authLogin: false};
      state.user = action.payload;
      state.isAuthenticated = '1';
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, authLogin: false};
      state.error = {...state.error, authLogin: action.error || action.payload};
    });
  },
});
export const {reset, changeAuhtentication} = user.actions;
export default user.reducer;
