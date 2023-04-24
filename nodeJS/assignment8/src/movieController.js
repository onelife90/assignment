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
export const movieDetail = (req, res) => {
  const movieId = req.params.id;
  const getMovie = getMovieById(movieId);
  return res.render("movieDetail", { pageTitle: getMovie.title, getMovie });
};
export const filterMovie = (req, res) => {
  const {
    query: { year, rating },
  } = req;
  const filterYear = getMovieByMinimumYear(year);
  const filterRate = getMovieByMinimumRating(rating);
  if (filterYear.title == filterRate.title) {
    return res.render("movieFilter", {
      pageTitle: "Filter",
      filterYear,
      filterRate,
    });
  }
};
