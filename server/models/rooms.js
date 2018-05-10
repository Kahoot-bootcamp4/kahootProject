const mongoose = require('mongoose');

const roomsSchema = mongoose.Schema({
    roomID: String,
    gameID: String,
    players: [{
        name: String,
        points: Number
    }]
});

module.exports = mongoose.model('Rooms', roomsSchema);