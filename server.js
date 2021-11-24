import { Mongoose } from "mongoose";
require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const db = mongoose.connection;

const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

const url = `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.idqix.mongodb.net/`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static(staticDir));

app.use(express.urlencoded({ extended: true }));
