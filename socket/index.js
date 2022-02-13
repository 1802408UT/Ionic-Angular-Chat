const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: true,
        Credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
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
app.get('/', (req, res) => {
    res.send('<h1>Hello, This is a API of Chat</h1>');
});
var port = process.env.PORT || 3001;
server.listen(port, function() {
    console.log('listening in http://localhost:' + port);
});