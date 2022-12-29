import React from "react";
import { useContext } from "react";
import { shopContext } from "./Context/ShoppingContext";

const Cart = ({ data }) => {
  //   const [count, setCount] = useState(1);
  const { id, productName, ProductImage, price } = data;
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(shopContext);

  //   const decrease = () => {
  //     setCount(count - 1);
  //   };

  //   const increase = () => {
  //     setCount(count + 1);
  //   };
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg space-y-2 justify-center  p-2 text-center m-auto ">
      <img className="product-image h-20 m-auto" src={ProductImage} alt="" />
      <p>
        <b>{productName}</b>
      </p>
      <p>
        <b>{price}</b>
      </p>
      <div className="">
        <button
          onClick={() => removeFromCart(id)}
          className="text-2xl bg-black text-red-300 p-2 rounded-md"
        >
          -
        </button>
        <input
          className="text-center text-2xl w-20"
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        {/* {count} <p> {count > 1 ? "items" : "item"}</p> */}

        <button
          onClick={() => addToCart(id)}
          className="text-2xl bg-black text-red-300 p-2 rounded-sm"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
