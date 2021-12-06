import React from 'react';
import './NavButton.css';
import { Link } from 'react-router-dom';
import Donate from './Donate';

export function NavButton () {
    return (
        <Link to = "/donate" component={Donate}>
            <button className="nav-btn">DONATE</button>
        </Link>
    );
}
