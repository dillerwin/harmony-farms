import React from "react";
import { Link } from "react-router-dom";

function MeetButton() {
  return (
    <>
      <div className="meet-button-container ">
        <Link className="button meet-button " to="/animals" >
          Meet The Animals
        </Link>
      </div>
    </>
  );
}

export default MeetButton;
