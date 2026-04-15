const mongoose = require("mongoose");
const URL = process.env.MONGODB_URL;

mongoose
    .connect(URL, {
        dbName: "hotels-management-tool",
    })
    .then(() => {
        console.log("------- DB Connected -------");
    })
    .catch((err) => {
        console.log("---- DB Connection Failed -----");
    });
