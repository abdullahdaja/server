const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send a message to the client
  ws.send('Hello from server!');

  // When receiving a message from the client
  ws.on('message', (message) => {
    console.log('Received: %s', message);
  });

  // Handle connection close
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on port 3000');
