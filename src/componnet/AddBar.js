import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import Sum from "./Sum";

export default function AddBar(props) {
  const addAmount = (id) => {
    cart.filter((am) => (am.id == id ? (am.amount += 1) : am.amount));
    setCart([...cart]);
  };

  const minosAmount = (id) => {
    cart.filter((am) => (am.id == id ? (am.amount -= 1) : am.amount));
    setCart([...cart]);
      const newCart = cart.filter(am=> am.amount > 0)
      setCart([...newCart])
  };
  const { cart, setCart } = useContext(CartContext);

  return (
    <>
      <button id={props.id} className= "btnAmount" onClick={(e) => addAmount(e.target.id)}>
        +
      </button>
      <span className="spn">{props.am}</span>
      <button id={props.id} className= "btnAmount" onClick={(e) => minosAmount(e.target.id)}>
        -
      </button>
    </>
  );
}
