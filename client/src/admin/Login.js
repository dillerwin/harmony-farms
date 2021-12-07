import React, { useState } from "react";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(credentials) {
    console.log("loginUser");
    console.log(credentials);
    return fetch("/login", {
      method: "post",
      body: JSON.stringify(credentials),
      headers: {
        "Content-type": "application/json",
      },
    }).then((data) => data.json());
  }

  function handlePassword(event) {
    event.preventDefault();
    setPassword(event.target.value);
  }

  function handleUsername(event) {
    event.preventDefault();
    setUsername(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let token = await loginUser({
      username,
      password,
    });
    localStorage.setItem("token", "true");
    props.setToken(token);
    console.log(token);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Welcome in!</h1>
      <form onSubmit={handleSubmit}>
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
