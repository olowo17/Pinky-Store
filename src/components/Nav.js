import React from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { shopContext } from "../Context/ShoppingContext";
import { useContext } from "react";

const Nav = () => {
  const { cartTotal } = useContext(shopContext);

  console.log(cartTotal);
  return (
    <div className="text-red-300 bg-black px-6 py-4 grid grid-cols-2 mb-4">
      <Link to="/">
        <h1 className="text-2xl">Pinky Store</h1>
      </Link>
      <div className="justify-self-end">
        <p className="text-red-500 text-2xl text-center">
          <b>{cartTotal}</b>
        </p>
        <Link to="/checkout">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
