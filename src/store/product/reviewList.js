import { createSlice } from "@reduxjs/toolkit";

import { getReviewListFromProduct } from "./reviewList.thunks";


const initialState = {
    list: [],
    count: 0,
    average: 0.0,
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
                    list: action.payload.data,
                    average: action.payload.info.average,
                    count: action.payload.info.count,
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