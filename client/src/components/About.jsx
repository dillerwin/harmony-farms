//Imports react into the component
import React from "react";
//Imports About CSS file
import "../About.css";
//Imports About Hero Component into page
import AboutHero from "./AboutHero.jsx";
//Imports Footer Hero Component into page
import Footer from "./Footer";

function About() {
  return (
    <div id="about">
      {/* <NavBar /> */}
      <AboutHero />
      {/* Wrapper around entire content of page */}
      <div id="about-wrapper">
        {/* Wrapper around page image and description text */}
        <div id="about-img-text-wrapper">
          {/* Wrapper around image */}
          <div id="about-img-wrapper">
            {/* Image */}
            <img id="about-img" src="https://res.cloudinary.com/dtbi27ygq/image/upload/v1639412378/Website%20Content/Optimized%20Images/maramonie-jon-harmony-farm-sanctuary-vermont_vviwvn.jpg" alt="Maramonie and Jon King at Harmony Farm and Wellness Center" />
            <figcaption id="about-img-caption">
              Maramonie and Jon at the Sanctuary
            </figcaption>
          </div>
          {/* Page description  */}
          <div id="about-desc-wrapper">
            <h2 id="about-desc-heading">Our Mission</h2>
            <p className="about-desc">
              Our mission is to promote healing and improve mental well-being
              for both animals and humans through compassion and empathy. We
              offer animals that have suffered neglect or other abuse or who are
              at risk of being separated from their animal families a safe haven
              where they can live out the rest of their days in harmony.
            </p>
            <p className="about-desc">
              Animals have long played a major role in the human experience, and
              many don’t even realize how much they actually help us, both
              emotionally and psychologically.
            </p>
            <p className="about-desc">
              We also want to educate the public and promote compassion and
              empathy by allowing them to experience farmed and often forgotten
              animals and see that they are not just “products” but living,
              sentient beings capable of love, happiness, and understanding much
              like us.
            </p>

            <h2 id="about-desc-heading">Our Story</h2>
            <p className="about-desc">
            For those of you who don’t know our story and our mission, here goes...
            </p>
            <p className="about-desc">
            For a few years while living in Colorado, Maramonie and Jon had been dreaming about combining their passions, skills, and interests by founding an animal sanctuary and retreat center. Jon is an army veteran and has a long history in the construction industry. Being a builder of all things has proven invaluable in starting a sanctuary from the ground up, especially with no existing farm buildings as this property was when we purchased it in 2020. 
            </p>
            <p className="about-desc">
            Maramonie is a licensed therapist who specializes in working with children and families and is also trained in Animal-Assisted Play Therapy (AAPT), Art Therapy, and Trauma-Focused Cognitive Behavioral Therapy (TF-CBT), among other modalities. I plan to offer intensive family retreats on our 50 acre property to allow families to reconnect and heal in a natural and tranquil setting alongside the animals we rescue, many who have trauma stories of their own. We also want to educate the public and promote compassion and empathy by allowing them to experience farmed and often forgotten animals and see that they are not just “products” but living, sentient beings capable of love, happiness, and understanding much like us. 
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Exports About function to be used by other components
export default About;
