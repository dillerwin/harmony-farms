//Imports react into the component
import React from "react";
//Imports  Hero Component into page
import AnimalHero from "./AnimalHero";
import Footer from "./Footer";
import SponsorCards from "./SponsorCards";

function Animals() {
  return (
    <>
      <AnimalHero />
      <div id="donate-header-container">
        <h1 className="donate-header">Sponsor one of the Animals</h1>
        <p className="donate-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nulla
          eum voluptatem, eveniet quidem exercitationem animi totam laborum
          possimus enim iure ducimus ipsum doloribus dolorem.
        </p>
      </div>
      <SponsorCards />
      <Footer />
    </>
  );
}

// Exports Animals function to be used by other components
export default Animals;
