const connection = require('./packets/connection.js')
const disconnect = require('./packets/disconnect.js')
const whoami = require('./packets/whoami.js')

var packets;

exports.init = function init() {

    packets = new Map();

    packets.set(1, connection);

    packets.set(2, disconnect);

    packets.set(3, whoami)

    console.log('Packets initialized')

}

exports.get = function get(header, data, session) {
    return packets.get(header).execute(data, session);
}