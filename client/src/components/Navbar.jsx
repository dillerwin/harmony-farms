import React from "react";
//import {Link} from 'react';
import {Navbar, Nav, NavDropdown} from 'react'
//import './navbar.css';

function Navbar() {
    return(
        <div className="App">
            <Navbar>
  <Container>
    <Navbar.Brand href="#home">Harmony Farm Sanctuary</Navbar.Brand>
    <Navbar.Toggle aria-controls="nav-controls" />
    <Navbar.Collapse id="navbar">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#aboutlink">About Us</Nav.Link>
        <Nav.Link href="#animalslink">Our Animals</Nav.Link>
        <Nav.Link href="#wellnesslink">Wellness Center</Nav.Link>
        <NavDropdown title="Ways to Support Us" id="dropdown">
          <NavDropdown.Item href="#donate">Donate</NavDropdown.Item>
          <NavDropdown.Item href="#shop">Shop Merchandise</NavDropdown.Item>
          <NavDropdown.Item href="#amazon">Amazon Wishlist</NavDropdown.Item>
          <NavDropdown.Item href="#chewy">Chewy.com Wishlist</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#volunteer">Volunteer</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   
        </div>
    );
}

export default Navbar();



/* <nav className="Navbar">
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
                        <Link to= "/contact-us" component= {ContactUs}>Contact Us</Link>
                    </li>
                </ul>
            </nav> */
