import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import searchIcon from "../../assets/search_icon.png";
import basketIcon from "../../assets/basket_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="navbar">
      <img src={logo} alt="FoodieHub_App logo" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile")}
          className={menu === "mobile" ? "active" : "e-app"}
        >
          Mobile App
        </li>
        <li
          onClick={() => setMenu("Contact-us")}
          className={menu === "Contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={searchIcon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <img src={basketIcon} alt="Basket Icon" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
