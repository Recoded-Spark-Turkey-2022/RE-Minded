import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const signoutButtonSlice = createSlice({
  name: 'signoutButton',
  initialState,
  reducers: {
    setSignoutButton: (state) => {
      state = true; // eslint-disable-line no-param-reassign
      return state;
    },
  },
});

export const { setSignoutButton } = signoutButtonSlice.actions;

export default signoutButtonSlice.reducer;
