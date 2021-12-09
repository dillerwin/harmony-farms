import React, { useState } from "react";
import AnimalEdit from "./AnimalEdit";
import ImageEdit from "./ImageEdit";

export default function AdminPage(props) {
  const [view, setView] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    if (event.target.name === "animal") {
      setView("animal");
    } else if (event.target.name === "images") {
      setView("images");
    } else {
      window.location.href = "/";
    }
  }

  if (!view) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Where would you like to go?</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "1em",
          }}
        >
          <button name="animal" onClick={handleClick}>
            Edit Animals
          </button>
          <button name="images" onClick={handleClick}>
            Edit Images
          </button>
          <button name="homepage" onClick={handleClick}>
            Return to site
          </button>
        </div>
      </div>
    );
  } else if (view === "animal") {
    return <AnimalEdit setView={setView} />;
  } else if (view === "images") {
    return <ImageEdit setView={setView} />;
  }
}
