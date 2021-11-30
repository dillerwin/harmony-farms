import React from "react";
import IntroImages from "./IntroImages";
import HeroImage from "./Hero";
import MeetButton from "./MeetButton";
import QuoteBlockOne from "./QuoteBlockOne";
import Cards from "./Cards";

function Home() {
  return (
    <>
      <HeroImage />
      <IntroImages />
      <MeetButton />
      <QuoteBlockOne />
      <Cards />
    </>
  );
}
export default Home;
