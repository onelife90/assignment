import "./db.js";
import "./models/Movie.js";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import movieRouter from "./movieRouter.js";
import { localsMiddleware } from "./middlewares.js";

const PORT = 10011;
const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", movieRouter);

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
