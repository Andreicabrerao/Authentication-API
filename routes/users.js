const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { route } = require(".");
// import { checkNews } from "../models/sendEmail";
const { checkNews } = require("../models/sendEmail");

console.log(checkNews);

//login handle
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/preferences", (req, res) => {
  res.render("preferences");
});

//Register handle
router.post("/login", (req, res, next) => {
  // passport.authenticate("local", {
  //   successRedirect: "/dashboard",
  //   failureRedirect: "/users/login",
  //   failureFlash: true,
  // })(req, res, next);
  // console.log("email", req.body.email);
  User.findOne({ email: req.body.email }).exec((err, user) => {
    console.log("here", user);
    if (err) {
      return next(err);
    }
    if (user) {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
          //session id in bd

          res.cookie("ssid", user._doc._id, { httpOnly: true, secure: true });
          //add id to the cookies

          //render to preferences
          res.render(`dashboard`, {
            name: user.name,
            email: user.email,
          });
        }
      });
    }
  });
});

//register post handle

router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  const errors = [];
  console.log(" Name " + name + " email :" + email + " pass:" + password);
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields" });
  }
  //check if match
  if (password !== password2) {
    errors.push({ msg: "passwords dont match" });
  }

  //check if password is more than 6 characters
  if (password.length < 6) {
    errors.push({ msg: "password atleast 6 characters" });
  }
  if (errors.length > 0) {
    res.render("register", {
      errors: errors,
      name: name,
      email: email,
      password: password,
      password2: password2,
    });
  } else {
    //validation passed
    User.findOne({ email: email }).exec((err, user) => {
      console.log(user);
      if (user) {
        errors.push({ msg: "email already registered" });
        res.render("register", { errors, name, email, password, password2 });
      } else {
        const newUser = new User({
          name: name,
          email: email,
          password: password,
          preference: [],
        });
        //hash password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //save pass to hash
            newUser.password = hash;
            //save user
            newUser
              .save()
              .then((value) => {
                console.log(value);
                req.flash("success_msg", "You have now registered!");
                res.redirect("/users/login");
              })
              .catch((value) => console.log(value));
          })
        );
      }
    });
  }
});

//Preferences
router.post("/preferences", (req, res) => {
  //findone and update the array of preferences

  User.findByIdAndUpdate(
    { _id: "5fd05161f32017c5bec80907" },
    { preferences: Object.values(req.body) }
  )
    .then((document) => {
      console.log(document);
      checkNews();
      //return res.status(200).json(req.body);
      res.redirect("/users/preferences");
    })
    .catch((e) => console.log(e));
  //{"favorite_sports":"Sports","favorite_cars":"Cars","favorite_javascript":"Javascript"}
  //console.log(req.body);
});

//logout
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "Now logged out");
  res.redirect("http://localhost:3000");
});
module.exports = router;
