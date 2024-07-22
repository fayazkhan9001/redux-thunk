import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../../../utility/StatusCode";
import axios from "axios";

export const getProduct = createAsyncThunk("product/fetch", async () => {
  const respone = await axios.get("https://fakestoreapi.com/products");
  return respone.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: StatusCode.IDLE,
  },
  reducers: {
    // fetchProducts: (state, action) => {
    //   state.data = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});
