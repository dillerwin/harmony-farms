import React from "react";
import { useState, useEffect } from "react";

export default function ReqAuth() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Welcome in!</h1>
      <form action="/login" method="post">
        <label>
          <p>Username</p>
          <input type="test" name="username" onChange={handleUsername} />
        </label>
        <label>
          <p>Password</p>
          <input type="text" name="password" onChange={handlePassword} />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
