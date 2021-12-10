import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function DonatePrize() {
  return (
    <>
      <div className="donate-request-container">
        <h2 className="donate-prize-header">
          We run ongoing weekly raffles and are always in need of prizes! If you
          have goods or a service that would make a great raffle prize that
          you'd like to donate, please email us the details!
        </h2>
        <div>
          <Link to="/Contact">
            <button className="button tour-button">Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DonatePrize;
