/*
You DONT have to import the User with your username.
Because it's a default export we can nickname it whatever we want.
So import User from "./models"; will work!
You can do User.find() or whatever you need like normal!
*/
import User from "./models/User.js";
import express from "express";

export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const getJoin = (req, res) => {
  return res.end();
};

export const postJoin = (req, res) => {
  return res.end();
};

export const getLogin = (req, res) => {
  return res.end();
};

export const postLogin = (req, res) => {
  return res.end();
};
