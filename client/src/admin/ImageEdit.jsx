import React, { useState } from "react";

export default function ImageEdit(props) {
  const [modalView, setModalView] = useState("none");

  function handleRedirect(event) {
    event.preventDefault();
    props.setView("animal");
    localStorage.setItem("view", "animal");
  }

  function handleReturn(event) {
    event.preventDefault();
    props.setView(false);
    localStorage.removeItem("view");
  }

  function clickHandle(event) {
    event.preventDefault();
    setModalView("flex");
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
      <div className="imageEditModal" style={{ display: modalView }}>
        URL for new image:
        <form className="newImageForm" action="/imagePost" method="post">
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="imageBody">
        <div>
          <h4>Logo</h4>
          <div onClick={clickHandle} id="logo">
            Edit Logo
          </div>
        </div>
        <div className="homepageImages">
          <h4>Homepage Images</h4>
          <div onClick={clickHandle} id="homepageHeader">
            Header Image
          </div>
          <div onClick={clickHandle} id="homepageTile1">
            Tile Image 1
          </div>
          <div onClick={clickHandle} id="homepageTile2">
            Tile Image 2
          </div>
          <div onClick={clickHandle} id="homepageTile3">
            Tile Image 3
          </div>
          <div onClick={clickHandle} id="homepageMission1">
            Mission Image 1
          </div>
          <div onClick={clickHandle} id="homepageSupportUs">
            Support Us Image
          </div>
          <div onClick={clickHandle} id="homepageMerchandise">
            Merchandise Image
          </div>
          <div onClick={clickHandle} id="homepageRaffle">
            Raffle Image
          </div>
          <div onClick={clickHandle} id="homepageMission2">
            Mission Image Two
          </div>
        </div>
        <div className="aboutUsImages">
          <h4>About Us Images</h4>
          <div onClick={clickHandle} id="aboutUsHeader">
            Header Image
          </div>
          <div onClick={clickHandle} id="aboutUsBody">
            Body Image
          </div>
        </div>
        <div className="meetAnimalsImages">
          <h4>Sponsor Page Images</h4>
          {/* all animal card images handled in Animal Edit page */}
          <div onClick={clickHandle} id="sponsorHeader">
            Sponsor Header Image
          </div>
        </div>
        <div className="weeklyRaffleImages">
          <h4>Weekly Raffle Images</h4>
          <div onClick={clickHandle} id="raffleHeader">
            Weekly Raffle Header Image
          </div>
          <div onClick={clickHandle} id="prizeImage1">
            Prize Image One
          </div>
          <div onClick={clickHandle} id="prizeImage2">
            Prize Image Two
          </div>
          <div onClick={clickHandle} id="prizeImage3">
            Prize Image Three
          </div>
          <div onClick={clickHandle} id="prizeImage4">
            Prize Image Four
          </div>
          <div onClick={clickHandle} id="prizeImage5">
            Prize Image Five
          </div>
        </div>
        <div className="visitUsImages">
          <h4>Visit Us Images</h4>
          <div onClick={clickHandle} id="visitHeader">
            Visit Us Header Image
          </div>
          <div onClick={clickHandle} id="glampTile1">
            Glamping Tile 1
          </div>
          <div onClick={clickHandle} id="glampTile2">
            Glamping Tile 2
          </div>
          <div onClick={clickHandle} id="glampTile3">
            Glamping Tile 3
          </div>
          <div onClick={clickHandle} id="tourImage">
            Tour Image
          </div>
          <div onClick={clickHandle} id="volunteerImage">
            Volunteering Image
          </div>
        </div>
        <div className="contactUsImages">
          <h4>Contact Us Images</h4>
          <div onClick={clickHandle} id="contactHeader">
            Contact Us Header
          </div>
        </div>
      </div>
    </div>
  );
}
