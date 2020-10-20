const connection = require('./connection.js')
const server = require('../index.js')
exports.execute = function execute(data, session) {
    
     console.log(connection.users.get(session));
}
