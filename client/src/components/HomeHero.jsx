import React from "react";
import "../App.css";

//Hero Image and Text Component for the About Page
function HomeHero() {
  return (
    <>
      <div id="hero-image" className="home-hero">
        <div className="hero-text">
          <h1 className="hero-welcome-text">
            Welcome to Harmony Farms Animal Sanctuary
          </h1>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
