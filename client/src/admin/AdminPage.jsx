import React, { useEffect, useState } from "react";
import AnimalEdit from "./AnimalEdit";
import ImageEdit from "./ImageEdit";

export default function AdminPage(props) {
  const [view, setView] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("view")) {
      setView(localStorage.getItem("view"));
    }
  }, []);
  //function to log out of admin portal
  function logOut(event) {
    //sets token prop to false
    props.setToken(false);
    //removes login token from localStorage
    localStorage.removeItem("token");
  }

  function handleClick(event) {
    event.preventDefault();
    if (event.target.name === "animal") {
      setView("animal");
      localStorage.setItem("view", "animal");
    } else if (event.target.name === "images") {
      setView("images");
      localStorage.setItem("view", "images");
    } else {
      localStorage.removeItem("view");
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
        <div className="titleWrapper">
          {/* title page */}
          <h1 className="adminTitle">Harmony Farms Sanctuary</h1>
          <h2 className="adminTitle">Admin Portal</h2>
          <h2>What would you like to edit?</h2>
        </div>
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
          <button name="logOut" onClick={logOut}>
            Log Out
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
