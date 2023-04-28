import "./db.js";
import "./models/User.js";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import session from "express-session";
import userRouter from "./userRouter.js";
import { localsMiddleware } from "./middlewares.js";

const PORT = 8000;
const app = express();
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(localsMiddleware);
app.use("/", userRouter);

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
