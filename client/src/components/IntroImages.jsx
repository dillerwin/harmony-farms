import React from "react";
import "../App.css";

function IntroImages() {
  return (
    <>
      <div id="intro-image-container">
        <img
          className="intro-image outside-image outside-image-left"
          src={require("../img/farm-chickens.jpg").default}
        />

        <img
          className=" intro-image middle-image"
          src={require("../img/farm-goats.jpg").default}
        />

        <img
          className="intro-image outside-image outside-image-right"
          src={require("../img/farm-pigs.jpg").default}
        />
      </div>
    </>
  );
}

export default IntroImages;
