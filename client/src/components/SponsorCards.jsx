import React, { useEffect, useState } from "react";

function SponsorCards() {
  const [animalInfo, setAnimalInfo] = useState("");

  useEffect(() => {
    fetch("/api/animals")
      .then((res) => res.json())
      .then((animal) => {
        let animalData = animal.map((item) => {
          return (
            <div className="sponsor-card-container">
              <a href={item.donorBox} target="_blank" rel="noreferrer">
                <div class="sponsor-card">
                  <img className="sponsor-card-image" src={item.imageLink} />

                  <div className="sponsor-container">
                    <h4 className="sponsor-card-title">{item.animalName}</h4>
                    <p className="sponsor-card-text">
                      Click here to hear my rescue story and sponsor me!
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        });
        setAnimalInfo(animalData);
      });
  }, []);
  return (
    <>
      <div id="sponsor-container">{animalInfo}</div>
    </>
  );
}

export default SponsorCards;
