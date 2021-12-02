import React from "react";

function DonateCards() {
  return (
    <>
      <div className="card-container line-break donate-card-container">
        <div class="card">
          <img
            className="card-image"
            src={require("../img/harmony-farms-animal-sponsor.png").default}
          />

          <div class="container">
            <h4 className="card-title">Sponsor an Animal</h4>
            <p className="card-text">
              Help our amimals by being a single time or reoccuring sponsor
            </p>
          </div>
        </div>
        <div class="card">
          <a
            href="https://www.bonfire.com/store/harmony-farm-sanctuary-and-wellness-center/"
            target="_blank"
          >
            <img
              className="card-image merch-image"
              src={require("../img/harmony-farms-store.jpeg").default}
            />
          </a>
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
            src={require("../img/harmony-farms-raffle-prize.png").default}
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

export default DonateCards;
