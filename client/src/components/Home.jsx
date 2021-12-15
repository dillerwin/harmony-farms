import React, { useEffect, useState } from "react";
import IntroImages from "./IntroImages";
import HomeHero from "./HomeHero";
import MeetButton from "./MeetButton";
import QuoteBlockOne from "./QuoteBlockOne";
import Cards from "./Cards";

//import Navbar from "./Navbar";

import QuoteBlockTwo from "./QuoteBlockTwo";
import Footer from "./Footer";

import Navbar from "./Navbar";

function Home(props) {
  const [homepageHeader, setHomepageHeader] = useState("");
  const [homepageTile1, setHomepageTile1] = useState("");
  const [homepageTile2, setHomepageTile2] = useState("");
  const [homepageTile3, setHomepageTile3] = useState("");
  const [homepageMission1, setHomepageMission1] = useState("");
  const [homepageSupportUs, setHomepageSupportUs] = useState("");
  const [homepageMerchandise, setHomepageMerchandise] = useState("");
  const [homepageRaffle, setHomepageRaffle] = useState("");
  const [homepageMission2, setHomepageMission2] = useState("");

  let imageJson = props.imageJson;

  useEffect(() => {
    imageJson.forEach((item) => {
      let image = "";
      if (item.imageId.includes(`homepage`)) {
        console.log(item);
      }
    });
  });

  return (
    <>
      {/* <Navbar /> */}
      <HomeHero homepageHeader={homepageHeader} />
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
