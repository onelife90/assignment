import express from "express";
import { userId, editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", userId);
userRouter.get("/edit-profile", editProfile);

export default userRouter;
