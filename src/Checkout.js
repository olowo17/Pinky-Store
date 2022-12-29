import React from "react";
import { PRODUCTS } from "./assets/products";
import { shopContext } from "./Context/ShoppingContext";
import { useContext } from "react";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, getTotalAmount } = useContext(shopContext);
  const totalCost = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className="">
      <h2 className="m-auto w-1/3 bg-black text-red-300 p-4 text-2xl text-center mb-4  ">
        Your Cart Items
      </h2>
      <div>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <Cart key={product.id} data={product} />;
          }
        })}
      </div>

      <div className="checkout max-w-sm rounded-xl overflow-hidden shadow-lg mt-8 bg-red-300 m-auto p-auto ">
        {totalCost > 0 ? (
          <>
            <p className="text-center">
              Total Payout: <b>${totalCost}</b>
            </p>
            <div className="grid grid-cols-2">
              <button
                className="bg-black text-white rounded-md  p-2 m-4"
                onClick={() => navigate("/")}
              >
                continue shopping
              </button>
              <button className="bg-black text-white m-4 rounded-md p-2">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="bg-black text-sky-300 text-center p-1">
            Your cart is empty
          </p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
