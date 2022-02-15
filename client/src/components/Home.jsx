import IntroImages from "./IntroImages";
import HomeHero from "./HomeHero";
import MeetButton from "./MeetButton";
import QuoteBlockOne from "./QuoteBlockOne";
import Cards from "./Cards";

import QuoteBlockTwo from "./QuoteBlockTwo";
import Footer from "./Footer";

function Home(props) {

  return (
    <>
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
