const UsersModel = require("./users.model");

exports.getUsers = (req, res) => {
  UsersModel.find().exec((err, result) => {
    res.send(result);
  });
};

exports.loginUser = (req, res) => {
  // 1 - поставить куку, которая соответствует имени пользователя переданном в форме
};

exports.checkUser = (req, res) => {
  // 1 - достать куку
};
