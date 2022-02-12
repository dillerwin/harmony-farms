import React from "react";

import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import Home from "./Home";
import Donate from "./Donate";
import About from "./About";
import Animals from "./Animals";
import Contact from "./Contact";
import AdminAuth from "../admin/AdminAuth";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-links">
          <div className="social-icon-container">
            <SocialIcon
              className="social-icon"
              url="https://www.instagram.com/harmonyfarmsanctuaryvt/?hl=en"
              target="_blank"
              rel="noreferrer"
            />
            <SocialIcon
              className="social-icon"
              url="https://www.facebook.com/harmonyfarmsanctuaryVT"
              target="_blank"
              rel="noreferrer"
            />
          </div>
          <div className="footer-list-container">
            <Link to="/" component={Home}>Home</Link>
            <Link to="/donate" component={Donate}>Donate</Link>
            <Link to="/about" component={About}>About Us</Link>
            <Link to="/animals" component={Animals}>Animals</Link>
            <Link to="/contact" component={Contact}>Contact Us</Link>
            <Link to="/admin" component={AdminAuth}>Admin Portal</Link>
            {/* <a href="/#anchor">Home</a>
            <a href="/donate#anchor">Donate</a>
            <a href="/about#anchor">About Us</a>
            <a href="/animals#anchor">OurAnimals</a>
            <a href="/contact">Contact Us</a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
