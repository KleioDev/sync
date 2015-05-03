var co = require('co');
var sql = require('co-mssql'),
var sqlConfig = require('../config/config').development;

var request, connection;

co(function * () {
    connection = new sql.Connection(sqlConfig);

    try {

        yield connection.connect();

        request = new sql.Request(connection);

    } catch (err) {
        throw(err);
    }
});

module.exports = connection;
