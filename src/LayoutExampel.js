import { Home, About, NotFound } from "./Example";
import { Route, Routes, Link } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">|About</Link>
        <Link to="/*">|Else </Link>
        <span>page: {}
        <Routes>
        <Route path="/" element={<b>HOME 🏠</b>}></Route>
        <Route path="/about" element={<b>ABOUT ME 😊</b>}></Route>
        <Route path="/*" element={<b>ERORR 🥴</b>}></Route>
      </Routes>
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
