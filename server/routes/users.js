const prepareBody = require('../controllers/prepareBody');
const controller = require('../controllers/users');
const route = require('express').Router();

route.get('/', controller.readAll, prepareBody, (req, res) => {
    res.json(req.responseData);
});



module.exports = route;