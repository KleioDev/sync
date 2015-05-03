var co = require('co');
var sql = require('co-mssql');

var request, connection;

co(function * () {
    connection = new sql.Connection({
        user: 'kleio',
        password: 'kleioDev15',
        server: 'CAPSWS12',
        database: 'RumArte',
        options : {
          instanceName : 'RUMARTE2'
        }
    });

    try {

        yield connection.connect();

        // Query

        request = new sql.Request(connection);

    } catch (err) {
        throw(err);
    }
});


module.exports = {
  request : new sql.Request(connection),
  connection : connection
}
