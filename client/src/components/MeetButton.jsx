import React from "react";
// import { Link } from "react-router-dom";
import Animals from "./Animals";
import { HashLink as Link } from "react-router-hash-link";

function MeetButton() {
  return (
    <>
      <div className="meet-button ">
        <Link to="/animals#anchor" component={Animals}>
          <a className="button">Meet The Animals</a>
        </Link>
      </div>
    </>
  );
}

export default MeetButton;
