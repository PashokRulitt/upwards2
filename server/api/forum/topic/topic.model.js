const mongoose = require("mongoose");
const { Schema } = mongoose;

const TopicSchema = new Schema(
  {
    link: { type: String, trim: true }, // summary translit, like in ProgLanguagesModel
    summary: { type: String, trim: true },
    description: { type: String, trim: true }, // https://github.com/chmln/vue-wysiwyg
    attachments: [{ type: Schema.ObjectId, ref: "FilesModel" }],
    tags: [{ type: String, trim: true }],
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    itLang: { type: Schema.ObjectId, ref: "ProgLanguagesModel" },
    addedAt: { type: Date, default: Date.now, select: false },
    updateAt: { type: Date, default: Date.now, select: false },
    addedBy: { type: Schema, ref: "UsersModel" }
  },
  {
    collection: "TopicCollection"
  }
);

module.exports = mongoose.model("TopicModel", TopicSchema);
