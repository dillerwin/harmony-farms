import React from "react";
import IntroImages from "./IntroImages";
import HomeHero from "./HomeHero";
import MeetButton from "./MeetButton";
import QuoteBlockOne from "./QuoteBlockOne";
import Cards from "./Cards";

//import Navbar from "./Navbar";

import QuoteBlockTwo from "./QuoteBlockTwo";
import Footer from "./Footer";

import Navbar from "./Navbar";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HomeHero />
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
