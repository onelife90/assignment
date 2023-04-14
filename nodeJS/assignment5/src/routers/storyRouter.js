import express from "express";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", stories);
storyRouter.get("/:id(\\d+)/edit", editStories);
storyRouter.get("/:id(\\d+)/delete", deletestories);

export default storyRouter;
