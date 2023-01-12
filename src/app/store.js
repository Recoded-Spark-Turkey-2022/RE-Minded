import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from '../features/userInfo/currentUserSlice';
import signoutButtonReducer from '../features/signoutButton/signoutButtonSlice';


export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    signoutButton: signoutButtonReducer,
  }
});
