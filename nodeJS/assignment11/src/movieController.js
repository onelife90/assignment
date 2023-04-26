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
      genres,
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

export const getEdit = (req, res) => {
  return res.send("NOT YET");
};

export const postEdit = (req, res) => {
  return res.send("NOT YET");
};

export const deleteMovies = (req, res) => {
  return res.send("NOT YET");
};

export const search = (req, res) => {
  return res.send("NOT YET");
};
