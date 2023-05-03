import fs from "fs";

export const home = (req, res) => {
  fs.readdir("uploads/", function (err, files) {
    console.log(files);
    return res.render("home", { pageTitle: "Home", files });
  });
};

export const read = (req, res) => {
  const {
    file: { path },
  } = req;
  const content = fs.readFileSync(path);
  return res.render("read", { pageTitle: "Read file", content });
};
