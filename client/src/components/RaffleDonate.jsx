import React from "react";

function RaffleDonate() {
  return (
    <>
      <div className="raffle-donate-container">
        <h1 className="donate-header">Want to Participate?</h1>
        <h4 className=" raffle-donation-header">
          Just Make a Monetary Donation to the Farm
        </h4>
        <p className="money-text">
          <i>Every</i> $5 donation secures you one entry in our weekly raffle.
        </p>
        <p className="money-text">
          <i>*Minimum $5 to be eligible. Every $5 = 1 entry*</i>
        </p>
        <div className="money-button-container">
          <a
            className="button money-button"
            href="https://www.paypal.com/paypalme/hfswc?locale.x=en_US"
            target="_blank"
            rel="noreferrer"
          >
            Donate: Paypal
          </a>
          <a
            className="button money-button"
            href="https://account.venmo.com/u/HFSWC"
            target="_blank"
            rel="noreferrer"
          >
            Donate: Venmo
          </a>
          <a
            className="button money-button "
            href="https://www.gofundme.com/f/Harmony-Farm-sanctuary-and-wellness?utm_medium=copy_link&utm_source=customer&utm_campaign=p_lico+share-sheet"
            target="_blank"
            rel="noreferrer"
          >
            Donate: GoFundMe
          </a>
        </div>
      </div>
    </>
  );
}

export default RaffleDonate;
