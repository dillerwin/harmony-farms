import React from "react";
import './Navbar.css';

function Logo() {
    return (
        <>
        <div id="logo-image-wrapper">
            <img
            className="logo-image"
            src={require("../img/harmony-farms-logo.png").default} />
        </div>
        </>
    );
}

export default Logo;