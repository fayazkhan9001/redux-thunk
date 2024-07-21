import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Router,
} from "react-router-dom";
import Product from "./Product";
import SingleProduct from "./SingleProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Product />}>
      <Route path="/product" element={<Product />} />
      <Route path="/singleproduct" element={<SingleProduct />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
