import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Animals from "./Animals";
import Contact from "./Contact";
import Home from "./Home";
import WellnessCenter from "./WellnessCenter";
import Donate from "./Donate";

import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-links">
          <div className="social-icon-container">
            <SocialIcon
              className="social-icon"
              url="https://www.instagram.com/harmonyfarmsanctuaryvt/"
              target="_blank"
            />
            <SocialIcon
              className="social-icon"
              url="https://www.facebook.com/pages/Harmony-Farm-Sanctuary-and-Wellness-Center/108269530879500"
              target="_blank"
            />
          </div>
          <div className="footer-list-container">
            <a>
              <Link to="/" component={Home}>
                Home
              </Link>
            </a>
            <a>
              <Link to="/about" component={About}>
                About Us
              </Link>
            </a>
            <a>
              <Link to="/animals" component={Animals}>
                Our Animals
              </Link>
            </a>
            <a>
              <Link to="/wellness-center" component={WellnessCenter}>
                Wellness Center
              </Link>
            </a>
            <a>
              <Link to="/contact-us" component={Contact}>
                Contact
              </Link>
            </a>
            <a>
              <Link to="/donate" component={Donate}>
                Donate
              </Link>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="rightSide">
        <button className="button">DONATE</button>
      </div> */}
    </>
  );
}

export default Footer;
