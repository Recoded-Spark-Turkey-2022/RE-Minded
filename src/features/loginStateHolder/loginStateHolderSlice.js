import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const loginStateHolderSlice = createSlice({
  name: 'loginStateHolder',
  initialState,
  reducers: {
    setLoginState: (state) => {
      state = true; // eslint-disable-line no-param-reassign
      return state;
    },
    setLogoutState: (state) => {
      state = false; // eslint-disable-line no-param-reassign
      return state;
    },
  },
});

export const { setLoginState,setLogoutState } = loginStateHolderSlice.actions;

export default loginStateHolderSlice.reducer;
