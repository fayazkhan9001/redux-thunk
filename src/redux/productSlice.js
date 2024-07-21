import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  reducers: {
    fetchProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchProducts } = productSlice.actions;
