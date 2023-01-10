import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from '../features/userInfo/currentUserSlice';


export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  }
});
