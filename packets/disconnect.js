const connection = require('./connection.js')

exports.execute = function execute(data, session) {
    if (!connection.users.has(session)) {
        connection.users.delete(session);
        process.title = 'Morpion server - ' + connection.users.size + ' users online'
    }
}