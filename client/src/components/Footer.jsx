import React from "react";
import { HashLink as Link } from "react-router-hash-link";
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
            <a>
              <Link to="/#anchor" component={Home}>
                Home
              </Link>
            </a>
            <a>
              <Link to="/about#anchor" component={About}>
                About Us
              </Link>
            </a>
            <a>
              <Link to="/animals#anchor" component={Animals}>
                Our Animals
              </Link>
            </a>
            <a>
              <Link to="/wellness-center#anchor" component={WellnessCenter}>
                Wellness Center
              </Link>
            </a>
            <a>
              <Link to="/contact-us#anchor" component={Contact}>
                Contact
              </Link>
            </a>
            <a>
              <Link to="/donate#anchor" component={Donate}>
                Donate
              </Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
