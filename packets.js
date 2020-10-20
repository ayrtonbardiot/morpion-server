const connection = require('./packets/connection.js')

var packets;

exports.init = function init() {

    packets = new Map();

    packets.set(1, connection);

    console.log('Packets initialized')

}

exports.get = function get(header, data) {
    return packets.get(header).execute(data);
}