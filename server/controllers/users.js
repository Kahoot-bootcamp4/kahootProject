const Users = require('../models/users');

const controller = {
    create(req, res, next){
      Users.create({
          login: req.body.login,
          password: req.body.password,
          email: req.body.email,
          avatar: req.body.avatar,
          isAdmin: req.body.isAdmin
      })
          .then((user) => {
              req.data = user._doc;
              next();
          })
    },
    readAll(req, res, next){
        Users.find({}).exec()
            .then((users) => {
                req.data = users;
                next()
            })
    },
    readOne(req, res,next){
        Users.findById(req.params.id)
            .then((user) => {
                req.data = user;
                next();
            })
    },
    update(req, res, next){
        Users.findByIdAndUpdate(req.params.id, {
            login: req.body.login,
            password: req.body.password,
            email: req.body.email,
            avatar: req.body.avatar,
            isAdmin: req.body.isAdmin
        })
            .then((user) => {
                req.data = user;
                next();
            })
    },
    delete(req, res, next){
        Users.findByIdAndRemove(req.params.id)
            .then((user) => {
                req.data = user;
                next();
            })
    }

};
module.exports = controller;