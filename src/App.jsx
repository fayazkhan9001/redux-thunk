import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Router,
} from "react-router-dom";
import Product from "./Product";
import About from "./About";
import SingleProduct from "./SingleProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
