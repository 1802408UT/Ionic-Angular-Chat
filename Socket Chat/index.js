const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

on('connection', (socket) => {
    socket.on('disconnect', function() {
        emit('users-changed', { user: socket.username, event: 'left' });
    });
});


app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
    console.log('API Trabajando en Localhost:3000');
});


/*
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: true,
        Credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Authorization, Content-Length, X-Requested-With'
    }
});

io.on('connection', (socket) => {
    console.log('New user connected');
});

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

http.listen(3000, () => {
    console.log('listening on *:3000');

});*/