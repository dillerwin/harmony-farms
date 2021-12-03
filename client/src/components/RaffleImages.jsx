import React from "react";
import "../App.css";

function RaffleImage() {
  return (
    <>
      <div>
        <img
          className="intro-image"
          src={require("../img/farm-chickens.jpg").default}
        />
      </div>
    </>
  );
}

export default RaffleImage;
