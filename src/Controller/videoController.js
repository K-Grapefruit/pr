export const home = (req, res) => {
  res.render("home", { message: "home" });
};
export const watch = (req, res) => res.send("this watch");
export const edit = (req, res) => res.send("video Edit");
