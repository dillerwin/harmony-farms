import React from "react";

function QuoteBlockOne() {
  return (
    <>
      <div id="quote-container-one">
        <h2 className="quote-one-text ">
          "Our mission is to promote healing and improve mental well-being for
          both animals and humans through compassion and empathy."
        </h2>
        <img
          className="quote-one-image"
          src={require("../img/farm-goats.jpg").default}
        ></img>
      </div>
    </>
  );
}
export default QuoteBlockOne;
