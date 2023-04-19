import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  let movies = getMovies();
  return res.render("home", { pageTitle: "Movies!", movies });
};
export const movieDetail = (req, res) => {};
export const filterMovie = (req, res) => {};
