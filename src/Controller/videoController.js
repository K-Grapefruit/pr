const fakeUser = {
  hi: "mooyaho",
  loggedIn: true,
};

const board = [
  {
    id: 1,
    Title: "Board 1",
    username: "kim",
    views: 5,
    createdAt: "Tommorow",
  },
  {
    id: 2,
    Title: "Board 2",
    username: "Lee",
    views: 5,
    createdAt: "Today",
  },
  {
    id: 3,
    Title: "Board 3",
    username: "someone",
    views: 4,
    createdAt: "Tommorow",
  },
];

export const home = (req, res) => {
  res.render("home", { message: "home", fakeUser, board });
};
export const watch = (req, res) => res.send("this watch");
export const edit = (req, res) => res.send("video Edit");
