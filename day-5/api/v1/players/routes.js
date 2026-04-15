const express = require("express");
const { createPlayerController } = require("./players.controller.js");
const { validateCreatePlayerDto } = require("./dto/validatePlayerDto.js");

const playersRouter = express.Router();

playersRouter.post("/", validateCreatePlayerDto, createPlayerController);

module.exports = { playersRouter };
