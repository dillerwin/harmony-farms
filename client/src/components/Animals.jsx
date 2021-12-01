//Imports react into the component
import React from "react";
//Imports About Hero Component into page
import NavBar from "./Navbar.jsx";

function Animals() {
  return (
    <div id="animals">
      <NavBar />
      <h1>This is the Animals page</h1>
    </div>
  );
}

// Exports Animals function to be used by other components
export default Animals;
