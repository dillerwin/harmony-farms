import React from "react";
import { Link } from "react-router-dom";

const SendMail = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default SendMail;
