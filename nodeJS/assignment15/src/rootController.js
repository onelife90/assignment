import fs from "fs";

export const home = (req, res) => {
  fs.readdir("uploads/", (err, files) => {
    if (err) {
      res.status(400).redirect("/");
    }
    return res.render("home", { pageTitle: "Home", files, err });
  });
};

export const getRead = (req, res) => {
  return res.redirect("/");
};

export const postRead = (req, res) => {
  const {
    file: { path },
  } = req;
  fs.readFile(path, (err, content) => {
    if (err) {
      res.status(400).redirect("/");
    }
    return res.render("read", { pageTitle: "Read file", content });
  });
};

export const show = (req, res) => {
  const path = `uploads/${req.params.id}`;
  fs.readFile(path, (err, content) => {
    if (err) {
      res.status(400).redirect("/");
    }
    return res.render("read", { pageTitle: "Content", content });
  });
};
