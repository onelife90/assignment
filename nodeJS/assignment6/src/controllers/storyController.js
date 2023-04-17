export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const trending = (req, res) =>
  res.render("trending", { pageTitle: "Trending" });
export const newest = (req, res) => res.render("new", { pageTitle: "New" });
export const stories = (req, res) =>
  res.render("stories", {
    pageTitle: "Stories",
    storiesId: `${req.params.id}`,
  });
export const editStories = (req, res) =>
  res.render("editStories", {
    pageTitle: "Edit Stories",
    storiesId: `${req.params.id}`,
  });
export const deletestories = (req, res) =>
  res.render("deletestories", {
    pageTitle: "Delete Stories",
    storiesId: `${req.params.id}`,
  });
