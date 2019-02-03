const mongoose = require("mongoose");
const { Schema } = mongoose;

const FilesSchema = new Schema(
  {
    name: { type: String },
    link: { type: String },
    topic: { type: Schema.ObjectId, ref: "TopicModel" },
    addedAt: { type: Date, default: Date.now, select: false },
    addedBy: { type: Schema, ref: "UsersModel" },
    deleteDate: { type: Date } // когда проверить надо ли удалять файл
  },
  {
    collection: "FilesCollection"
  }
);

// https://github.com/expressjs/multer

module.exports = mongoose.model("FilesModel", FilesSchema);
