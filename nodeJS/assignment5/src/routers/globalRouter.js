import express from "express";
import { home } from "../controllers/globalController";
import { trending, newest } from "../controllers/storyController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", newest);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
