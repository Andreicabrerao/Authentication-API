const cookieController = {};
const User = require("../models/user");

/**
 * setCookie - set a cookie with a random number
 */
cookieController.setCookie = (req, res, next) => {
  // write code here
  const rand = Math.floor(Math.random() * 100);
  res.cookie("secret", rand);
  return next();
};

/**
 * setSSIDCookie - store the user id in a cookie
 */
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err)
      return next(
        "Error in cookieController.setSSIDCookie: " + JSON.stringify(err)
      );
    res.locals.id = user._doc._id;
    res.cookie("ssid", user._doc._id, { httpOnly: true, secure: true });
    return next();
  });
};

module.exports = cookieController;
