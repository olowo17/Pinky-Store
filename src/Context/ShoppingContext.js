import React, { createContext } from "react";
import { useState } from "react";
import { PRODUCTS } from "../assets/products";

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const shopContext = createContext();
export const ShoppingContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const updateCartItemCount = (newCount, id) => {
    setCartItems((prev) => ({ ...prev, [id]: newCount }));
  };

  const getTotalAmount = () => {
    let totalCost = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalCost += cartItems[item] * itemInfo.price;
        // console.log(itemInfo.price);
      }
    }
    return totalCost;
  };

  console.log(cartItems);

  let cartTotal = 0;
  for (const item in cartItems) {
    cartTotal += cartItems[item];
  }
  // console.log(cartTotal);

  const contextData = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalAmount,
    cartTotal,
  };

  return (
    <shopContext.Provider value={contextData}>
      {props.children}
    </shopContext.Provider>
  );
};
