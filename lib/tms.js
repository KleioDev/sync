var ms = require('../db/db');
var co = require('co');

//Get objects added in the last X days
function* getObjects(previousBackUp){
  var request = new ms.sql.Request(ms.connection);

  var objects = yield request.query("select * from RumArte.dbo.Objects where EnteredDate > CONVERT(DATETIME, '"+previousBackUp+"');");

  return objects;
}

//Get exhibitions added in the last X days
function* getExhibitions(previousBackUp){
  var request = new ms.sql.Request(ms.connection);

  var exhibitions = yield request.query("select * from RumArte.dbo.Exhibitions where EnteredDate > CONVERT(DATETIME, '"+previousBackUp+"');");

  return exhibitions;
}

module.exports = {
  getObjects : getObjects,
  getExhibitions : getExhibitions
}
