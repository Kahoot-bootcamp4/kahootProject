const jwt = require("jsonwebtoken");
const KEY = "secret";

const createToken = (req, res, next) => {
    jwt.sign({
        // info: req.info.token
        }, KEY, {
            expiresIn: 180
        }, (err, token) => {
            req.data = token;
            next()
    })
}

module.exports = createToken;