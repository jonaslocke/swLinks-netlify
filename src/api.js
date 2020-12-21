const express = require("express");
const serverless = require("serverless-http");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//MODELS
const players = require("./routes/players");
const links = require("./routes/links");

//DB CONNECTION
mongoose.connect(
  "mongodb+srv://admin:c4llm34n0w@swlinks.9x4u4.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => {
    console.log("CONNECTED");
  }
);

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//ROUTES
app.use("/.netlify/functions/api/players", players);
app.use("/.netlify/functions/api/links", links);

module.exports = app;
module.exports.handler = serverless(app);
