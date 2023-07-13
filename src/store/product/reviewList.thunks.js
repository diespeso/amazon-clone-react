import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = 'http://localhost:8000/api/v1';

export const getReviewListFromProduct = createAsyncThunk(
    'review/list',
    async (product_id) => {

        // mock
        /*return {
            success: true,
            message: 'mock-up message',
            data: [
                {
                    id: 0,
                    title: 'Bad product',
                    content: 'this is a bad product',
                    rate: 4,
                },
                {
                    id: 1,
                    title: 'Good Product',
                    content: 'this is a good product',
                    rate: 5,
                },
                {
                    id: 2,
                    title: 'Bad product',
                    content: 'this is a bad product',
                    rate: 4,
                },
                {
                    id: 3,
                    title: 'Good Product',
                    content: 'this is a good product',
                    rate: 5,
                },
                {
                    id: 4,
                    title: 'Bad product',
                    content: 'this is a bad product',
                    rate: 4,
                },
                {
                    id: 5,
                    title: 'Good Product',
                    content: 'this is a good product',
                    rate: 5,
                },
            ]
        }
        */
        return fetch(`${API_URL}/products/${product_id}/product-reviews`)
            .then((response) => response.json())
            .then((json) => {
                if (!json.error) {
                    return json;
                }
                alert('failed to fetch product-review data')
            })
    }
)