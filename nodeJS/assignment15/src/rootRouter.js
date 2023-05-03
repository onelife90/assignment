import express from "express";
import { home, getRead, postRead, show } from "./rootController";
import { uploadFileMiddleware } from "./middleware";

const rootRouter = express.Router();

rootRouter.route("/").get(home);
rootRouter
  .route("/read")
  .get(getRead)
  .post(uploadFileMiddleware.single("text"), postRead);
rootRouter.get("/read/:id", show);

export default rootRouter;
