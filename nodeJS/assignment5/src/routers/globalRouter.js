import express from "express";
import { home } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", home);
// globalRouter.get("/trending", trending);
// globalRouter.get("/new", newest);
// globalRouter.get("/join", join);
// globalRouter.get("/login", login);

export default globalRouter;
