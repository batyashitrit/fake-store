import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import SumContext from "../context/SumContext";
import AddBar from "./AddBar";
import Sum from "./Sum";


export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  return (
      <>
        <h2>cart</h2>
      {cart && cart.map((i,c) => {
        return (
          <div id = {i.id} className="cart">
            <img className="imgcart" src={i.image} />
            <h5>price: {i.price}</h5>
            <h4>{i.title}</h4>
            <AddBar am= {i.amount} id = {i.id}></AddBar>
          </div>
        );
      })}

      <Sum totalPrice ={cart.map(c=> (c.price * c.amount))} products = {cart.map(c=> c.amount)}></Sum>
    
    </>
  );
}
