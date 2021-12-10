//imports react into the component
import React from "react";
import RaffleImage from "./RaffleImage.jsx";
import PrizeImages from "./PrizeImages.jsx";
import Footer from "./Footer.jsx";
import RaffleDonate from "./RaffleDonate.jsx";
import Winner from "./Winner.jsx";
import DonatePrize from "./DonatePrize.jsx";

function Raffle() {
  return (
    <>
      <div>
        <RaffleImage />
        <div className="raffle-header">
          <Winner />
        </div>
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
