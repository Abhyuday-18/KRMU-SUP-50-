const { getHotelByIdService } = require("../../../../../services/admins/hotels.service");

const validateUpdateHotelDto = async (req, res, next) => {
    try {
        const { hotelId } = req.params;
        // const hotelId = req.params.hotelId;

        const hotel = await getHotelByIdService(hotelId);
        if (!hotel) {
            throw new Error("Invalid Hotel Id.");
        }

        const { title, stars, city, rooms = [] } = req.body;

        if (stars && (stars < 0 || stars > 7)) {
            throw new Error("Stars should be between 0 to 7");
        }
        if (rooms) {
            throw new Error("Rooms cannot be updated in this API");
        }

        next();
    } catch (err) {
        res.status(400);
        res.json({
            success: false,
            message: err.message,
        });
        return;
    }
};

module.exports = { validateUpdateHotelDto };
