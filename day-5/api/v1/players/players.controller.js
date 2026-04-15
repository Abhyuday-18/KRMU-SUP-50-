const { createPlayerService } = require("../../../services/players.service.js");

const createPlayerController = async (req, res) => {
    console.log("Inside createPlayerController");
    try {
        const data = req.body;

        const result = await createPlayerService(data);

        res.status(201);
        res.json({
            success: true,
            data: {
                player: result,
            },
        });
    } catch (err) {
        if (err.name === "ValidationError") {
            res.status(400);
            res.json({
                success: false,
                message: "Validation Failed! Please check you inputs. " + err.message,
            });
        } else if (err.name === "MongoServerError" && err.code === 11000) {
            res.status(400);
            res.json({
                success: false,
                message: "Your email or username already exists in DB. " + err.message,
            });
        } else {
            console.log(err.name);
            console.log(err.code);

            res.status(500);
            res.json({
                success: false,
                message: err.message,
            });
        }
    }
};

module.exports = { createPlayerController };
