let messages = [];
let id = 0;

// [{id: 0 , text: "hello" , time: "12:00" }]
// req.body.text
// req.body.time

module.exports = {
    create: (req, res) => {
        messages.push({ id: id, text: req.body.text, time: req.body.time });
        console.log(messages)
        id++

        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages);
    },

    update: (req, res) => {
        const messageIndex = messages.findIndex(message => message.id == req.params.id);

        messages[messageIndex] = {
            id: messages[messageIndex].id,
            text: req.body.text || messages[messageIndex].text,
            time: messages[messageIndex].time
        };
        res.status(200).send(messages);
    },

    delete: (req, res) => {
        messageIndex = messages.findIndex(message => message.id == req.params.id);
        messages.splice(messageIndex, 1);

        res.status(200).send(messages);
    }

}