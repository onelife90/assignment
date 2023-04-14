import express from "express";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", getUserId);

export default userRouter;
