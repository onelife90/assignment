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
  console.log("Sorry. This is protect zone.");
  res.redirect("..");
};

app.use(urlLogger);
app.use(timeLogger);
app.use(securityLogger);
app.get("/", (req, res) => res.send("<h1>Home</h1>"));

app.use(protectorMiddleware);
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

const hadleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, hadleListening);
