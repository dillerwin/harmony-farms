import React from "react";
import "../App.css";
import { HashLink as Link } from "react-router-hash-link";

function DonatePrize() {
  return (
    <>
      <div className="donate-request-container">
        <h2 className="donate-prize-text">
          We run ongoing weekly raffles and are always in need of prizes! If you
          have goods or a service that would make a great raffle prize that
          you'd like to donate, please email us the details!
        </h2>
        <div>
          <Link to="/contact#anchor">
            <button className="button raffle-contact-button">Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DonatePrize;
