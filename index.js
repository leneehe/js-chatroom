// Setup basic express server
var express = require('express');
var app = express();

var server = require('http').createServer(app);

app.use(express.static('public'));

var port = process.env.PORT || 3000;

var io = require('socket.io')(server);

io.on('connection', function(socket){
  socket.on('message', function(msg) {
    io.emit('message', msg)
  })
})

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

console.log('hello from the server')
