import { createSlice } from "@reduxjs/toolkit";

import { getShoppingCartByUserId, setShoppingCartProductQuantity } from "./shoppingCart.actions";

const initialState = {
	data: {
		list: [],
	},
	loading: true,
}


// TODO: ver esta parte para mejorar las partes no mutables
// https://redux-toolkit.js.org/usage/usage-guide
// TODO: revisar normalizr
export default createSlice({
	name: 'shoppingCart',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getShoppingCartByUserId.fulfilled, (state, action) => {
				return {
					...state,
					data: {
						...state.data,
						list: action.payload.data,
					},
					loading: false,
				}
			})
			.addCase(getShoppingCartByUserId.pending, (state, action) => {
				return {
					...state,
					loading: true,
				}
			})
			.addCase(setShoppingCartProductQuantity.type, (state, action) => {
				const updatable = state.data.list.map((spProduct) => {
					if (spProduct.product.id == action.payload.productId) {
						return { ...spProduct, quantity: action.payload.quantity };
					}
					return spProduct;
				})
				return {
					...state,
					data: {
						list: updatable
					},
				}
			})
	}
}).reducer