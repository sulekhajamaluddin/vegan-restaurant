//Node Modules
import { Link } from "react-router-dom";

//Project Files
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/category" state={{ categoryName: "dishes" }}>
        DISHES
      </Link>
      <Link to="/category" state={{ categoryName: "desserts" }}>
        DESSERTS
      </Link>
      <Link className="logo-holder" to="/">
        <img
          className="logo"
          src={logo}
          alt="Beet Bowl written in pale beetroot color"
        />
      </Link>
      <Link to="/category" state={{ categoryName: "drinks" }}>
        DRINKS
      </Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  );
}
