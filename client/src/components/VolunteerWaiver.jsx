//Imports react into the component
import React from "react";
import VolunteerWaiverHero from "./VolunteerWaiverHero";
import VolunteerWaiverEmbed from "./VolunteerWaiverEmbed";
import "../VolunteerWaiver.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function VolunteerWaiver() {
  return (
    <div id="volunteer">
      <VolunteerWaiverHero />
      <div id="volunteer-waiver-container">
        <h1 id="volunteer-waiver-header">Volunteer Waiver</h1>
        <p id="volunteer-waiver-text">
          Interested in volunteering at the Sanctuary? Please fill out the
          waiver below and send us an email at harmonyfarmsanctuaryvt@gmail.com
          for more information. Thank you!
        </p>
      </div>
      <div id="form-wrapper">
        <div id="waiver-form-container">
        <VolunteerWaiverEmbed />
        </div>
        <div id="volunteer-contact-button-container">
          <Link to="/contact-us">
            <button className="button volunteer-waiver-button">Contact Us</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Exports Volunteer function to be used by other components
export default VolunteerWaiver;
