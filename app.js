require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { log, error } = require("./utlis/logger");
const { URL } = require("./utlis/config");
const usersRouter = require("./controller/usersRoutes");
const urlRouter = require("./controller/urlRoutes");
const loginRouter = require("./controller/loginRoutes");
const redirectRouter = require("./controller/redirectRoutes");

app.use(express.json());
app.use(cors());



mongoose
  .connect(URL)
  .then(() => {
    log("connected to mongoDB");
  })
  .catch((err) => {
    error(err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to URL Shortener</h1>");
});

app.use(usersRouter);
app.use(urlRouter);
app.use(loginRouter);
app.use(redirectRouter);

module.exports = app;