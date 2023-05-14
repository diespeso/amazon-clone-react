import { createSlice } from "@reduxjs/toolkit";

import { getProductById, setMainImage } from "./product.thunks";

/*
const initialState = {
    id: 0,
    name: '',
    description: '',
    price: 0.0,
    images: [],
} */

const initialState = {
    data: {
        id: 0,
        name: '',
        description: '',
        price: 0.0,
        images: [],
        currentFocusImage: {
            id: 0,
            src: ''
        },
    },
    loading: true,
};

export default createSlice({
    name: 'product',
    initialState,
    reducers: (builder) => {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductById.fulfilled, (state, action) => {
                return {
                    data: {
                        ...action.payload.data,
                        currentFocusImage: action.payload.data.images[0],
                    },
                    loading: false,
                }
            })
            .addCase(getProductById.pending, (state, action) => {
                return {
                    ...state,
                    loading: true,
                }
            })
            .addCase(setMainImage.type, (state, action) => { // si es action, usar type
                return {
                    ...state,
                    data: {
                        ...state.data,
                        currentFocusImage: action.payload.mainProductImage,
                    }
                }
            })
    }
}).reducer

