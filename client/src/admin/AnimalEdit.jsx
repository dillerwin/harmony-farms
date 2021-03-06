import React, { useEffect, useState } from "react";
import "./admin.css";

export default function AnimalEdit(props) {
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
    event.preventDefault();
    setEditView("none");
    setAnimal("");
  }

  function handleRedirect(event) {
    event.preventDefault();
    props.setView("images");
    localStorage.setItem("view", "images");
  }

  function handleReturn(event) {
    event.preventDefault();
    props.setView(false);
    localStorage.removeItem("view");
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
                {/* <ul>
                  <li>{item.imageLink}</li>
                  <li>{item.donorBox}</li>
                </ul> */}
                <button
                  onClick={editHandle}
                  name="animalEdit"
                  value={item.animalName}
                  className="admin-edit-button"
                >
                  Edit
                </button>
                <form action="/delete" method="post">
                  <button
                    type="submit"
                    name="animalDelete"
                    value={item.animalName}
                    className="admin-edit-button"
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
      <div className="titleWrapper">
        {/* title page */}
        <h1 className="adminTitle">Harmony Farms Sanctuary</h1>
        <h2 className="adminTitle">Admin Portal</h2>
        <h3>Edit Animal Entries</h3>
      </div>
      <div
        className="navButtons"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <button
          className="imageRedirect admin-edit-button"
          onClick={handleRedirect}
        >
          Edit Images
        </button>
        <button
          className="homeRedirect admin-edit-button"
          onClick={handleReturn}
        >
          Exit Animal Edit
        </button>
      </div>
      <div
        // edit modal that appears on button click in animal entry
        name="edit div"
        className="animalEditModal"
        style={{
          display: editView,
        }}
      >
        {/* edit animal form */}
        <form className="animalEditForm" action="/edit" method="post">
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
          <p className="animalEditButtons">
            <button type="submit" name="editSubmit">
              Submit Edit
            </button>
            <button onClick={handleClose}>Close Edit</button>
          </p>
        </form>
      </div>
      <div className="addAnimal">
        <div className="addAnimalWrapper">
          {/* new animal entry */}
          <form
            //form for adding a new animal into the database
            className="addAnimalForm"
            action="/animalPost"
            method="post"
          >
            <label>
              <p className="admin-input-text">Animal Name</p>
              <input
                type="text"
                name="animalName"
                placeholder="Enter the animal's name"
                className="admin-edit-input"
              />
            </label>
            <label>
              <p className="admin-input-text">Image Link</p>
              <input
                type="text"
                name="imageLink"
                placeholder="Enter link to image of the animal"
                className="admin-edit-input"
              />
            </label>
            <label>
              <p className="admin-input-text">Donor Box Link</p>
              <input
                type="text"
                name="donorBox"
                placeholder="Enter link to animal's donorbox"
                className="admin-edit-input"
              />
            </label>
            <label className="submitWrapper">
              <button className="animalSubmit admin-edit-button" type="submit">
                Submit Animal
              </button>
            </label>
          </form>
        </div>
        {/* displays animal list */}
        <div className="animalDisplay">{animalList}</div>
      </div>
    </div>
  );
}
