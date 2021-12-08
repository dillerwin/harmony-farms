//imports react into the component
import React from "react";
import RaffleImage from "./RaffleImage.jsx";
import PrizeImages from "./PrizeImages.jsx";
import QuoteBlockTwo from "./QuoteBlockTwo.jsx";
import Footer from "./Footer.jsx";
import Donate from "./Donate.jsx";
import DonateHeader from "./DonateHeader.jsx";
import RaffleDonate from "./RaffleDonate.jsx";
import Winner from "./Winner.jsx";
import DonatePrize from "./DonatePrize.jsx";

function Raffle() {
  return (
    <>
      <RaffleImage />
      <div>
        <div className="raffle-header">
          <Winner />
        </div>
        <h1 className="raffle-header">What's This?</h1>
        <p className="money-text raffle-info">
          Every week, we here at Harmony Farms hold a raffle to give back to our
          amazing donors!
        </p>
        <RaffleDonate />
        <PrizeImages />
        <DonatePrize />
        <Footer />
      </div>
    </>
  );
}

//exports raffle function to be used by other components
export default Raffle;
