import React from "react";
import { useState } from "react";
import AdminPage from "./AdminPage";
import Login from "./Login";

export default function AdminAuth() {
  const [token, setToken] = useState(false);

  //checks for localStorage token
  let checkToken = localStorage.getItem("token");

  //checks for login token
  if (!token) {
    //checks for token in localStorage, if it's there and is true, sets token to true
    if (checkToken === "true") {
      setToken(true);
    }
    //if token is false, displays login page
    return <Login setToken={setToken} />;
  } else {
    //if token is true displays admin portal
    return <AdminPage token={token} setToken={setToken} />;
  }
}
