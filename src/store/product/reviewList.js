import { createSlice } from "@reduxjs/toolkit";

import { getReviewListFromProduct } from "./reviewList.thunks";


const initialState = {
    data: [],
    loading: true,
};

export default createSlice({
    name: 'reviewList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder// todo: arrow funcs to handle error here instead? maybe not
            .addCase(getReviewListFromProduct.fulfilled, (state, action) => {
                return {
                    ...state,
                    data: action.payload.data,
                    loading: false,
                }
            })
            .addCase(getReviewListFromProduct.pending, (state, action) => {
                return {
                    ...state,
                    loading: true,
                }
            })
    }
}).reducer