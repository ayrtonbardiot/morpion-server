const WebSocket = require('ws');
const packets = require('./packets.js')
console.log('Morpion Server - notaryz')

const server = new WebSocket.Server({ address: '127.0.0.1', port: 8080 });

console.log('Server initialized on %s', server.address().address + ':' + server.address().port)

packets.init();

const debug = true;

var users = new Map();

server.on('connection', function connection(ws, req) {
    ws.id = req.headers['sec-websocket-key'];
    console.log('New connection from following IP : %s', req.socket.remoteAddress)
    ws.on('message', function incoming(message) {
        var received = message.split('|');
        packets.get(parseInt(received[0]), received[1], ws.id);
        if (debug)
            console.log('Message reçu : %s', message);
    });
    
});

exports.sendAll = function sendAll(data){
    server.clients.forEach(function each(client) {
        client.send(data);
       });
}

exports.send = function send(session, data){
    server.clients.forEach(function each(client) {
        if(client.id == session){
            client.send(data)
        }
    })
}

exports.server = server;