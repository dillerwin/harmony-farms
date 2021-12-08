import React from "react";
//import { useState } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import About from "./About";
import Animals from "./Animals";
import Contact from "./Contact";
//import Donate from "./Donate";
import Home from "./Home";
import WellnessCenter from "./WellnessCenter";
import Raffle from "./Raffle";
import VisitUs from "./VisitUs";
import Events from "./Events";
import DropDown from "./Dropdown";
//import './app.css';
import Dropdown from "./Dropdown";
import "./Navbar.css";
import { NavButton } from "./NavButton";
//import Logo from "./Logo";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  // GB: Dill- moved your admin block to down below my hooks bc it was throwing error
  if (window.location.href.includes("/admin")) {
    return null;
  }
  return (
    <>

    <nav className="navbar">
    
      <div>
      <Link to="/" component={Home}>
        <img src={require("../img/harmony-farms-logo.png").default} className="logo-image" />
      </Link>
      </div>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <div className="nav-menu-wrapper">
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {/* <li>
          <Link to = "/" className="nav-item" component={Home} onClick={closeMobileMenu}>Home</Link>
        </li> */}
        <li className="nav-item">
          <Link to = "/about" className="nav-links" component={About} onClick={closeMobileMenu}>About</Link>
        </li>
        <li className="nav-item">
          <Link to = "/animals" className="nav-links" component={Animals} onClick={closeMobileMenu}>Animals</Link>
        </li>
        <li className="nav-item">
          <Link to = "/wellness-center" className="nav-links" component={WellnessCenter} onClick={closeMobileMenu}>Wellness Center</Link>
        </li>
        <li className="nav-item">
          <Link to = "/raffle" className="nav-links" component={Raffle} onClick={closeMobileMenu}>&nbsp;Raffle&nbsp; </Link>
        </li>
        <li 
        className="nav-item" 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
          <Link to = "/visit-us" className="nav-links" component={VisitUs} onClick={closeMobileMenu}>
            Visit Us &nbsp;<i className="fas fa-caret-down"/>
            </Link>
            {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to = "/contact" className="nav-links" component={Contact} onClick={closeMobileMenu}>Contact Us</Link>
        </li>
      </ul>
      </div>
      <div>
      <NavButton />
      </div>
      
    </nav>
    </>

    );
}

export default Navbar;
