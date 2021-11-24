require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const db = mongoose.connection;

const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

const url = `mongodb+srv://${process.env.user}:${process.env.password}@cluster0.idqix.mongodb.net/harmony-farms`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
  console.log(`Hearing you on port: ${port}`);
});

app.use(express.static(staticDir));

app.use(express.urlencoded({ extended: true }));

const testSchema = new mongoose.Schema({
  testContent: { type: String },
});

const Test = mongoose.model("Test", testSchema);

app.post("/test", async (req, res) => {
  let userObj = req.body;
  let newTestObj = new Test(userObj);
  await newTestObj.save();
  res.send("posted");
});
