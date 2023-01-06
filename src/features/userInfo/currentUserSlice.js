import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    email: ""
}

export const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.firstName = action.payload
        }
    }
})

export const {setCurrentUser} = currentUserSlice.actions

export default currentUserSlice.reducer