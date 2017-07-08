/**
 * Created by trangngo on 6/30/17.
 */

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/',function (req, res) {
    console.log("Manh")
    res.send('manh')
})

io.on('connection', function (socket) {
    console.log('co ket noi')
    socket.emit('news', { hello: 'world' });
    socket.on('username', function (data) {
        console.log(data);
    });
});

module.exports = server;