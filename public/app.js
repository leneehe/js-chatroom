// You will be adding some Javascript code below
// alert('Hello world');
var socket= io();

$('form').on('submit', function () {
  var text = $('#message').val();
  var username=$('#username').val();
  var message = username + ': ' + text
  socket.emit('message', message);
  $('#message').val('');
  $('#username').val('');

  return false //disables default html
})

socket.on('message', function(msg){
  $('<li>').text(msg).appendTo('#history');
})
