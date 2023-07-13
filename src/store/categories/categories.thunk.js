import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = 'http://localhost:8000/api/v1';

export const getAllCategories = createAsyncThunk(
  'product/getAllCategories',
  async () => {
      return fetch(`${API_URL}/categories`)
      .then(response => response.json())
      .then(json => {
          if (!json.error) {
              return json.data;
          }
          alert('failed to fetch categories data');
      })
  }
)