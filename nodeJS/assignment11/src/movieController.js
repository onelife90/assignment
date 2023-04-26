/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie.js";

export const home = async (req, res) => {
  const movies = await Movie.find({});
  return res.render("home", { pageTitle: "Home", movies });
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Movies" });
};

export const postUpload = async (req, res) => {
  const { title, summary, year, rating, genres } = req.body;
  try {
    await Movie.create({
      title,
      summary,
      year,
      rating,
      genres: Movie.formatGenres(genres),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Movies",
      errorMessage: error._message,
    });
  }
};

export const detail = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.render("404", { pageTitle: "Movie not found." });
  }
  return res.render("detail", { pageTitle: "Movie Detail", movie });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.render("404", { pageTitle: "Movie not found." });
  }
  return res.render("edit", { pageTitle: `Edit:${movie.title}`, movie });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.exists({ _id: id });
  const { title, summary, year, rating, genres } = req.body;
  if (!movie) {
    return res.render("404", { pageTitle: "Movie not found." });
  }
  await Movie.findByIdAndUpdate(id, {
    title,
    summary,
    year,
    rating,
    genres: Movie.formatGenres(genres),
  });
  return res.redirect(`/movies/${id}`);
};

export const deleteMovies = async (req, res) => {
  const { id } = req.params;
  await Movie.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let movies = [];
  if (keyword) {
    movies = await Movie.find({
      title: { $regex: new RegExp(keyword, "i") },
    });
  }
  return res.render("search", { pageTitle: "Search", movies });
};
