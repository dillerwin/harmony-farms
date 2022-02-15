import React, { useEffect, useState } from "react";
import AnimalEdit from "./AnimalEdit";
import ImageEdit from "./ImageEdit";
// import ChangePassword from "./ChangePassword";
import RaffleWinner from "../components/RaffleWinner";

//need to add way for user to change password when logged in

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

  // function changePassword(event) {
  //   event.preventDefault();
  //   setView("changePassword");
  // }

  if (!view) {
    return (
      <div className="adminBody">
        <div className="titleWrapper">
          {/* title page */}
          <h1 className="adminTitle">Harmony Farms Sanctuary</h1>
          <h2 className="adminTitle">Admin Portal</h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "1em",
            paddingBottom: "none",
          }}
        >
          <button
            className="admin-edit-button"
            name="animal"
            onClick={handleClick}
          >
            Edit Animals
          </button>
          <button
            className="admin-edit-button"
            name="images"
            onClick={handleClick}
          >
            Edit Images
          </button>
          <button className="admin-edit-button" name="logOut" onClick={logOut}>
            Log Out
          </button>
        </div>
        <RaffleWinner />
        {/* <div style={{ paddingTop: "5vh" }}>
          <button
            className="admin-edit-button"
            name="changePassword"
            onClick={changePassword}
          >
            Change Password
          </button>
        </div> */}
      </div>
    );
  } else if (view === "animal") {
    return (
      <div className="adminPage">
        <AnimalEdit setView={setView} />
      </div>
    );
  } else if (view === "images") {
    return (
      <div className="adminPage" style={{}}>
        <ImageEdit setView={setView} />
      </div>
    );
  // } else if (view === "changePassword") {
  //   return (
  //     <div className="adminPage">
  //       <ChangePassword />
  //     </div>
  //   );
  }
}
