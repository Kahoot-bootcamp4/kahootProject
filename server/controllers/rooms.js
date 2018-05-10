const Rooms = require('../models/rooms');

const controller = {
    create(req, res, next){
        Rooms.create({
            id: req.body.id,
            gameID: req.body.gameID,
            players: req.body.players.map((playersObj, index) => {
                return {
                    name: playersObj.name,
                    points: playersObj.points.map((playersObj, index) => {
                        return {
                            answer: playersObj.var,
                            correct: playersObj.correct
                        }
                    })
    }
    })
        // questions: req.body.questions[{
        //     question_id: req.body.question_id,
        //     question: req.body.question,
        //     time: req.body.time }]
    })
    .then((rooms) => {
            req.data = rooms._doc;
        next();
    })
    .catch((e) => {
            let err = new Error(e.message);
        next(err)
    })
    },
    readAll(req, res, next){
        Rooms.find({}).exec()
            .then((rooms) => {
            req.data = rooms;
        next()
    })
    .catch((e) => {
            next(e)
        })
    },
    readOne(req, res,next){
        Roooms.findById(req.params.id)
            .then((rooms) => {
            req.data = rooms;
        next();
    })
    .catch((e) => {
            next(e)
        })
    },
    update(req, res, next){
        Rooms.findByIdAndUpdate(req.params.id, {
            id: req.body.id,
            gameID: req.body.gameID,
            players: req.body.players.map((playersObj, index) => {
                return {
                    name: playersObj.name,
                    points: playersObj.points.map((playersObj, index) => {
                        return {
                            answer: playersObj.var,
                            correct: playersObj.correct
                        }
                    }
                }
        })
            .then((games) => {
            req.data = games;
        next();
    })
    .catch((e) => {
            next(e)
        })
    },
    delete(req, res, next){
        Games.findByIdAndRemove(req.params.id)
            .then((games) => {
            req.data = games;
        next();
    })
    .catch((e) => {
            next(e)
        })
    }

};
module.exports = controller;