import { Routes, useParams, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import AddBar from "./AddBar";
import CartContext from "../context/CartContext";

export default function Item(props) {
const { cat, id } = useParams();
const loc = useLocation()
const [item,setItem] = useState(loc.state)
const { cart, setCart } = useContext(CartContext);


useEffect(() => {
  if(!item){
  fetch("https://fakestoreapi.com/products/" + id)
    .then((res) => res.json())
    .then((data) => setItem(data))};
}, []);

  if (!item) return <span>loading...</span>;
  return (
    <div>
          <div className="item">
            <img className="img" src={item.image}></img> <h4>{item.title}</h4>
            <h4>{item.price}</h4>
            {cart.some(v=> v.id == item.id) ?
            <AddBar am= {cart.map(c=>c.id == item.id? c.amount : "")} id = {item.id}></AddBar>:
            <button
                  className="btn"
                  onClick={() => {
                  setCart([...cart, item])}}
                >
                  Add to cart
                </button>}
            <h5 className="description">{item.description}</h5>
          </div>
    </div>
  );
}

