const express = require('express');
const http = require('http');
const app = express();
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // GLOBAL JSON

const api = require('./routes/index');
app.use('/api', api);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`CONNECTED TO ${process.env.DB_CONNECTION}`)
})

let interval;
io.on('connection', socket => {
    console.log('CONNECTION');

    socket.emit("message", "Welcum to the Chat-Box");

    socket.broadcast.emit('message', 'A user has joined the chat');
    if (interval) {
        clearInterval(interval);
    };

    interval = setInterval(() => getApiAndEmit(socket), 1000);

    socket.on('chatMessage', (data) => {
        io.emit('message', data)
    });

    socket.on('disconnect', () => {
        console.log("Client disconnected");
        clearInterval(interval);
        io.emit('message', 'A user has left the chat')
    })
})

const getApiAndEmit = socket => {
    const response = new Date();
    socket.emit("time", response)
};

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))