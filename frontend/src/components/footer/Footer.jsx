import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum
            optio laudantium! Fuga, maxime at magni accusamus saepe ad, eligendi
            quo fugit ipsa a odit! Officia, enim? Similique, sunt facilis.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="Facebook logo" />
            <img src={assets.twitter_icon} alt="twitter log" />
            <img src={assets.linkedin_icon} alt="linkedin log" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 1234567890</li>
            <li>contact@foodiehub.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyrigth">
        {" "}
        Copyrigth 2025 FoodieHub.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
