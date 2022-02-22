const app = require('express')();
//const cors = require('cors');
//const morgan = require('morgan');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH, CONNECT, TRACE, UPDATE',
        allowedHeader: 'Content-Type, Authorization, Content-Length, X-Requested-With',
        credentials: true,
        maxAge: '3600'
    }
});

io.on('connection', (socket) => {

    socket.on('disconnect', function() {
        io.emit('users-changed', { user: socket.username, event: 'left' });
    });
    socket.on('set-name', (name) => {
        socket.username = name;
        io.emit('users-changed', { user: name, event: 'joined' });
    });

    socket.on('send-message', (message) => {
        io.emit('message', { msg: message.text, user: socket.username, createdAt: new Date() });
    });
});


//app.use(helmet());

var port = process.env.PORT || 3001;
server.listen(port, function() {
    console.log('listening in http://localhost:' + port);
});