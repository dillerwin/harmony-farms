import React from "react";

export default function PhotoEdit(props) {
  function handleRedirect(event) {
    event.preventDefault();
    props.setView("animal");
  }

  function handleReturn(event) {
    event.preventDefault();
    props.setView(false);
  }

  return (
    <div className="photoEdit">
      <h1 className="photoTitle">Edit Photos</h1>
      <div>
        <button className="animalRedirect" onClick={handleRedirect}>
          Edit Animals
        </button>
        <button className="returnSelect" onClick={handleReturn}>
          Exit Image Edit
        </button>
      </div>
      <div>Edit Logo</div>
      <div className="homepageImages">
        <h5>Homepage Images</h5>
        <div>Header Image</div>
        <div className="tileImages">
          <div>Tile Image 1</div>
          <div>Tile Image 2</div>
          <div>Tile Image 3</div>
        </div>
        <div>Mission Image 1</div>
        <div>Support Us Image</div>
        <div>Merchandise Image</div>
        <div>Raffle Image</div>
        <div>Mission Image Two</div>
      </div>
      <div className="aboutUsImages">
        <h5>About Us Images</h5>
        <div>About Us Header Image</div>
        <div>Body Image</div>
      </div>
      <div className="meetAnimalsImages">
        <h5>Meet The Animals Images</h5>
        <div>Meet Header Image</div>
      </div>
      <div className="weeklyRaffleImages">
        <h5>Weekly Raffle Images</h5>
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
        <h5>Visit Us Images</h5>
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
        <h5>Contact Us Images</h5>
        <div>Contact Us Header</div>
      </div>
    </div>
  );
}
