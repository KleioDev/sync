var ms = require('../db/db');
var co = require('co');

//Get objects in the last 30 days
function getObjects(previousBackUp){
  var request = new ms.sql.Request(ms.connection);

  var objects;

  console.log('here');

  var result = co(function* (){
    objects = yield request.query("select * from RumArte.dbo.Objects where EnteredDate > CONVERT(DATETIME, '"+previousBackUp+"');");
    return objects;
  });

  return result;
}

module.exports = {
  getObjects : getObjects
}
