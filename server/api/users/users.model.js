const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  email: {type: String},
  username: {type: String},
  password: {type: String},
  verifiedEmail: {type: Boolean, default: false},
  verifiedEmailAt: {type: Date},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date},
  // roles:
  // permissions:
}, {
  collection: "UsersCollection"
});

module.exports = mongoose.model("UsersModel", UsersSchema);
