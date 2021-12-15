//dotenv to keep usernames/passwords safe
require("dotenv").config();

//establishing express framework
const express = require("express");
const app = express();
const path = require("path");
//importing mongoose to handle database interactions
const mongoose = require("mongoose");

//establishing server port
const port = process.env.PORT || 8000;
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

//bcrypt to encrypt admin password
const bcrypt = require("bcrypt");

//connects to database
const url = `mongodb+srv://${process.env.user}:${process.env.password}@cluster0.idqix.mongodb.net/harmony-farms`;

//initiates mongoose
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

//establishes database listening on 8000
app.listen(port, () => {
  console.log(`Hearing you on port: ${port}`);
});

//establish middleware
app.use(express.static(staticDir));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create Admin class
const Admin = mongoose.model("Admin", {
  username: { type: String, required: true },
  password: { type: String, required: true },
});

//creates schema for animal info
const animalSchema = new mongoose.Schema({
  animalName: { type: String, required: true },
  imageLink: { type: String },
  donorBox: { type: String },
});

const Animal = mongoose.model("Animal", animalSchema);

//schema for site images
const imageSchema = new mongoose.Schema({
  imageId: { type: String, required: true },
  imageURL: { type: String },
});

const Image = mongoose.model("Image", imageSchema);

const raffleSchema = new mongoose.Schema({
  name: { type: String },
  date: { type: String },
});

const Raffle = mongoose.model("Raffle", raffleSchema);

//save raffle winner to database
app.post("/storeRaffleWinner", async (req, res) => {
  let newObj = new Raffle(req.body);
  await newObj.save();
  console.log(`raffle winner posted`);
  res.redirect("/admin");
});

//get raffle winner
app.get("/getRaffleWinner", async (req, res) => {
  let target = await Raffle.find({});
  res.send(target);
});

//adds new image to database. No route in functional site
app.post("/imageAdd", async (req, res) => {
  let newObj = new Image(req.body);
  await newObj.save();
  console.log(`image added`);
  res.redirect("/admin");
});

//edits database entry for image URL
app.post("/imageEdit", async (req, res) => {
  let target = await Image.find({ imageId: req.body.imageId });
  let targetId = target[0]._id;
  await Image.updateOne(
    { _id: targetId },
    { $set: { imageURL: req.body.imageURL } }
  );
  console.log(`${req.body.imageId} URL changed`);
  res.redirect("/admin");
});

//fetch for image links in database
app.get("/api/images", async (req, res) => {
  let target = await Image.find({});
  res.send(target);
});

//writes new animal entries into the database
app.post("/animalPost", async (req, res) => {
  let newObj = new Animal(req.body);
  // prevents write to database if animal has no name
  if (newObj.animalName === "") {
    res.status(403).redirect("/admin");
  } else {
    await newObj.save();
    console.log("Animal Added");
    res.status(200).redirect("/admin");
  }
});

// for assigning new admins, only works server-side
// app.post("/assign", async (req, res) => {
//   bcrypt.hash(req.body.password, 10, async (err, hash) => {
//     let userDoc = {
//       username: req.body.username,
//       password: hash,
//     };
//     let user = new Admin(userDoc);

//     user.save();
//   });
//   console.log(`admin added`);
// });

//returns json object with all animals in database
app.get("/api/animals", async (req, res) => {
  let animals = await Animal.find({});
  res.send(animals);
});

//removes animal entry from database
app.post("/delete", async (req, res) => {
  //finds animal by name
  let target = await Animal.find({ animalName: req.body.animalDelete });
  //collects target animal's database id
  let targetId = target[0]._id;
  //removes it from the database
  await Animal.deleteOne({ _id: targetId });
  //refreshes page
  res.redirect("/admin");
});

//edits animal entry
app.post("/edit", async (req, res) => {
  //finds animal being edited
  let target = await Animal.find({ animalName: req.body.animalName });
  //collects id of target animal
  let targetId = target[0]._id;
  //checks for changes in input fields and updates only those fields

  if (req.body.imageLink !== "") {
    await Animal.updateOne(
      { _id: targetId },
      { $set: { imageLink: req.body.imageLink } }
    );
  }
  if (req.body.donorBox !== "") {
    await Animal.updateOne(
      { _id: targetId },
      { $set: { donorBox: req.body.donorBox } }
    );
  }
  //refreshes page
  res.redirect("/admin");
});

//admin page login interaction
app.post("/login", async (req, res) => {
  //redirects back to page if either entry field is empty
  if (req.body.username === "" || req.body.password === "") {
    console.log("no entry");
    res.redirect("/admin");
  } else {
    //pulls admin list and matches to database entries
    let target = await Admin.findOne({ username: req.body.username });
    //runs an encrypted compare on the stored password and entered password
    bcrypt.compare(req.body.password, target.password, (err, result) => {
      if (result) {
        //if passwords match, sends to admin landing page
        console.log(`success`);
        res.send({ token: true });
      } else {
        //if not, redirects back to sign in page
        console.log("failure");
        res.redirect("/admin");
      }
    });
  }
});

//404 catch
app.get("/*", (req, res) => {
  res.status(404).send("Page Not Found");
});
