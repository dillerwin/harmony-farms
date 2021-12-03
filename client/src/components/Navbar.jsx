import React from "react";
import { useState } from "react";
//import {Link} from 'react';
import { Link } from "react-router-dom";
import About from "./About";
import Animals from "./Animals";
import Contact from "./Contact";
import Donate from "./Donate";
import Home from "./Home";
import WellnessCenter from "./WellnessCenter";
import Raffle from "./Raffle";
import VisitUs from './VisitUs';
import Events from './Events';
import DropDown from "./Dropdown";
//import './app.css';

function Navbar() {
  if (window.location.href.includes("/admin")) {
    return null;
  }
  return (
    <div className="Navbar">
      <div className="rightSide">
        <div className="links">
          <ol>
            <a>
              <Link to="/" component={Home}>
                Home
              </Link>
            </a>
            &nbsp;
            <a>
              <Link to="/about" component={About}>
                About Us
              </Link>
            </a>
            &nbsp;
            <a>
              <Link to="/animals" component={Animals}>
                Our Animals
              </Link>
            </a>
            &nbsp;
            <a>
              <Link to="/wellness-center" component={WellnessCenter}>
                Wellness Center
              </Link>
            </a>
            &nbsp;
            <a>
              <Link to="/raffle" component={Raffle}>
                Raffle
              </Link>
            </a>
            &nbsp;
            <a>
              <Link to="/visit-us" component={VisitUs}>
                Visit Us
              </Link>
            </a>
            &nbsp;
            <a>
              <Link to="/contact-us" component={Contact}>
                Contact Us
                </Link>
            </a>
          </ol>
        </div>
      </div>
      <div className="rightSide">
        <button className="button">
          <Link to="/donate">DONATE</Link></button>
      </div>
      <div className="dropdown-menu-wrapper">
        <button component={DropDown}></button>
      </div>
    </div>
  );
}

export default Navbar;
