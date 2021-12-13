//Imports react into the component
import React from "react";
//Imports About Hero Component into page
import ContactHero from "./ContactHero"
import ContactEmbed from "./ContactEmbed";
import Footer from "./Footer"
import "../Contact.css"

function Contact() {
  return (
    <div id="contact">
      <ContactHero />
      <div id="contact-container">
        <h1 id="contact-header">Contact Us</h1>
        <p id="contact-text">
          We would love to hear from you! Send us a message if you would like to volunteer, schedule a time to visit, become a prize donor, or would like to learn more about what we do here at Harmony Farm Sanctuary and Wellness Center. Thank you for supporting the us!
        </p>
      </div>
      <div id="form-wrapper">
        <div id="contact-form-container">
        <ContactEmbed />
        </div>
    </div>
    <Footer />
    </div>
  );
}

// Exports Contact function to be used by other components
export default Contact;
