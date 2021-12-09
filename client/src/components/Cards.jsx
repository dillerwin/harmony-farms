import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Donate from "./Donate";
import Raffle from "./Raffle";

function Cards() {
  return (
    <>
      <div className="card-container">
        <Link to="/donate#anchor" component={Donate}>
          <div class="card outside-card">
            <img
              className="card-image outside-card-image"
              src="https://res.cloudinary.com/dtbi27ygq/image/upload/v1639075777/Website%20Content/farm-chickens_iqaygp.jpg"
              alt="Harmony Farms Animals at the Sanctuary"
            />

            <div class="container">
              <h4 className="card-title">Support the Sanctuary </h4>
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
        <Link to="/raffle#anchor" component={Raffle}>
          <div class="card outside-card">
            <img
              className="card-image outside-card-image"
              src="https://res.cloudinary.com/dtbi27ygq/image/upload/c_scale,w_640/v1639075512/Website%20Content/harmony-farms-raffle-prize-1_rm1gzd.png"
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
