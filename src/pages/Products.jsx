import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/feature/productReducer/productSlice";
import StatusCode from "../utility/StatusCode";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Products() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>loading...</p>;
  }
  if (status === StatusCode.ERROR) {
    return <p>OOPs! something went wrong. Please try again later</p>;
  }
  return (
    <div className="flex flex-wrap justify-center">
      {data?.map((product, idx) => (
        <Card key={idx} className="border-2 m-2" style={{ width: "18rem" }}>
          <Card.Img variant="top" className="w-48 h-48" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
          <Button variant="primary" className="bg-blue-600 mx-4 my1 text-white">
            Add to cart
          </Button>
        </Card>
      ))}
    </div>
  );
}

export default Products;
