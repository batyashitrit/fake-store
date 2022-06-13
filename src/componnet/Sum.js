import React from "react";
import { useContext, useState } from "react";

import CartContext from "../context/CartContext";


export default function Sum(props) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      <h3> Total Price: {props.totalPrice.reduce((a, b) => a + b, 0)}$</h3>
      <h3> Product Number: {props.products.reduce((a, b) => a + b, 0)} </h3>
      <button onClick={()=>setCart([])} >Empty 🗑️</button>

    </div>
  );
}
