const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsersSchema = new Schema(
  {
    email: { type: String },
    username: { type: String },
    password: { type: String },
    verifiedEmail: { type: Boolean, default: false },
    verifiedEmailAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    viewHistory: [
      {
        topic: { type: Schema.ObjectId, ref: "TopicModel" },
        dateStart: { type: Date, default: Date.now }, // первое вхождение на топик
        dateLast: { type: Date, default: Date.now }, // последние вхождение на топик
        like: { type: Boolean, default: false },
        likeDate: { type: Date },
        dislikeDate: { type: Date }
      }
    ]
    // roles:
    // permissions:
  },
  {
    collection: "UsersCollection"
  }
);

module.exports = mongoose.model("UsersModel", UsersSchema);
