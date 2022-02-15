import React from "react";
import "../App.css";

function PrizeImages() {
  return (
    <>
      <h2 className="previous-prize-header">
        Some of our Previous Giveaway Prizes!
      </h2>
      <div id="previous-raffle-container">
        <img name="prizeImage1"alt="Prize One"
          className="previous-prize-image"
          src="https://res.cloudinary.com/dtbi27ygq/image/upload/c_scale,q_60,w_550/v1638980771/Website%20Content/Raffle%20Images/prize-5_aetc7x.jpg"
        />
        <img name="prizeImage2"alt="Prize Two"
          className="previous-prize-image"
          src="https://res.cloudinary.com/dtbi27ygq/image/upload/c_scale,q_60,w_300/v1639458285/Website%20Content/Raffle%20Images/harmony-farm-raffle-prize-4.jpg"
        />
        <img name="prizeImage3" alt="Prize Three"
          className="previous-prize-image hidden-image"
          src="https://res.cloudinary.com/dtbi27ygq/image/upload/c_scale,w_550/v1638980894/Website%20Content/Raffle%20Images/prize_3_baxv6v.jpg"
        />
        <img name="prizeImage4" alt="Prize Four"
          className="previous-prize-image"
          src="https://res.cloudinary.com/dtbi27ygq/image/upload/v1639457244/Website%20Content/Raffle%20Images/prize_1_ugtzaq_1_u83wnt.jpg"
        />
      </div>
    </>
  );
}

export default PrizeImages;
