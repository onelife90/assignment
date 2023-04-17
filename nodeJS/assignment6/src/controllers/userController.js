export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const userId = (req, res) =>
  res.render("userId", { pageTitle: "userId", userId: `${req.params.id}` });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
