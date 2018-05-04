const Games = require('../models/games');

const controller = {
    create(req, res, next){
        Games.create({
            id: req.body.id,
            description: req.body.description,
            questions: req.body.questions[{
                question_id: req.body.question_id,
                question: req.body.question,
                time: req.body.time }]
        })
            .then((games) => {
            req.data = games._doc;
        next();
    })
    .catch((e) => {
            let err = new Error(e.message);
        next(err)
    })
    },
    readAll(req, res, next){
        Games.find({}).exec()
            .then((games) => {
            req.data = games;
        next()
    })
    .catch((e) => {
            next(e)
        })
    },
    readOne(req, res,next){
        Games.findById(req.params.id)
            .then((games) => {
            req.data = games;
        next();
    })
    .catch((e) => {
            next(e)
        })
    },
    update(req, res, next){
        Games.findByIdAndUpdate(req.params.id, {
            id: req.body.id,
            description: req.body.description,
            questions: req.body.questions[{
                question_id: req.body.question_id,
                question: req.body.question,
                time: req.body.time }]
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