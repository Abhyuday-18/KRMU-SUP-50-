const { Schema, model, SchemaTypes } = require("mongoose");

const roomsSchema = new Schema({
    roomType: {
        type: String,
        required: true,
    },
    count: {
        type: SchemaTypes.Int32,
        default: 1,
        min: 1,
    },
    price: {
        type: Number,
        required: true,
    },
    facilities: {
        type: String,
        default: "",
    },
});

const hotelSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    stars: {
        type: SchemaTypes.Int32,
        min: 0,
        max: 7,
        default: 0,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    rooms: [roomsSchema],
});

const Hotel = model("hotel", hotelSchema);

module.exports = { Hotel };
