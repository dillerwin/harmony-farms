import React from "react";
import "../App.css";

function PrizeImages() {
  return (
    <>
      <h2 className="donate-header">Some of our Previous Giveaway Prizes!</h2>
      <div id="intro-image-container">
        <img
          className="intro-image"
          src={require("../img/prize-1.jpg").default}
        />
        <img
          className="intro-image"
          src={require("../img/prize-2.jpg").default}
        />
        <img
          className="intro-image"
          src={require("../img/prize-3.jpg").default}
        />
        <img
          className="intro-image"
          src={require("../img/prize-4.jpg").default}
        />
        <img
          className="intro-image"
          src={require("../img/prize-5.jpg").default}
        />
      </div>
    </>
  );
}

export default PrizeImages;
