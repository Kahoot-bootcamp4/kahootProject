require('./db');
const { PORT = 9999 } = process.env;
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    path: '/',
    origins: '*:*'
});

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


app.use(express.static('./build'));
server.listen(PORT, () => {
    console.log(`Server is started on port №${PORT}`);
});