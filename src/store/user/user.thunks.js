import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = 'http://localhost:8000/api/v1';

export const loginUser = createAsyncThunk(
    'user/login',
    async (dataObj) => {
        // mock
        return {
            success: true,
            message: 'mock-up',
            data: {
                name: 'Testing Mock',
                email: 'testing@gmail.com',
                password: '1234',
                id: '1',
                profilePicture: {
                    id: 1,
                    src: 'https://placebear.com/g/300/300',
                }
            }
        }
        return fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj),
        })
        .then((response) => response.json())
        .then((jsonData) => {
            if (jsonData.error) {
                alert(jsonData.error);
            }
            return jsonData;
        });
    }
)