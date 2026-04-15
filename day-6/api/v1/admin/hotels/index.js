const { Router } = require("express");
const { createHotelController, updateHotelController } = require("./hotels.controller.js");
const { validateCreateHotelDto } = require("./dto/validateCreateHotelDto.js");
const { validateUpdateHotelDto } = require("./dto/validateUpdateHotelDto.js");

const hotelsRouter = Router();

hotelsRouter.post("/", validateCreateHotelDto, createHotelController);
hotelsRouter.patch("/:hotelId", validateUpdateHotelDto, updateHotelController);
// TODO:
// hotelsRouter.get("/:hotelId", getHotelByIdController);
// hotelsRouter.delete("/:hotelId", validateDeleteHotelDto, deleteHotelController);

module.exports = { hotelsRouter };
