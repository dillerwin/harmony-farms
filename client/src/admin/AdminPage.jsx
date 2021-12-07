import { PromiseProvider } from "mongoose";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "./admin.css";

export default function AdminPage(props) {
  const [animalList, setAnimalList] = useState("");
  const [editView, setEditView] = useState("none");
  const [animal, setAnimal] = useState("");

  function editHandle(event) {
    setEditView("flex");
    setAnimal(event.target.value);
  }

  function handleClose(event) {
    setEditView("none");
    setAnimal("");
  }

  function logOut(event) {
    props.setToken(false);
    localStorage.removeItem("token");
  }

  useEffect(() => {
    fetch("/api/animals")
      .then((res) => res.json())
      .then((animals) => {
        let animalList = animals
          .sort(function (alpha, beta) {
            return alpha.animalName - beta.animalName;
          })
          .map((item) => {
            return (
              <ul
                style={{
                  border: "2px dashed black",
                  padding: "2px",
                }}
              >
                <ul style={{ fontSize: "150%" }}>{item.animalName}</ul>
                <ul>
                  <li>{item.animalDescription} </li>
                  <li>{item.imageLink}</li>
                  <li>{item.donorBox}</li>
                </ul>
                <button
                  onClick={editHandle}
                  name="animalEdit"
                  value={item.animalName}
                >
                  Edit
                </button>
                <form action="/delete" method="post">
                  <button
                    type="submit"
                    name="animalDelete"
                    value={item.animalName}
                  >
                    Delete
                  </button>
                </form>
              </ul>
            );
          });
        setAnimalList(animalList);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <h1 style={{}}>Admin Page</h1>
      </div>
      <div
        name="edit div"
        style={{
          display: editView,
          flexDirection: "column",
          zIndex: "1",
          position: "fixed",
          top: "10vh",
          left: "25vw",
          overflow: "auto",
          alignItems: "center",
        }}
      >
        <form
          action="/edit"
          method="post"
          style={{
            padding: "20px",
            paddingRight: "40px",
            border: "2px solid black",
            backgroundColor: "rgba(0,0,0,1)",
            color: "white",
          }}
        >
          <label>
            <p>Editing {animal}</p>
          </label>
          <input
            style={{ display: "none" }}
            type="text"
            name="animalName"
            value={animal}
          />
          <label>
            <p>{animal}'s Description</p>
            <input
              type="text"
              name="animalDescription"
              placeholder="Enter a description"
            />
          </label>
          <label>
            <p>Image Link</p>
            <input
              type="text"
              name="imageLink"
              placeholder="Enter the link to the animal's image"
            />
          </label>
          <label>
            <p>Donor Box Link</p>
            <input
              type="text"
              name="donorBox"
              placeholder="Enter link to animal's donorbox"
            />
          </label>
          <p
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "none",
              paddingTop: "2vh",
            }}
          >
            <button type="submit" name="editSubmit">
              Submit Edit
            </button>
            <button onClick={handleClose}>Close Edit</button>
          </p>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "50vw",
        }}
      >
        <div>
          <form
            className="addAnimalForm"
            action="/animalPost"
            method="post"
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              bottom: "30vh",
              padding: "5px",
            }}
          >
            <label>
              <p>Animal Name</p>
              <input
                type="text"
                name="animalName"
                placeholder="Enter the animal's name"
              />
            </label>
            <label>
              <p>Description</p>
              <input
                type="text"
                name="animalDescription"
                placeholder="Enter a description"
              />
            </label>
            <label>
              <p>Image Link</p>
              <input
                type="text"
                name="imageLink"
                placeholder="Enter link to image of the animal"
              />
            </label>
            <label>
              <p>Donor Box Link</p>
              <input
                type="text"
                name="donorBox"
                placeholder="Enter link to animal's donorbox"
              />
            </label>
            <button type="submit" name="submitButton">
              Submit Animal
            </button>
          </form>
          <button
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              bottom: "20vh",
              padding: "5px",
            }}
            onClick={logOut}
          >
            Log Out
          </button>
        </div>
        <div>
          <div style={{ width: "30vw", paddingLeft: "5vw" }}>{animalList}</div>
        </div>
      </div>
    </div>
  );
}
