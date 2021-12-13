import React from "react";

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
            <a href="/#anchor">Home</a>
            <a href="/donate#anchor">Donate</a>
            <a href="/about#anchor">About Us</a>
            <a href="/animals#anchor">OurAnimals</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
