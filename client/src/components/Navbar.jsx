import React from "react";
import {Link} from 'react-router-dom';
// import '../navbar.css';
import Home from "./Home.jsx";
import About from "./About.jsx";
import Animals from "./Animals.jsx";
import WellnessCenter from "./WellnessCenter.jsx";
import Support from "./Support.jsx";
import Volunteer from "./Volunteer.jsx";
import ContactUs from "./Contact.jsx";

function Navbar() {
    return(
        <div className="App">
            <nav className="Navbar">
                <h2>Harmony Farms Sanctuary</h2>
                <ul>
                    <li>
                        <Link to= "/" component={Home}>Home</Link>
                    </li>
                    <li>
                        <Link to= "/about" component={About}>About</Link>
                    </li>
                    <li>
                        <Link to= "/animals" component={Animals}>Our Animals</Link>
                    </li>
                    <li>
                        <Link to = "/wellness-center" component={WellnessCenter}>Wellness Center</Link>
                    </li>
                    <li>
                        <Link to= "/support" component= {Support}>Support</Link>
                    </li>
                    <li>
                        <Link to= "/volunteer" component= {Volunteer}>Volunteer</Link>
                    </li>
                    <li>
                        <Link to= "/contact-us" component= {ContactUs}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;