//imports
import React from "react";
import { Link } from "react-router-dom";
import VisitUsHero from "./VisitUsHero.jsx";
// import DonateCards from "./DonateCards";
import Footer from "./Footer";
import hipcamp3 from "../img/hipcamp3.jpg";
import hipcamp2 from "../img/hipcamp2.jpg";
import hipcamp1 from "../img/hipcamp1.jpg";
import farmPigs from "../img/farm-pigs.jpg";

function Services() {
  return (
    <div id="services">
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
      <div id="cash-donation-container">
        <h2 className="cash-donation-header">Interested in a Tour?</h2>
        {/* Image */}
        <img id="about-img" src={farmPigs} alt="Pigs at the Sanctuary" />
        <p className="money-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nulla
          eum voluptatem, eveniet quidem exercitationem animi totam laborum
          possimus enim iure ducimus ipsum doloribus dolorem.
        </p>
        <div className="money-button-container">
          <Link to="/book-tour">
            <button className="button money-button">Send Us an Email</button>
          </Link>
        </div>
      </div>
      {/* <div className="line"></div> */}
      {/* <DonateCards /> */}

      <div>
        <h1>Interested in Volunteering?</h1>
      </div>
      <Footer />
    </div>
  );
}

//exports Services function to be used by other components
export default Services;
