import React from "react";
import "../App.css";

function IntroImages() {
  return (
    <>
      <div id="intro-image-container">
        <img
          className="intro-image outside-image outside-image-left"
          src="https://res.cloudinary.com/dtbi27ygq/image/upload/c_scale,h_600,q_60/v1639419382/Website%20Content/Optimized%20Images/sheep-harmony-animal-sanctuary_rhepcn.jpg"
        />

        <img
          className=" intro-image middle-image"
          src="https://res.cloudinary.com/dtbi27ygq/image/upload/c_scale,h_800,q_60/v1639420184/Website%20Content/Optimized%20Images/cows-sheep-pasture-harmony-farm-vegan-sanctuary_nnj15h.jpg"
        />

        <img
          className="intro-image outside-image outside-image-right"
          src="https://res.cloudinary.com/dtbi27ygq/image/upload/c_scale,h_800,q_60/v1639420410/Website%20Content/Optimized%20Images/piglet-vegan-aminal-sanctuary-harmony-vermont_yt5tiy.jpg"
        />
      </div>
    </>
  );
}

export default IntroImages;
