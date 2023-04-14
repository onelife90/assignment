import express from "express";
import { editStories, deleteStories } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", stories);
storyRouter.get("/:id(\\d+)/edit", editStories);
storyRouter.get("/:id(\\d+)/delete", deletestories);

export default storyRouter;
