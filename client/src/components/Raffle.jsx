//imports react into the component
import React from "react";
//imports about hero from component into page
import NavBar from "./Navbar.jsx";

function Raffle() {
  return (
    <div id="raffle">
      <NavBar />
      <h1>This will be the raffle page</h1>
    </div>
  );
}

//exports raffle function to be used by other components
export default Raffle;
