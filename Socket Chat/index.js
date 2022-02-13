const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: true,
        Credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
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

});