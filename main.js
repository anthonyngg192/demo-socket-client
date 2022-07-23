const { io, Socket } = require('socket.io-client');

function connection() {
  socket = io('http://127.0.0.1:3001', {
    timeout: 2000,
    withCredentials: true,
  });

  socket.on('event', (data) => {
    console.log(data);
  });
}
connection();