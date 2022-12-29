import React from "react";
import Button from "./components/Button";

const Product = ({ data }) => {
  const { id, productName, price, ProductImage } = data;
  return (
    <div className="product-detials justify-center align-center">
      <div className="product-card border border-sky-500 p-2 auto-cols-max text-center">
        <img src={ProductImage} alt="" className="h-40 m-auto" />
        <div className="product-description">
          <p>
            <b> {productName}</b>
          </p>
          <p> {price}</p>
          <Button id={id} />
        </div>
      </div>
    </div>
  );
};

export default Product;
