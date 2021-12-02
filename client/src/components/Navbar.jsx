import React from "react";
//import {Link} from 'react';
import { Link } from "react-router-dom";
import About from "./About";
import Animals from "./Animals";
import Contact from "./Contact";
import Home from "./Home";
import WellnessCenter from "./WellnessCenter";
import Raffle from "./Raffle";
//'./app.css';

function Navbar() {
  if (window.location.href.includes("/admin")) {
    return null;
  }
  return (
    <div className="Navbar">
      <div className="leftSide">
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
              <Link to="/contact-us" component={Contact}></Link>
            </a>
            <a>
              <Link to="/raffle" component={Raffle}>
                Raffle
              </Link>
            </a>
          </ol>
        </div>
      </div>
      <div className="rightSide">
        <button className="button">DONATE</button>
      </div>
    </div>
  );
}

export default Navbar;
