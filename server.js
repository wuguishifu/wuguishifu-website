const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '1mb' }));
app.use(express.static('public'));

app.get('/', (_, res) => {
    res.sendFile('public/index.html');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});