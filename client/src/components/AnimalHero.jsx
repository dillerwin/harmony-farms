import React from "react";
import "../App.css";

//Hero Image and Text Component for the About Page
function AnimalHero() {
  return (
    <>
      <div id="hero-image " className="animal-hero">
        <div className="hero-text">
          <h1 className="hero-welcome-text">
            Meet the Animals of the Sanctuary
          </h1>
        </div>
      </div>
    </>
  );
}

export default AnimalHero;
