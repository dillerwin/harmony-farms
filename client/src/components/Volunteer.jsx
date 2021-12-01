//Imports react into the component
import React from "react";
//Imports About Hero Component into page
import NavBar from "./Navbar.jsx";

function Volunteer() {
  return (
    <div id="volunteer">
      <NavBar />
     <h1>This is the Volunteer page</h1>
    </div>
  );
}

// Exports Volunteer function to be used by other components
export default Volunteer;