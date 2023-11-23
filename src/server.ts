import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '1mb' }));

app.get('/ping', async (req, res) => {
    res.send({
        message: 'pong',
        time: new Date().toLocaleString()
    })
});