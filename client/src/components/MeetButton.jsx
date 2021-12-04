import React from "react";
import { Link } from "react-router-dom";
import Animals from "./Animals";

function MeetButton() {
  return (
    <>
      <div className="meet-button ">
        <Link to="/animals" component={Animals}>
          <a className="button">Meet The Animals</a>
        </Link>
      </div>
    </>
  );
}

export default MeetButton;
