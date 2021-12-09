import React from "react";

export default function ImageEdit(props) {
  function handleRedirect(event) {
    event.preventDefault();
    props.setView("animal");
  }

  function handleReturn(event) {
    event.preventDefault();
    props.setView(false);
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(`clicked`, event.target.id);
  }

  return (
    <div className="imageEdit">
      <h1 className="imageTitle">Edit Images</h1>
      <div className="imageNavButtons">
        <button className="animalRedirect" onClick={handleRedirect}>
          Edit Animals
        </button>
        <button className="returnSelect" onClick={handleReturn}>
          Exit Image Edit
        </button>
      </div>
      <div className="imageBody">
        <div>
          <h4>Logo</h4>
          <div>Edit Logo</div>
        </div>
        <div className="homepageImages">
          <h4>Homepage Images</h4>
          <div id="homepageHeader">Header Image</div>
          <div className="homepageTileImages">
            <div id="homepageTile1">Tile Image 1</div>
            <div id="homepageTile2">Tile Image 2</div>
            <div id="homepageTile3">Tile Image 3</div>
          </div>
          <div id="homepageMission1">Mission Image 1</div>
          <div id="homepageSupportUs">Support Us Image</div>
          <div id="homepageMerchandise">Merchandise Image</div>
          <div id="homepageRaffle">Raffle Image</div>
          <div id="homepageMission2">Mission Image Two</div>
        </div>
        <div className="aboutUsImages">
          <h4>About Us Images</h4>
          <div id="aboutUsHeader">Header Image</div>
          <div id="aboutUsBody">Body Image</div>
        </div>
        <div className="meetAnimalsImages">
          <h4>Sponsor Page Images</h4>
          {/* all animal card images handled in Animal Edit page */}
          <div id>Meet Header Image</div>
        </div>
        <div className="weeklyRaffleImages">
          <h4>Weekly Raffle Images</h4>
          <div>Weekly Raffle Header Image</div>
          <div className="previousPrizes">
            <div>Prize Image One</div>
            <div>Prize Image Two</div>
            <div>Prize Image Three</div>
            <div>Prize Image Four</div>
            <div>Prize Image Five</div>
          </div>
        </div>
        <div className="visitUsImages">
          <h4>Visit Us Images</h4>
          <div>Visit Us Header Image</div>
          <div className="glampingImages">
            <div>Glamping Tile 1</div>
            <div>Glamping Tile 2</div>
            <div>Glamping Tile 3</div>
          </div>
          <div className="tourImage">
            <div>Tour Image</div>
          </div>
          <div className="volunteeringImage">
            <div>Volunteering Image</div>
          </div>
        </div>
        <div className="contactUsImages">
          <h4>Contact Us Images</h4>
          <div>Contact Us Header</div>
        </div>
      </div>
    </div>
  );
}
