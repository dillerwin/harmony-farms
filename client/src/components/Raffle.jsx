//imports react into the component
import React from "react";
import RaffleImage from "./RaffleImage.jsx";

function Raffle() {
  return (
    <div id="raffle">
      <RaffleImage />
      <h1>This will be the raffle page</h1>
    </div>
  );
}

//exports raffle function to be used by other components
export default Raffle;
