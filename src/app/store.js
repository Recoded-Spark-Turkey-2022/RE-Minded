import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from '../features/userInfo/currentUserSlice';
import signoutButtonReducer from '../features/signoutButton/signoutButtonSlice';
import loginStateHolderReducer from '../features/loginStateHolder/loginStateHolderSlice'

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    signoutButton: signoutButtonReducer,
    loginStateHolderSlice: loginStateHolderReducer
  },
});
