const express = require("express");
const morgan = require("morgan");
const { v1Router } = require("./api/v1/routes.js");

const dotenv = require("dotenv");
dotenv.config();

require("./config/database.js");

// -------------------------------------

const app = express();

// request logging
app.use(morgan("dev"));

// express will read the body in the json format
app.use(express.json());

app.use("/api/v1", v1Router);

// -------------------------------------

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log("------ Server Started -------");
});
