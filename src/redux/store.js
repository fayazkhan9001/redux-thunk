import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./feature/productReducer/productSlice";

const rootReducer = combineReducers({
  productReducer: productSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
