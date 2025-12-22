"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const AddToCart = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);

  const handleAddToCart = () => {
    addToCart(food);
    setInCart(true);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl transition-colors duration-200 shadow-md active:scale-95 disabled:bg-orange-300">
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default AddToCart;
