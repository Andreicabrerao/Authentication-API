const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const path = require("path");

//login page
router.get("/", (req, res) => {
  res.render("welcome");
});
//register page
router.get("/register", (req, res) => {
  res.render("register");
});
//dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});
//preferences;
router.get("/preferences", (req, res) => {
  res.render("preferences");
});

router.get("/preferences.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../models/preferences.js"));
});

module.exports = router;
