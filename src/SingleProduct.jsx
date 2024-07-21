import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProductById } from "./redux/thunk/productAction";
import { useSelector, useDispatch } from "react-redux";

function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.singleProductReducer);

  useEffect(() => {
    dispatch(getSingleProductById(id));
  }, []);

  return (
    <div>
      <div className="max-w-md mx-auto m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={data.image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>
          </a>
          <p className="mb-2  text-gray-900 dark:text-white">{data.category}</p>
          <p className="mb-2  text-gray-900 dark:text-white">
            {data.description}
          </p>

          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ${data.price}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
