import fs from "fs";

export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const read = async (req, res) => {
  const {
    file: { path },
  } = req;
  const content = fs.readFileSync(path);
  return res.render("read", { pageTitle: "Read file", content });
};
