const controller = require('./rooms');


module.exports = {
    connect: (client) => {
        // load to DB
        // emit events


        console.log('connect in room conrt');
    },
    answer: (client) => {
        client.on("answer", () => {
            // emit to all, write to db ...
        })
    },
    timer: () => {},
    nextQuestion: () => {},
    endTest: () => {},
    disconnect: () => {}

}