const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('/Users/france/WebDev/devmtn/Node/node-1-afternoon/public/build'))

const port = 3000;

const mc = require('/Users/france/WebDev/devmtn/Node/node-1-afternoon/server/controllers/messages_controller.js');

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
