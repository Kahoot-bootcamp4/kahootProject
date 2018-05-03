const mongoose = require('mongoose');

const gamesSchema = mongoose.Schema({
    id: {
        type: String
    },
    description: {
        type: String
    },
    questions: [{
        question_id: {
            type: String
        },
        question: [{
            type: String
        }],
        time: Number,
        answers: [{
            answer: String,
            correct: Boolean
        }]
    }]
});

module.exports = mongoose.model('Games', gamesSchema);