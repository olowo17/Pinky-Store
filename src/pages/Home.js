import React from "react";
import { PRODUCTS } from "../assets/products";
import Product from "../Product";

const Home = () => {
  return (
    <div className=" justify-center align-center m-4">
      <div className="electronics container m-auto">
        <h1 className="bg-black my-6 w-1/2 m-auto p-2 text-xl text-red-300  text-center">
          End of the year sales
        </h1>
        <div className="electronic-item grid grid-cols-4 gap-4">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
