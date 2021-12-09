import React, { useState } from "react";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //functions send a post fetch request to server with username and password. If they match, server returns a token
  async function loginUser(credentials) {
    return fetch("/login", {
      method: "post",
      body: JSON.stringify(credentials),
      headers: {
        "Content-type": "application/json",
      },
    }).then((data) => data.json());
  }

  //sets password state
  function handlePassword(event) {
    event.preventDefault();
    setPassword(event.target.value);
  }

  //sets username state
  function handleUsername(event) {
    event.preventDefault();
    setUsername(event.target.value);
  }

  //sends username and password to fetch. If fetch returns a true token
  const handleSubmit = async (event) => {
    //prevents normal submit action
    event.preventDefault();
    //sends user data to server for verification
    let token = await loginUser({
      username,
      password,
    });
    //waits for token to return
    await token;
    //if token is true, sets localStorage token and token prop
    if (token.token) {
      localStorage.setItem("token", "true");
      props.setToken(true);
    } else {
      //if token is false, prevents access
      props.setToken(false);
    }
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
          <input type="password" name="password" onChange={handlePassword} />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
