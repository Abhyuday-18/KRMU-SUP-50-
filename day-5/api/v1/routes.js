const express = require("express");
const { playersRouter } = require("./players/routes.js");

const v1Router = express.Router();

v1Router.use("/players", playersRouter);

module.exports = { v1Router };
