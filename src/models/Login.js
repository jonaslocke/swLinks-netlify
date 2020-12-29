const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
  login: { type: String, require: true },
  password: { type: String, require: true },
  lastLogin: { type: Date },
  successfulLogin: { type: Boolean },
});

module.exports = mongoose.model("Login", LoginSchema);
