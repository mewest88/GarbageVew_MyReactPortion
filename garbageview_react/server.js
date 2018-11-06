const io = require('socket.io')();

var count = 0;

function gc() {
  var names = [
    'parallel',
    'serial',
    'g1', 
    'banana'
  ]
  name = names[Math.floor(Math.random() * 3) + 0]
  time = Math.floor(Math.random() * 200) + 1  
  count = count + 1; 
  var json = {gctype: name, gctime: time, id: count}
  return json
}

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', gc());
    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);