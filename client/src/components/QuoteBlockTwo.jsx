import React from "react";

function QuoteBlockTwo() {
  return (
    <>
      <div id="quote-container-two">
        <img
          className="quote-two-image"
          src={require("../img/farm-pigs.jpg").default}
        ></img>
        <h2 className="quote-two-text ">
          "We offer animals that have suffered neglect or other abuse or who are
          at risk of being separated from their animal families a safe haven
          where they can live out the rest of their days in harmony."
        </h2>
      </div>
    </>
  );
}
export default QuoteBlockTwo;
