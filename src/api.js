const express = require("express");
const serverless = require("serverless-http");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//MODELS
const players = require("./routes/players");
const links = require("./routes/links");
const login = require("./routes/login");

//DB CONNECTION
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("CONNECTED");
});

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//ROUTES
app.use("/.netlify/functions/api/players", players);
app.use("/.netlify/functions/api/links", links);
app.use("/.netlify/functions/api/login", login);

module.exports = app;
module.exports.handler = serverless(app);
