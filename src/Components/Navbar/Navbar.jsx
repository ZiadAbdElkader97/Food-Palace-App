/* eslint-disable react/prop-types */
import "./Navbar.css";
import { useContext, useState } from "react";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";

export default function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <div className="nav-sec1">
        <Link to="/">
          <img className="logo-img" src={assets.heading_logo} alt="" />
        </Link>
      </div>
      <div className="nav-sec2">
        <ul className="nav-ul">
          <Link
            to="/"
            className={menu === "home" ? "active" : ""}
            id="home"
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
          <li
            className={menu === "menu" ? "active" : ""}
            onClick={() => setMenu("menu")}
          >
            <a href="#explore-menu">Menu</a>
          </li>
          <li
            className={menu === "mobile-app" ? "active" : ""}
            onClick={() => setMenu("mobile-app")}
          >
            <a href="#app-download">Mobile App</a>
          </li>
          <li
            className={menu === "contact" ? "active" : ""}
            onClick={() => setMenu("contact")}
          >
            <a href="#footer">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="nav-sec3">
        <img src={assets.search_icon} className="search_icon" />
        <div className="nav-basket">
          <Link to="/cart">
            <img src={assets.basket_icon} className="basket_icon" />
          </Link>
          <span className={getTotalCartAmount() === 0 ? "" : "nav-dot"}></span>
        </div>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </div>
    </div>
  );
}
