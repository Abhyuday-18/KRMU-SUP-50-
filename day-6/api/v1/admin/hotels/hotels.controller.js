const { createHotelService, updateHotelService } = require("../../../../services/admins/hotels.service");

const createHotelController = async (req, res) => {
    try {
        const data = req.body;

        const newHotel = await createHotelService(data);

        res.status(201);
        res.json({
            success: true,
            data: {
                hotel: newHotel,
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
                message: "Some unique condition error. " + err.message,
            });
        } else {
            res.status(500);
            res.json({
                success: false,
                message: err.message,
            });
        }
    }
};

const updateHotelController = async (req, res) => {
    try {
        const { hotelId } = req.params;
        const data = req.body;

        const newHotel = await updateHotelService({ hotelId, dataToUpdate: data });

        res.status(200);
        res.json({
            success: true,
            data: {
                hotel: newHotel,
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
                message: "Some unique condition error. " + err.message,
            });
        } else {
            res.status(500);
            res.json({
                success: false,
                message: err.message,
            });
        }
    }
};

module.exports = { createHotelController, updateHotelController };
