import { Route, Routes, Link } from "react-router-dom";
export default function Header() {
 
  return (
    <div>
      
      <h1><Link className="home" to={"/"}>🏠</Link> Fake Store
    <br/>  
    </h1>
    </div>
  );
}
