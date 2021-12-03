//imports react into the component
import React from "react";
//imports about hero from component into page
import NavBar from "./Navbar.jsx";
import RaffleImage from "./RaffleImage.jsx";
import RaffleImages from "./RaffleImages.jsx";
import QuoteBlockTwo from "./QuoteBlockTwo.jsx";
import Footer from "./Footer.jsx";

function Raffle() {
  return (
    <>
      <div id="raffle">
        <RaffleImage />
        <h1 className="raffle-header">What's This?</h1>
        <p className="donate-text">
          Every week, we here at Harmony Farms hold a raffle to give back to our
          amazing donors!
        </p>
        <h1 className="donate-header">How Do I Participate?</h1>
        <p className="donate-text">
          Every donation of $5 makes you automatically eligible for the raffle!
          Every $5 dollars donated give you 1 slot; exp: $5 = 1 entry, $40 = 8
          entries.
        </p>
        <RaffleImages />
        <QuoteBlockTwo />
        <Footer />
      </div>
    </>
  );
}

//exports raffle function to be used by other components
export default Raffle;
