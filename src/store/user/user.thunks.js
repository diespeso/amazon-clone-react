import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = 'http://localhost:8000/api/v1';

export const loginUser = createAsyncThunk(
    'user/login',
    async (dataObj) => {
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