import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice, singleProductSlice } from "./productSlice";

const rootReducer = combineReducers({
  productReducer: productSlice.reducer,
  singleProductReducer: singleProductSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
