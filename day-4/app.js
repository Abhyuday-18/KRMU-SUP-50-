const express = require("express");
const mongoose = require("mongoose");
// const { Schema } = mongoose;

mongoose
    .connect(
        "mongodb://likhilesh-mern-1:abcd1234abcd@ac-ft5xavv-shard-00-00.ychunlm.mongodb.net:27017,ac-ft5xavv-shard-00-01.ychunlm.mongodb.net:27017,ac-ft5xavv-shard-00-02.ychunlm.mongodb.net:27017/?ssl=true&replicaSet=atlas-hovr50-shard-0&authSource=admin&appName=Cluster0",
        {
            dbName: "KRMU-super-50",
        }
    )
    .then(() => {
        console.log("----- DB Connected -----");
    })
    .catch((err) => {
        console.log("----- Error in DB Connection", err.message);
    });

// const movieSchema = new mongoose.Schema({
//     title: String,
//     rating: Number,
//     releaseYear: Number,
//     description: String,
// });

// https://mongoosejs.com/docs/validation.html#:~:text=Each%20of%20the%20validator%20links%20above%20provide%20more%20information%20about%20how%20to%20enable%20them%20and%20customize%20their%20error%20messages.
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        required: [true, "Rating should be present & in between 1 to 10"],
    },
    releaseYear: {
        type: Number,
        default: 2000,
    },
    description: String,
    origin: {
        type: String,
        enum: ["Bollywood", "Hollywood", "Online Platform"],
    },
});

const Movies = mongoose.model("Movie", movieSchema);

const app = express();

// middleware
app.use((req, res, next) => {
    console.log("-->", req.method, req.url);
    next();
});

// it reads the body in json format
app.use(express.json());

// Creating Movies
// POST http://localhost:3000/movies
app.post("/movies", async (req, res) => {
    try {
        const movieData = req.body;
        let result;

        try {
            result = await Movies.insertOne(movieData);
        } catch (err) {
            res.status(400);
            res.json({
                success: false,
                message: err.message,
            });
            return;
        }

        console.log("result", result);
        res.status(201);
        res.json({
            success: true,
            message: "Movie Inserted",
            data: {
                movie: result,
            },
        });
    } catch (err) {
        console.log("Error in POST movies:", err.message);
        res.status(500);
        res.json({
            success: false,
            message: "Internal Server Error",
        });
    }
});

// GET handler for "/"
app.get("/", (req, res) => {
    res.send("Hello app!");
});

// GET handler for "/users"
app.get("/users", (req, res) => {
    res.send("Hello users!");
});

app.listen(3000, () => {
    console.log("------- Server is running on http://localhost:3000 -------");
});
