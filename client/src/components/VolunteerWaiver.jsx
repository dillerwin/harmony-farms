//Imports react into the component
import React from "react";
import VolunteerWaiverHero from "./VolunteerWaiverHero";
import VolunteerWaiverEmbed from "./VolunteerWaiverEmbed";
import "../VolunteerWaiver.css";
import { HashLink as Link } from "react-router-hash-link";
import Footer from "./Footer";

function VolunteerWaiver() {
  return (
    <div id="volunteer">
      <VolunteerWaiverHero />
      <div id="volunteer-waiver-container">
        <h1 id="volunteer-waiver-header">Volunteer Waiver</h1>
        <p id="volunteer-waiver-text">
          Would you like a more "hands-on" way to support the sanctuary? Become
          a volunteer! We need ongoing help keeping shelters clean, completing
          projects, and just giving our residents the love and attention they
          deserve. If you are interested in volunteering, please email us a
          little about you, your availability, and any experience you might have
          working with animals at harmonyfarmsanctuaryvt@gmail.com. We also
          require all volunteers and visitors to complete a waiver. Thank you!
        </p>
      </div>
      <div id="form-wrapper">
        <div id="waiver-form-container">
          <VolunteerWaiverEmbed />
        </div>
        <div id="volunteer-contact-button-container">
          <Link to="/contact#anchor">
            <button className="button volunteer-waiver-button">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Exports Volunteer function to be used by other components
export default VolunteerWaiver;
