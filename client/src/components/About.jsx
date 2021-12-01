//Imports react into the component
import React from "react";
//Imports Photo to use for About Page
import placeholder from "../img/about-placeholder.jpg";
//Imports About Hero Component into page
import AboutHero from "./AboutHero.jsx";
//Imports About Hero Component into page
import NavBar from "./Navbar.jsx";

function About() {
  return (
    <div id="about">
      <NavBar />
      <AboutHero />
      {/* Wrapper around entire content of page */}
      <div id="about-wrapper">
        {/* Wrapper around page image and description text */}
        <div id="about-img-text-wrapper">
          {/* Wrapper around image */}
          <div id="about-img-wrapper">
            {/* Image */}
            <img id="about-img" src={placeholder} alt="placeholder" />
            <figcaption id="about-img-caption">Image of Maramonie King and her husband at the Sanctuary</figcaption>
          </div>
          <div id="about-desc-wrapper">
            <h2 id="about-desc-heading">Harmony Farms Sanctuary and Wellness Center</h2>
            
            {/* Page description  */}
            <p id="about-desc">
              Our mission is to promote healing and improve mental well-being
              for both animals and humans through compassion and empathy. We
              offer animals that have suffered neglect or other abuse or who are at risk of being separated from their animal families a safe haven where they can live out the rest of their days in harmony. Animals have long played a major role in the human experience, and many don’t even realize how much they actually help us, both emotionally and psychologically. We also want to educate the public and promote compassion and empathy by allowing them to experience farmed and often forgotten animals and see that they are not just “products” but living, sentient beings capable of love, happiness, and understanding much like us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exports About function to be used by other components
export default About;
