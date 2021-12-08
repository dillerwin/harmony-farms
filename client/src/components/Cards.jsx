import React from "react";
import { Link } from "react-router-dom";
import Donate from "./Donate";
import Raffle from "./Raffle";

function Cards() {
  return (
    <>
      <div className="card-container">
        <Link to="/donate" component={Donate}>
          <div class="card">
            <img
              className="card-image"
              src={require("../img/farm-chickens.jpg").default}
              alt="Harmony Farms Animals at the Sanctuary"
            />

            <div class="container">
              <h4 className="card-title">Support our Cause</h4>
              <p className="card-text">
                Explore all the ways you can help us further our cause.
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
        <Link to="/raffle" component={Raffle}>
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

export default Cards;
