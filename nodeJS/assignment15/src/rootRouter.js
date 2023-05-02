import express from "express";
import { home, read } from "./rootController";
import { uploadFileMiddleware } from "./middleware";

const rootRouter = express.Router();

rootRouter.route("/").get(home);
rootRouter
  .route("/read")
  .get(read)
  .post(uploadFileMiddleware.single("text"), read);

export default rootRouter;
