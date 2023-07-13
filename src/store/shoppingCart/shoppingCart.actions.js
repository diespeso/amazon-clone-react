import { createAction, createAsyncThunk } from "@reduxjs/toolkit";


export const getShoppingCartByUserId = createAsyncThunk(
    'shoppingCart/getByUserId',
    async (userId) => {
        // mock
        return {
            success: true,
            message: 'mock-up',
            data: [
                {
                    id: 0,
                    product: {
                        id: 0,
                        name: 'shoppingCartProduct',
                        price: 55.0,
                    },
                    quantity: 2,
                },
                {
                    id: 1,
                    product: {
                        id: 2,
                        name: 'shoppingCartProduct',
                        price: 55.0,
                    },
                    quantity: 1,
                }
            ]
        }
    }
)

export const setShoppingCartProductQuantity = createAction(
    'shoppingCart/setProductQuantity',
    (productId, quantity) => {
        return {
            payload: {
                productId, quantity,
            }
        }
    }
)