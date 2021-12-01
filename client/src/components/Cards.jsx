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
            <h4 className="card-title">Support our Cause</h4>
            <p className="card-text">
              Explore all the ways to make a donation to help further our cause.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            className="card-image merch-image"
            src={require("../img/harmony-farms-store.jpeg").default}
          />
          <div class="container">
            <h4 className="card-title"> Farm Merchandise</h4>
            <p className="card-text">
              Visit our store to check out our branded clothing, mugs, bags, and
              more!
            </p>
          </div>
        </div>

        <div class="card">
          <img
            className="card-image"
            src={require("../img/farm-chickens.jpg").default}
          />
          <div class="container">
            <h4 className="card-title">Enter our $5 Friday Raffle</h4>
            <p className="card-text">
              Support the farm and get a chance to win a bundle of great gifts!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
