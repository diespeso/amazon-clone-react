import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

const API_URL = 'http://localhost:8000/api/v1';

export const toggleLoading = createAction('TOGGLE_LOADING', () => {});

export const setMainImage = createAction('product/setMainImage', (mainProductImage) => {
	return {
		payload: {
			mainProductImage,
		}
	}
})

export const getProductById = createAsyncThunk(
    'product/show',
    /*async (id) => {
        // mock
        return {
            success: true,
            message: 'mock-up response',
            data: {
                id: 1,
                name: 'Tostadora Mabel',
                price: 45.0,
                description: 'Tostadora, quizás esto debería ser markdown?',
                images: [
									{
										id: 0,
										src: 'https://placekitten.com/g/300/300',
									},
									{
										id: 1,
										src: 'https://placekitten.com/g/320/320',
									}
                ],
            }
        }*/
    async (id) => {
        return fetch(`${API_URL}/products/${id}`)
        .then((response) => response.json())
        .then((json) => {
            if (!json.error) {
                return json.data;
            }
            alert('failed to fetch product data')
        });
    },
)

export const getCategoriesByProductId = createAsyncThunk(
    'product/getCategories',
    async (id) => {
        return fetch(`${API_URL}/products/${id}/categories`)
            .then(response => response.json())
            .then(json => {
                if (!json.error) {
                    return json.data;
                }
            })
    }
)

export const createProduct = createAsyncThunk(
    'product/create',
    async (product) => {
        return fetch(`${API_URL}/products`, {
            method: 'POST',
            body: JSON.stringify(product),
        }).then((response) => response.json())
        .then((json) => {
            if(!json.error) {
                return json.data;
            }
            alert('failed to post product');
        });
    }
);