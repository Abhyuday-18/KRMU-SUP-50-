const { Router } = require("express");
const { hotelsRouter } = require("./hotels");

const adminRouter = Router();

adminRouter.use("/hotels", hotelsRouter);

// TODO:
// adminRouter.use("/rooms", roomsRouter);

module.exports = { adminRouter };
