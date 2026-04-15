const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGODB_URL, {
        dbName: "game-database",
    })
    .then(() => {
        console.log("------- DB Connected -------");
    })
    .catch((err) => {
        console.log("------- Error in DB connection", err.message);
    });
