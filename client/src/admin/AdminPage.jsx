import React, { useState } from "react";
import EditAnimalList from "./EditAnimalList";
import PhotoEdit from "./ImageEdit";

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
      <div>
        <div>
          <p>Where would you like to go?</p>
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
    return <EditAnimalList setView={setView} />;
  } else if (view === "images") {
    return <PhotoEdit setView={setView} />;
  }
}
