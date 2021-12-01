import React from "react";
import {Link, Switch, Route} from 'react-router-dom';
import './navbar.css';

function Navbar () {
    return(
        <div className="App">
            <nav className="Navbar">
                <h2>Harmony Farms Sanctuary</h2>
                <ul>
                    <li>
                        <Link to= "/" component={Home}>Home</Link>
                    </li>
                    <li>
                        <Link to= "/about" component={AboutUs}>About</Link>
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

            <Switch>
                <Route exact path = "/">
                    <h2>Home</h2>
                </Route>
                <Route exact path = "/about">
                    <h2>About</h2>
                </Route>
                <Route exact path = "/animals">
                    <h2>Our Animals</h2>
                </Route>
                <Route exact path = "/wellness-center">
                    <h2>Wellness Center</h2>
                </Route>
                <Route exact path = "/Support">
                    <h2>Support</h2>
                </Route>
                <Route exact path = "/volunteer">
                    <h2>Volunteer</h2>
                </Route>
                <Route exact path = "/shop">
                    <h2>Shop</h2>
                </Route>
                <Route exact path = "/contact-us">
                    <h2>Contact Us</h2>
                </Route>
            </Switch>

        </div>
    );
}

export default function Navbar();