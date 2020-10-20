const WebSocket = require('ws');
const packets = require('./packets.js')
console.log('Morpion Server - notaryz')

const server = new WebSocket.Server({ address: '127.0.0.1', port: 8080 });

console.log('Server initialized on %s', server.address().address + ':' + server.address().port)

packets.init();

const debug = true;

var users = new Map();

server.on('connection', function connection(ws, req) {
    console.log('New connection from following IP : %s', req.socket.remoteAddress)
    ws.on('message', function incoming(message) {
        var received = message.split('|');
        if (debug) {
            console.log('Message reçu : %s', message);
            console.log(packets.get(parseInt(received[0]), received[1]));
        }
    });
});