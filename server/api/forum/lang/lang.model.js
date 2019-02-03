const mongoose = require("mongoose");
const { Schema } = mongoose;

const LangSchema = new Schema(
  {
    name: { type: String, trim: true },
    link: { type: String, trim: true }, // translit
    addedAt: { type: Date, default: Date.now, select: false },
    updateAt: { type: Date, default: Date.now, select: false },
    addedBy: { type: Schema, ref: "UsersModel" }
  },
  {
    collection: "ProgLanguages"
  }
);

// TODO: translitFunc https://github.com/tallesl/node-friendly-url

LangSchema.pre("save", function(next) {
  if (this.isNew || this.isModified("name")) {
    this.link = translitFunc(this.name);
  }
});

module.exports = mongoose.model("ProgLanguagesModel", LangSchema);
