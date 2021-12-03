import React from "react";
//import {Link} from 'react';
import { Link } from "react-router-dom";
import About from "./About";
import Animals from "./Animals";
import Contact from "./Contact";
import Donate from "./Donate";
import Home from "./Home";
import WellnessCenter from "./WellnessCenter";
import Raffle from "./Raffle";
//'./app.css';

function Navbar() {
  if (window.location.href.includes("/admin")) {
    return null;
  }

  // {/* <div className="dropdown-menu">
  //     <button id="drop-button">Ways to Support Us</button>
  //     <div id="menu-items" className="dropdown-items">

  //         <li><a id="donate"> <Link to ="/donate" component={Donate}>Donate</Link></a></li>

  //         <li><a id="chewy"> <Link to ="/chewy">Chewy Wishlist</Link></a></li>

  //         <li><a id="amazon"> <Link to ="/amazon">Amazon Wishlist</Link></a></li>

  //         <li><a id="volunteer"> <Link to ="/volunteer">Volunteer</Link></a></li>
  
  //     </div>
  // </div> */}

  // {/* </div>*/}
  // {/* <div className="donate-button-wrapper">
  //     <button className="button">DONATE</button>
  // </div> */}

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
