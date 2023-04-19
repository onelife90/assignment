import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";

const PORT = "4008";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/", movieRouter);

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
