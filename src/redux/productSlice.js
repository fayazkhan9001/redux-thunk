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

export const singleProductSlice = createSlice({
  name: "product",
  initialState: {
    data: {},
  },
  reducers: {
    fetchSingleProduct: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchSingleProduct } = singleProductSlice.actions;
