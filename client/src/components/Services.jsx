//imports react into the component
import React from "react";
import ServicesHero from "./ServicesHero.jsx";
import Footer from "./Footer";

function Services() {
  return (
    <div id="services">
      <ServicesHero />
      <h1>This will be the Services page</h1>
      <Footer />
    </div>
  );
}

//exports Services function to be used by other components
export default Services;