"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

const CartItems = () => {
  const { cart } = use(CartContext);
  return (
    <div>
      <h2 className="font-bold mb-2">{cart.length} Items Added</h2>
      {cart.map((c, index) => (
        <h2 className="my-2" key={c.id}>
          {index + 1}.{c.title}
        </h2>
      ))}
    </div>
  );
};

export default CartItems;
