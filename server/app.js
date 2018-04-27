require('./db');
const { PORT = 9999 } = process.env;
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    origins: '*:*'
});
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');

let online = 0;
io.on('connection', (client) => {
    console.log("User connected");
    console.log(++online);
    client.broadcast.emit("change-online", online);
    client.on("disconnect", () => {
        console.log(--online);
        client.broadcast.emit("change-online", online);
    });
});

app.use((request, response, next) => {
    console.log(`--->  ${request.method} -- ${request.url}`);
    next();
});

app.use('/users/', usersRoute);

app.use('/auth/', authRoute);

app.use(express.static('./build'));

app.use((err, req, res, next) => {
    res.json({
        status: 400,
        message: err.message
    })
});

server.listen(PORT, () => {
    console.log(`Server is started on port №${PORT}`);
});