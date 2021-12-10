import React from "react";

function Winner() {
  return (
    <>
      <div className="winner-display">
        <h5 className="winner-header">This Week's Winner:</h5>
        <h4 className="winner-name"> emperor kuzco</h4>
        <div>
          <div id="intro-image-container">
            <img
              className="intro-image"
              src={require("../img/harmony-farms-llama.jpg").default}
            />
            <img
              className="intro-image"
              src={require("../img/harmony-farms-pig.jpg").default}
            />
            <img
              className="intro-image"
              src={require("../img/harmony-farms-sheep.jpg").default}
            />
          </div>
        </div>
      </div>
      <p className="thank-you-text">
        We Thank you for your continued support of the Sanctuary
      </p>
    </>
  );
}

export default Winner;
