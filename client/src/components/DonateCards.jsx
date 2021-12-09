import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Raffle from "./Raffle";
import Animals from "./Animals";

function DonateCards() {
  return (
    <>
      <div className="card-container line-break donate-card-container">
        <Link to="/animals#anchor" component={Animals}>
          <div class="card">
            <img
              className="card-image"
              src={require("../img/harmony-farms-animal-sponsor.png").default}
              alt="Harmony Farms Animal Sanctuary painting of rescued animals"
            />

            <div class="container">
              <h4 className="card-title">Sponsor an Animal</h4>
              <p className="card-text">
                Help our amimals by being a single time or reoccuring sponsor
              </p>
            </div>
          </div>
        </Link>
        <a
          href="https://www.bonfire.com/store/harmony-farm-sanctuary-and-wellness-center/"
          target="_blank"
          rel="noreferrer"
        >
          <div class="card">
            <img
              className="card-image merch-image"
              src={require("../img/harmony-farms-store.jpeg").default}
              alt="Harmony Farms Animal Sanctuary Store Merchandise"
            />

            <div class="container">
              <h4 className="card-title"> Sanctuary Merchandise</h4>
              <p className="card-text">
                Visit our store to check out our branded clothing, mugs, bags,
                and more!
              </p>
            </div>
          </div>
        </a>

        <Link to="/raffle#anchor" component={Raffle}>
          <div class="card">
            <img
              className="card-image"
              src={require("../img/harmony-farms-raffle-prize.png").default}
              alt="Raffle prize example for Harmony Farms Sanctuary Vermont"
            />

            <div class="container">
              <h4 className="card-title">Enter our $5 Friday Raffle</h4>
              <p className="card-text">
                Support the sanctuary and get a chance to win a bundle of great
                gifts!
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default DonateCards;
