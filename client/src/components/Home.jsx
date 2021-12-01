import React from "react";
import IntroImages from "./IntroImages";
import HeroImage from "./Hero";
import MeetButton from "./MeetButton";
import QuoteBlockOne from "./QuoteBlockOne";
import Cards from "./Cards";
<<<<<<< HEAD
//import Navbar from "./Navbar";
=======
import QuoteBlockTwo from "./QuoteBlockTwo";
import Footer from "./Footer";
import Navbar from "./Navbar";
>>>>>>> 15f6d03e4cf76c95194376ebc79dc4271c57773a

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
