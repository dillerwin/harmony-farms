import React, { useEffect, useState } from "react";

function SponsorCards() {
  const [animalInfo, setAnimalInfo] = useState("");
  //   const [animalName, setAnimalName] = useState("");
  //   const [animalImage, setAnimalImage] = useState("");
  //   const [animalLink, setAnimalLink] = useState("");
  useEffect(() => {
    fetch("/api/animals")
      .then((res) => res.json())
      .then((animal) => {
        console.log(animal);
        let animalData = animal.map((item) => {
          return (
            <div className="sponsor-card-container">
              <a href={item.donorBox} target="_blank">
                <div class="sponsor-card">
                  <img className="sponsor-card-image" src={item.imageLink} />

                  <div class="sponsor-container">
                    <h4 className="sponsor-card-title">{item.animalName}</h4>
                    <p className="sponsor-card-text">
                      Click here to hear my story and sponsor me!
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
