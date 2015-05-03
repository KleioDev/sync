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


        request = new sql.Request(connection);

        //Get the last back up date
        var lastBackUpDate = getPrevBackUpDate();

        result = getObjects();

        console.log(result.length);

    } catch (err) {
        throw(err);
    }
});

function getPrevBackUpDate(){
  var currDate = Date.now();

  var lastBackUpDate = new Date(currDate - (1000 * 60 * 60 * 24 * 30));

  return lastBackUpDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}

function getObjects(request, previousBackUp){
  return yield request.query("select * from RumArte.dbo.Objects where EnteredDate > CONVERT(DATETIME, '"+previousBackUp+"');");

}

function updateObjects(){


}
