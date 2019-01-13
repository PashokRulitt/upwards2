process.env.NODE_ENV = process.env.NODE_ENV || "local";
const PORT = process.env.PORT || 5000;

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const config = require("./config");

// require("./config/passport");

mongoose.Promise = require("bluebird");
mongoose.connect(
  config.mongo.uri,
  config.mongo.options
);

// 1
const app = express();

if (process.env.NODE_ENV === "local") {
  app.use(morgan("dev"));
  mongoose.set("debug", true);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/users", require("./api/users") );

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).send("not found");
});

app.listen(PORT, () =>
  console.log(`Server started listening on port ${PORT}! ${process.env.NODE_ENV}`)
);
