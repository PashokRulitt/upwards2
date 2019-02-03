process.env.NODE_ENV = process.env.NODE_ENV || "local";
const PORT = process.env.PORT || 5000;
const SECRET =
  process.env.SECRET ||
  "XxjEnJCmKz5Zq7d7ZCbVF6wGxGBY4Z3hXK6YG2WqCPhyM2Meb5XbcELzMuymQeDhfSuD3UerAdBsXQ3G7";

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
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

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      stringify: false,
      collection: "Sessions"
    })
  })
);

app.use("/users", require("./api/users"));

app.all("/*", express.static(path.join(__dirname, "..", "dist")));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).send("not found");
});

app.listen(PORT, () =>
  console.log(
    `Server started listening on port ${PORT}! ${process.env.NODE_ENV}`
  )
);
