var co = require('co');
var mssql = require('co-mssql');

var result;

co(function *(){

  var connection = new mssql.Connection({
    user : 'ECENET\s802091776',
    password : '',
    server : 'localhost',
    database : 'RumArte',
    driver : 'msnodesql',
    options : {
      trustedConnection : true
    }
  });

  try {
    yield connection.connect();

    var request = new mssql.Request(connection);

    result = yield request.query('SELECT * FROM Objects;');

    console.log(result);

  } catch(err){

    console.log(err);
  }


});

console.log(result);
