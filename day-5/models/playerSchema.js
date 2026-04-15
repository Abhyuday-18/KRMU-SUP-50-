const { Schema, model } = require("mongoose");

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    avatarUrl: String,
    skills: [
        {
            type: String,
            enum: ["Survival", "Combat", "Defense", "Stealth"],
        },
    ],
    description: String,
});

const Player = model("Player", playerSchema);

module.exports = { Player };
