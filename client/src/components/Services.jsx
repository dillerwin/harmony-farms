//imports react into the component
import React from "react";
import ServicesHero from "./ServicesHero.jsx";

function Services() {
  return (
    <div id="services">
      <ServicesHero />
      <h1>This will be the Services page</h1>
    </div>
  );
}

//exports Services function to be used by other components
export default Services;