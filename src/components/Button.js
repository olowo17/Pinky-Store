import React from "react";
import { shopContext } from "../Context/ShoppingContext";
import { useContext } from "react";

const Button = ({ id }) => {
  const { addToCart, cartItems } = useContext(shopContext);
  const cartItemsAmount = cartItems[id];
  return (
    <button
      className="btn rounded-md bg-black text-red-300 p-1 my-2 hover:text-sky-500"
      onClick={() => addToCart(id)}
    >
      Add to cart{cartItemsAmount > 0 && <>({cartItemsAmount})</>}
    </button>
  );
};

export default Button;
