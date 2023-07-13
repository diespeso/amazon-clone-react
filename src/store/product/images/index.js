import { createSlice } from "@reduxjs/toolkit";
import { getImagesByProductId } from "./image.thunks";

const initialState = {
  data: [],
  loading: true,
};

export default createSlice({
  name: 'productImages',
  initialState,
  reducers: (builder) => {},
  extraReducers: (builder) => {
    builder
      .addCase(getImagesByProductId.fulfilled, (state, action) => {
        return {
          data: action.payload,
          loading: false,
        };
      })
  }
}).reducer