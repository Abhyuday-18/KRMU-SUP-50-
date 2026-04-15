const { Router } = require("express");
const { signupController, loginController } = require("./auth.controllers.js");
const { validateSignup } = require("./auth.middlewares.js");

const authRouter = Router();

authRouter.post("/signup", validateSignup, signupController);

authRouter.post("/login",  loginController);

module.exports = { authRouter };
