import React from "react";

function Cards() {
  return (
    <>
      <div className="card-container">
        <div class="card">
          <img
            className="card-image"
            src={require("../img/farm-chickens.jpg").default}
          />
          <div class="container">
            <h4>
              <b>Merchandise</b>
            </h4>
            <p>Visit our store!</p>
          </div>
        </div>
        <div class="card">
          <img
            className="card-image"
            src={require("../img/farm-chickens.jpg").default}
          />
          <div class="container">
            <h4>
              <b>Support the Cause</b>
            </h4>
            <p>Help us with a donation</p>
          </div>
        </div>

        <div class="card">
          <img
            className="card-image"
            src={require("../img/farm-chickens.jpg").default}
          />
          <div class="container">
            <h4>
              <b>Raffle</b>
            </h4>
            <p>Enter to win!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
