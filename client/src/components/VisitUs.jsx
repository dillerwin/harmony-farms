//imports
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../Visitus.css";
import VisitUsHero from "./VisitUsHero.jsx";
// import DonateCards from "./DonateCards";
import Footer from "./Footer";
import hipcamp3 from "../img/hipcamp3.jpg";
import hipcamp2 from "../img/hipcamp2.jpg";
import hipcamp1 from "../img/hipcamp1.jpg";


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
            alt="Cows at pasture in the distance viewable from grill at campsite"
          />
          {/* Image */}
          <img
            id="hipcamp2-img"
            src={hipcamp2}
            alt="Glamping set up at the sanctuary featuring a fully outfitted tent, a seating area, and a dog"
          />
          {/* Image */}
          <img
            id="hipcamp3-img"
            src={hipcamp3}
            alt="Fire pit at the sanctuary glamping site featuring the Green Mountains of Vermont in the background"
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
            rel="noreferrer"
          >
            Book via HipCamp
          </a>
        </div>
      </div>
      <div id="tour-wrapper">
        <h2 id="tour-header">Interested in a Tour?</h2>
        {/* Image */}
        <div id="tour-img-text-wrapper">
          <img
            id="tour-img"
            src="https://res.cloudinary.com/dtbi27ygq/image/upload/c_scale,h_600,q_60/v1639420183/Website%20Content/Optimized%20Images/snow-sunset-alpaca-vegan-harmony-farm-sanctuary_mkbduu.jpg"
            alt="Brown alpaca at the sanctuary in the snow with sunset in the background"
          />
          <p id="tour-text">
            We'd love to show you around! We do stay pretty busy taking care of
            our animals here at the sanctuary, so please reach out to us via
            email at harmonyfarmsanctuaryvt@gmail.com to schedule a time to
            visit.
          </p>
        </div>
        <div id="tour-button-container">
          <Link to="/contact">
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
            Would you like a more "hands-on" way to support the sanctuary?
            Become a volunteer! We need ongoing help keeping shelters clean,
            completing projects, and just giving our residents the love and
            attention they deserve. If you are interested in volunteering,
            please email us a little about you, your availability, and any
            experience you might have working with animals at
            harmonyfarmsanctuaryvt@gmail.com. We also require all volunteers and
            visitors to complete a waiver. Thank you!
          </p>
          <img
            id="volunteer-img"
            src="https://res.cloudinary.com/dtbi27ygq/image/upload/c_scale,h_600,q_60/v1639419475/Website%20Content/Optimized%20Images/maramonie-alpaca-harmony-farm-vegan-sanctuary-vermont_ocbwdm.jpg"
            alt="Maramonie King snuggling next to a black cow with alpacas in the background at the sanctuary"
          />
        </div>
        <div id="volunteer-button-container">
          <Link to="/volunteer">
            <button className="button volunteer-button">
              Volunteer Waiver
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

//exports VisitUS function to be used by other components
export default VisitUs;
