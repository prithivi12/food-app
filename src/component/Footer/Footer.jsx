import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Prithivi lalchan is my name.Kakuda is a 2024 Hindi-language comedy
            horror film directed by Aditya Sarpotdar and produced by Ronnie
            Screwvala, under RSVP Movies. It stars Riteish Deshmukh, Sonakshi
            Sinha and Saqib Saleem in the lead roles. It is written by Chirag
            Garg and Avinash Dwivedi.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+12345667867</li>
            <li>marphahopme@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &#169;. All right reserved to Prithivi lalchan
      </p>
    </div>
  );
}

export default Footer;
