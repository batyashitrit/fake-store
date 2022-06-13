import { Home, About, NotFound } from "./Example";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./componnet/Header";
import Main from "./componnet/Main";
import Items from "./componnet/Items";
import Cart  from "./componnet/Cart";
import CartContext from "./context/CartContext";
import { useState } from "react";
import SumContext from "./context/SumContext";

export default function Layout() {
  const [cart, setCart] = useState([]);
  const [sum,setSum] = useState(0 + `$`)

  return (
    <div>
      <Header />
      <CartContext.Provider value={{ cart, setCart }}>
        <SumContext.Provider value={{sum,setSum}}>
        <div className="mainAndCart">
          <Main />
          <div className="cart">
            <Cart />
          </div>
        </div>
      </SumContext.Provider>
      </CartContext.Provider>
      {/* <Routes>
        <Route path="/cat/:catName" element={<Main/>}></Route>
        <Route path="/cat/:catName/:id" element={<Main/>}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        </Routes>    */}
    </div>
  );
}
