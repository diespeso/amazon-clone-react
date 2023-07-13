import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = 'http://localhost:8000/api/v1'; // TODO: ponerlo en enviroments

export const getImagesByProductId = createAsyncThunk(
  'product/getImages',
  async (id) => {
    return fetch(`${API_URL}/products/${id}/images`)
      .then(response => response.json())
      .then(json => {
        if (!json.error) {
          return json.data;
        }
        alert('failed to fetch product images');
      })
  }
)