const UsersModel = require("./users.model");

exports.getUsers = (req, res) => {
  UsersModel.find().exec((err, result) => {
    res.send(result);
  });
};

exports.loginUser = (req, res) => {
  const user = req.body.user;
  req.session.user = user;
  req.session.logins = (req.session.logins || 0) + 1;

  // res.cookie("username", user, {httpOnly: true});

  res.send("ok");
  // 1 - поставить куку, которая соответствует имени пользователя переданном в форме
};

exports.checkUser = (req, res) => {
  // const user = req.cookies.username;
  const user = req.session.user;

  res.send(user);
  // 1 - достать куку
};
