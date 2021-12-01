import React from "react";
import IntroImages from "./IntroImages";
import HeroImage from "./Hero";
import MeetButton from "./MeetButton";
import QuoteBlockOne from "./QuoteBlockOne";
import Cards from "./Cards";
import QuoteBlockTwo from "./QuoteBlockTwo";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroImage />
      <IntroImages />
      <MeetButton />
      <QuoteBlockOne />
      <Cards />
      <QuoteBlockTwo />
      <Footer />
    </>
  );
}
export default Home;
