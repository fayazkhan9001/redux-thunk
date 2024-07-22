import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/fetch", async () => {
  const respone = await axios.get("https://fakestoreapi.com/products");
  return respone.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {
    // fetchProducts: (state, action) => {
    //   state.data = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.status = "loading...";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "error";
      });
  },
});
