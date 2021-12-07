import React, { useEffect, useState } from "react";
import "./admin.css";

export default function AdminPage(props) {
  const [animalList, setAnimalList] = useState("");
  const [editView, setEditView] = useState("none");
  const [animal, setAnimal] = useState("");

  //event handler for edit
  function editHandle(event) {
    setEditView("flex");
    setAnimal(event.target.value);
  }

  //event handler for edit box close button
  function handleClose(event) {
    setEditView("none");
    setAnimal("");
  }

  //function to log out of admin portal
  function logOut(event) {
    //sets token prop to false
    props.setToken(false);
    //removes login token from localStorage
    localStorage.removeItem("token");
  }

  //database fetch for animal list
  useEffect(() => {
    //sends get request
    fetch("/api/animals")
      //reads response json
      .then((res) => res.json())
      .then((animals) => {
        let animalList = animals
          //sorts response alphabetically by name
          .sort(function (alpha, beta) {
            return alpha.animalName - beta.animalName;
          })
          //creates and returns an array of unordered list of animals with nested list items of the animal's info
          .map((item) => {
            //has a button for editing and one for deletion, both of which find an animal entry by name and edit or delete it as required
            return (
              <ul className="animalBox">
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
    <div className="animalListWrapper">
      <div>
        {/* title page */}
        <h1 className="adminTitle">Admin Page</h1>
      </div>
      <div
        // edit modal that appear on button click in animal entry
        name="edit div"
        className="editModal"
        style={{
          display: editView,
        }}
      >
        {/* form for edit input */}
        <form className="editForm" action="/edit" method="post">
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
            //form for adding a new animal into the database
            className="addAnimalForm"
            action="/animalPost"
            method="post"
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
            <label className="submitWrapper">
              <button className="animalSubmit" type="submit">
                Submit Animal
              </button>
            </label>
          </form>
          <button
            //logout button
            className="logOut"
            onClick={logOut}
          >
            Log Out
          </button>
        </div>
        <div>
          {/* displays animal list */}
          <div className="animalDisplay">{animalList}</div>
        </div>
      </div>
    </div>
  );
}
