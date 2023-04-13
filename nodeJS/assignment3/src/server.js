import express from "express";

const PORT = 4003;
const app = express();

const urlLogger = (req, res, next) => {
  console.log("Path: ", req.path);
  next();
};

const timeLogger = (req, res, next) => {
  const today = new Date();
  console.log(
    `Time: ${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`
  );
  next();
};

const securityLogger = (req, res, next) => {
  req.protocol === "http" ? console.log("insecure") : console.log("secure");
  next();
};

const protectorMiddleware = (req, res, next) => {
  if (req.path === "/protected") {
    return res
      .status(403)
      .send("<h1>403</h1><h3>Sorry. This is protect zone.</h3>");
  }
  next();
};

app.use(urlLogger, timeLogger, securityLogger, protectorMiddleware);

app.get("/", (req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

const hadleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, hadleListening);
