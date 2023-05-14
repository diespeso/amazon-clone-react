import { createSlice } from "@reduxjs/toolkit";

import { loginUser } from "./user.thunks";

const initialState = {
    id: 0,
    name: '',
    email: '',
    profilePicture: {
        id: 0,
        src: '',
    },
}

export default createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                return action.payload.data;
            })
    },
}).reducer