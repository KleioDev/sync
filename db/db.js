var co = require('co'),
    sql = require('co-mssql'),
    sqlConfig = require('../config/config').msDevelopment;

var request, connection;

co(function *(){

    connection = new sql.Connection(sqlConfig);

    try {

        yield connection.connect();

        request = new sql.Request(connection);

    } catch (err) {
     console.log(err);
        throw(err);
    }
});

module.exports = {
  connection : connection,
  sql : sql
};
