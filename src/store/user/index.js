import { createSlice } from "@reduxjs/toolkit";

import { loginUser } from "./user.thunks";

const initialState = {
    id: 0,
    username: '',
    email: '',
}

export default createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                return action.payload;
            })
    },
}).reducer