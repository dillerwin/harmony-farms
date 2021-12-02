import React from "react";
import DonateCards from "./DonateCards";

function DonateHeader() {
  return (
    <>
      <div id="donate-header-container">
        <h1 className="donate-header">Help Support Harmony Farms</h1>
        <p className="donate-text">
          Animals have long played a major role in the human experience, and
          many don’t even realize how much they actually help us, both
          emotionally and psychologically. We also want to educate the public
          and promote compassion and empathy by allowing them to experience
          farmed and often forgotten animals and see that they are not just
          “products” but living, sentient beings capable of love, happiness, and
          understanding much like us."
        </p>
      </div>
      <div id="cash-donation-container">
        <h2 className="cash-donation-header">
          Make a Monetary Donation to the Farm
        </h2>
        <p className="money-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nulla
          eum voluptatem, eveniet quidem exercitationem animi totam laborum
          possimus enim iure ducimus ipsum doloribus dolorem.
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
      <div className="line"></div>
      <DonateCards />

      <div id="donate-goods">
        <h2 className="cash-donation-header">
          Purchase Goods for the Farm or Animals
        </h2>
        <p className="money-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nulla
          eum voluptatem, eveniet quidem exercitationem animi totam laborum
          possimus enim iure ducimus ipsum doloribus dolorem.
        </p>
        <div className="money-button-container">
          <a
            className="button money-button"
            href="https://www.chewy.com/g/harmony-farm-sanctuary-and-wellness-corp_b77105647"
            target="_blank"
          >
            Chewy.com Wishlist
          </a>
          <a
            className="button money-button "
            href="https://www.amazon.com/gp/registry/wishlist/2WWK9KPL158SB/"
            target="_blank"
          >
            Amazon.com Wishlist
          </a>
        </div>
      </div>
    </>
  );
}

export default DonateHeader;
