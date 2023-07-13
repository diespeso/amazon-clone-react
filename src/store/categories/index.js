import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "./categories.thunk";

const initialState = {
  data: {
    list: [],
  },
  loading: true,
};

export default createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.fulfilled, (state, action) => {
        return {
          ...state,
          data: {
            ...state.data,
            list: action.payload,
          },
          loading: false,
        }
      })
  }
}).reducer