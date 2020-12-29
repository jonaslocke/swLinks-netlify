const express = require("express");
const router = express.Router();
const Login = require("../models/Login");

//GET LOGIN LOG
router.get("/", async (req, res) => {
  try {
    const login = await Login.find();
    res.json(login);
  } catch (error) {
    res.json({ message: error });
  }
});

//LOGIN
router.post("/", async (req, res) => {
  const login = new Login({
    login: req.body.login,
    password: req.body.password,
    lastLogin: new Date().toLocaleDateString(),
    successfulLogin:
      req.body.password == "jon171" && req.body.login == "jnslocke"
        ? true
        : false,
  });

  try {
    const doLogin = await login.save();
    res.json({logged: doLogin.successfulLogin});
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
