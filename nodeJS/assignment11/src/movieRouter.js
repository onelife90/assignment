import express from "express";
import {
  home,
  getUpload,
  postUpload,
  detail,
  getEdit,
  postEdit,
  deleteMovies,
  search,
} from "./movieController.js";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.route("/upload").get(getUpload).post(postUpload);
movieRouter.get("/movies/:id([0-9a-f]{24})", detail);
movieRouter.route("/movies/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
movieRouter.get("/movies/:id([0-9a-f]{24})/delete", deleteMovies);
movieRouter.get("/search", search);

export default movieRouter;
