import React from "react";

function RaffleDonate() {
  return (
    <>
      <div className="raffle-donate-container">
        <h1 className="donate-header">How Do I Participate?</h1>
        <h4 className="donate-header">
          Just Make a Monetary Donation to the Farm !
        </h4>
        <p className="money-text">
          <i>Every</i> donation makes you automatically eligible for the raffle!
          Every $5 donated secures you one entry in our weekly raffle.
        </p>
        <p className="money-text">
          *Minimum $5 to be eligible. Every $5 = 1 entry*
        </p>
        <div className="money-button-container">
          <a
            className="button money-button"
            href="https://www.paypal.com/paypalme/hfswc?locale.x=en_US"
            target="_blank"
          >
            Donate: Paypal
          </a>
          <a className="button money-button">Donate: Venmo</a>
          <a
            className="button money-button "
            href="https://www.gofundme.com/f/Harmony-Farm-sanctuary-and-wellness?utm_medium=copy_link&utm_source=customer&utm_campaign=p_lico+share-sheet"
            target="_blank"
          >
            Donate: GoFundMe
          </a>
        </div>
      </div>
    </>
  );
}

export default RaffleDonate;
