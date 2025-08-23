import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import searchIcon from "../../assets/search_icon.png";
import basketIcon from "../../assets/basket_icon.png";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (section) => {
    setMenu(section);
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="FoodieHub Logo" className="logo" />

      <div className="hamburger">
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
      </div>

      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li
          onClick={() => handleMenuClick("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => handleMenuClick("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => handleMenuClick("mobile")}
          className={menu === "mobile" ? "active" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => handleMenuClick("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>

      <div className="navbar-right">
        <img src={searchIcon} alt="Search" />
        <div className="navbar-search-icon">
          <img src={basketIcon} alt="Basket" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
