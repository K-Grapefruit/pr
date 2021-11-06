export const join = (req, res) => res.send("JOIN");
export const login = (req, res) => res.send("login");
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("user Edit");
};
export const logout = (req, res) => res.send("user logout");
