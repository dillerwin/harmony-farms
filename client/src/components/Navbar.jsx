import React from "react";
//import {Link} from 'react';
import {Link} from 'react'
//import './navbar.css';

function Navbar() {
    return(
        <div className="Navbar">

            <div className="leftSide">
            <div className="links">
                <a href="/home">Home</a>
                <a href="/about">About Us</a>
                <a href="/animals">Our Animals</a>
                <a href="/wellness-center">Wellness Center</a>
                <a href="/contact-us"></a>
            </div>
            </div>
            <div className="rightSide">
                <button>DONATE</button>
            </div>
   
        </div>
    );
}

export default Navbar;
