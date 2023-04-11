import express from "express";
import { home, about, contact, login } from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get("/", home);
mainRouter.get("/about", about);
mainRouter.get("/contact", contact);
mainRouter.get("/login", login);

export default mainRouter;
