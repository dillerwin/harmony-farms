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
          Animal sponsorship is one of the most valuable ways individuals can
          support our cause. With a variety of monetary levels that fit most
          budgets, sponsorship is a direct way to contribute to a resident's
          care. There are also perks of sponsorship including being
          automatically entered into our weekly raffles, special gifts to say
          "Thanks," holiday cards, and more!
        </p>
      </div>
      <SponsorCards />
      <Footer />
    </>
  );
}

// Exports Animals function to be used by other components
export default Animals;
