import axios from "axios";
import { fetchProducts, fetchSingleProduct } from "../productSlice";

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     dispatch(fetchProducts(response.data));
//   };
// }

export const getProducts = () => async (dispatch) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  dispatch(fetchProducts(response.data));
};

export const getSingleProductById = (id) => async (dispatch) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  dispatch(fetchSingleProduct(response.data));
};
