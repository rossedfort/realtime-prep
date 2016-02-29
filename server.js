var express = require('express');
var app = express();
var http = require('http').Server(app);
const path = require('path');
var io = require('socket.io')(http);
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));

app.get('/', function(req, res){
  response.sendFile(path.join(__dirname, '/public/index.html'));
});

http.listen(app.get('port'), function(){
  console.log('listening on', app.get('port'));
});

io.on('connection', function(socket){
  console.log('a user connected', socket.id);
  socket.on('mouse', function(data) {
    socket.broadcast.emit('mouse', data);
  });

  socket.on('disconnect', function(){
    console.log('a user disconnected');
  });

});
