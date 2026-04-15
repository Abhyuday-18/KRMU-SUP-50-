const { Player } = require("../models/playerSchema");

const createPlayerService = async (data) => {
    return await Player.insertOne(data);
};

module.exports = { createPlayerService };
