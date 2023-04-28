/*
You DONT have to import the User with your username.
Because it's a default export we can nickname it whatever we want.
So import User from "./models"; will work!
You can do User.find() or whatever you need like normal!
*/
import User from "./models/User.js";

export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const { username, password, password2, name } = req.body;
  const pageTitle = "join";
  const user = await User.findOne({ username });
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Wrong password confirmation.",
    });
  }
  if (user) {
    return res
      .status(400)
      .render("join", { pageTitle, errorMessage: "Username already taken." });
  }
  try {
    await User.create({
      username,
      password,
      name,
    });
    return res.render("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: error._message,
    });
  }
};

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};

export const postLogin = async (req, res) => {
  return res.end();
};
