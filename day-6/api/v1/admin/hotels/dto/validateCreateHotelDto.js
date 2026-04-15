const validateCreateHotelDto = (req, res, next) => {
    try {
        const { title, stars, city, rooms } = req.body;
        if (!title) {
            throw new Error("Title is required");
        }
        if (stars && (stars < 0 || stars > 7)) {
            throw new Error("Stars should be between 0 to 7");
        }
        if (!city) {
            throw new Error("City is required");
        }
        if (!rooms || !Array.isArray(rooms)) {
            throw new Error("Rooms must be an array");
        }

        const roomsErrors = [];
        for (let i = 0; i < rooms.length; i++) {
            const { roomType, count, price } = rooms[i];
            if (!roomType) {
                roomsErrors.push(`rooms[${i}].roomType is required`);
            }
            if (count && count < 1) {
                roomsErrors.push(`rooms[${i}].count is required`);
            }
            if (!price) {
                roomsErrors.push(`rooms[${i}].price is required`);
            }
        }

        if (roomsErrors.length > 0) {
            throw new Error(roomsErrors.join(". "));
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

module.exports = { validateCreateHotelDto };
