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
//import Events from './Events';
import Services from './Services';
import Volunteer from './Volunteer';
//import './app.css';
import Dropdown from "./Dropdown";
import './Navbar.css';
import { NavButton } from "./NavButton";
import Logo from "./Logo";

function Navbar() {
  
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
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
  };

  return(
    <>
    <nav className="navbar">
    
      <div className="logo-image-wrapper">
      <Link to="/" component={Home}>
        <img src={Logo} className="logo-image" />
      </Link>
      </div>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {/* <li>
          <Link to = "/" className="nav-item" component={Home} onClick={closeMobileMenu}>Home</Link>
        </li> */}
        <li>
          <Link to = "/about" className="nav-item" component={About} onClick={closeMobileMenu}>About</Link>
        </li>
        <li>
          <Link to = "/animals" className="nav-item" component={Animals} onClick={closeMobileMenu}>Animals</Link>
        </li>
        <li>
          <Link to = "/wellness-center" className="nav-item" component={WellnessCenter} onClick={closeMobileMenu}>Wellness Center</Link>
        </li>
        <li>
          <Link to = "/raffle" className="nav-item" component={Raffle} onClick={closeMobileMenu}>&nbsp;Raffle&nbsp; </Link>
        </li>
        <li 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
          <Link to = "/services" className="nav-item" component={Services} onClick={closeMobileMenu}>
            Visit Us &nbsp;<i className="fas fa-caret-down"/>
            </Link>
            {dropdown && <Dropdown />}
        </li>
        <li>
          <Link to = "/contact" className="nav-item" component={Contact} onClick={closeMobileMenu}>Contact Us</Link>
        </li>
      </ul>
      <div>
      <NavButton />
      </div>
      
    </nav>
    </>
  );
}

export default Navbar;
