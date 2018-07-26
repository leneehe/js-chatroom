// You will be adding some Javascript code below
// alert('Hello world');
var socket= io();

$('form').on('click', function () {
  var text = $('#message').val();
  socket.emit('message', text);
  $('#message').val('');
  return false //disables default html
})

socket.on('message', function(msg){
  $('<li>').text(msg).appendTo('#history');
})
