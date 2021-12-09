//imports
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../Visitus.css"
import VisitUsHero from "./VisitUsHero.jsx";
// import DonateCards from "./DonateCards";
import Footer from "./Footer";
import hipcamp3 from "../img/hipcamp3.jpg";
import hipcamp2 from "../img/hipcamp2.jpg";
import hipcamp1 from "../img/hipcamp1.jpg";
import farmPigs from "../img/farm-pigs.jpg";
import About from "../img/about-placeholder.jpg";

function VisitUs() {
  return (
    <div id="visit-us">
      <VisitUsHero />
      <div id="glamping-container">
        <h1 id="glamping-header">Glamping at the Sanctuary</h1>
        <p id="glamping-text">
          Did you ever wonder what it would be like to live on a farm animal
          sanctuary? Well this is an opportunity for you to find out! This is a
          peaceful, rural setting that is close to many local attractions
          including lakes, rivers, farmers markets, hiking, and exploring quaint
          small towns. Our road is perfect for biking and offers amazing
          mountain vistas with views of the Green Mountains and Mount Mansfield.
          Come relax, unplug, and enjoy all that the beautiful Northern Kingdom
          of Vermont has to offer!
        </p>
        <div id="glamping-img-wrapper">
          {/* Image */}
          <img
            id="hipcamp1-img"
            src={hipcamp1}
            alt="Glamping at the Sanctuary"
          />
          {/* Image */}
          <img
            id="hipcamp2-img"
            src={hipcamp2}
            alt="Glamping at the Sanctuary"
          />
          {/* Image */}
          <img
            id="hipcamp3-img"
            src={hipcamp3}
            alt="Glamping at the Sanctuary"
          />
        </div>
        <figcaption id="glamping-img-caption">
          Glamping Setup at the Sanctuary
        </figcaption>
        <div id="hip-camp-button-container">
          <a
            className="button hip-camp-button"
            href="https://www.hipcamp.com/en-US/vermont/maramonie-k-s-land/glamping-at-the-sanctuary"
            target="_blank"
          >
            Book via HipCamp
          </a>
        </div>
      </div>
      <div id="tour-wrapper">
        <h2 id="tour-header">Interested in a Tour?</h2>
        {/* Image */}
        <div id="tour-img-text-wrapper">
        <img id="tour-img" src={farmPigs} alt="Pigs at the Sanctuary" />
        <p id="tour-text">
          We'd love to show you around! We do stay pretty busy taking care of our animals here at the sanctuary, so please reach out to us via email at harmonyfarmsanctuaryvt@gmail.com to schedule a time to visit. 
        </p>
        </div>
        <div id="tour-button-container">
          <Link to="/book-tour">
            <button className="button tour-button">Contact Us</button>
          </Link>
        </div>
      </div>
      {/* <div className="line"></div> */}
      {/* <DonateCards /> */}

      <div id="volunteer-wrapper">
        <h2 id="volunteer-header">Interested in Volunteering?</h2>
        {/* Image */}
        <div id="volunteer-img-text-wrapper">
        <p id="volunteer-text">
        We'd love to have your help! Please fill out the volunteer waiver (linked below) and send us an email at harmonyfarmsanctuaryvt@gmail.com for more information. Thank you!
        </p>
        <img id="volunteer-img" src={About} alt="Pigs at the Sanctuary" />
        </div>
        <div id="volunteer-button-container">
          <Link to="/volunteer#anchor">
            <button className="button volunteer-button">Volunteer Waiver</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

//exports VisitUS function to be used by other components
export default VisitUs;
