module.exports = {
    connect: (client) => {
        // load to DB
        // emit events
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