import React from "react";
import { useState } from "react";
import AdminPage from "./AdminPage";
import Login from "./Login";

export default function AdminAuth() {
  const [token, setToken] = useState(false);

  let checkToken = localStorage.getItem("token");

  if (!token) {
    if (checkToken === "true") {
      setToken(true);
    }
    return <Login setToken={setToken} />;
  } else {
    return <AdminPage token={token} setToken={setToken} />;
  }
}
