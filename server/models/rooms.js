const mongoose = require('mongoose');

const roomsSchema = mongoose.Schema({
    gameID: String,
    players: [{
        name: String,
        points: Number
    }]
});

module.exports = mongoose.model('Rooms', roomsSchema);