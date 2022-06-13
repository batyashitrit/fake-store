import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AddBar from "./AddBar";
import CartContext from "../context/CartContext";
import SumContext from "../context/SumContext";

export default function Items(props) {
  const { cat } = useParams();
  const [items, setItems] = useState();
  const { cart, setCart } = useContext(CartContext);
  const {sum,setSum} = useContext(SumContext)
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/" + cat)
    .then((res) => res.json())
    .then((data) => setItems(data));
  }, [cart]);
  
  if (!items) return <span>loading...</span>;
  return (
    <div className="items">
      {items.length ? (
        items.map((i) => {
          {i.amount = 1}
          return (
            <>
              <div>
                <Link to={"/item/" + i.id} state={i}>
                  <img className="img" src={i.image} />
                  <h4>price: {i.price}</h4>
                </Link>
                {cart.some(v=> v.id == i.id) ?
            <AddBar am= {cart.map(c=>c.id == i.id? c.amount : "")} id = {i.id}></AddBar>:
            <button
                  className="btn"
                  onClick={() => {
                  setCart([...cart, i])}}
                >
                  Add to cart
                </button>}
                <Link to={"/item/" + i.id} state={i}>
                  <h4>{i.title}</h4>
                </Link>
              </div>
              
            </>
          );
        })
        ) : (
          <h5>not found</h5>
          )}
    </div>
  );
}
// {cart.map((v) => {
{
  /* if(v.id == i.id){
                return <button> + </button>;}
             else{
              return (
              <button className="btn" onClick={()=>{setCart([...cart, i])}}>Add to cart</button>)}})} */
}
