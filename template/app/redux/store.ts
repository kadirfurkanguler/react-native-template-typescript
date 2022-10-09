import {configureStore, combineReducers} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import authSlice from './slices/auth-slice';

// Combine all reducers
const reducer = combineReducers({
  auth: authSlice,
});

// Set combined reducer
const store = configureStore({
  reducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
