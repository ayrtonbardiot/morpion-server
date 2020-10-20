const server = require('../index.js');

var users = new Map();

exports.execute = function execute(data, session) {

    users.set(session, data);
    process.title = 'Morpion server - ' + users.size + ' users online'

}

exports.users = users;