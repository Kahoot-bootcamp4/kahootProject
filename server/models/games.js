const mongoose = require('mongoose');

const gamesSchema = mongoose.Schema({
    description: {
        type: String
    },
    questions: [{
        question: String,
        time: Number,
        answers: [{
            answer: String,
            correct: Boolean
        }]
    }]
});

module.exports = mongoose.model('Games', gamesSchema);