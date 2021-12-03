import React from "react";
import "../App.css";

function PrizeImages() {
  return (
    <>
      <h2 className="donate-header">Some of our Previous Giveaway Prizes!</h2>
      <div className="raffle-images">
        <img
          className="intro-image"
          src={require("../img/farm-chickens.jpg").default}
        />
        <img
          className="intro-image"
          src={require("../img/farm-chickens.jpg").default}
        />
        <img
          className="intro-image"
          src={require("../img/farm-chickens.jpg").default}
        />
      </div>
    </>
  );
}

export default PrizeImages;
