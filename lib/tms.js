var ms = require('../db/db');
var co = require('co');


function *getObject(objectNumber){
    var request = new ms.sql.Request(ms.connection);

    var object = yield request.query("SELECT [ObjectID],[ObjectNumber] FROM [RumArte].[dbo].[Objects] WHERE [ObjectNumber] = '"+ objectNumber +"';");

    return object;
}

//Get objects added in the last X days
function* getObjects(previousBackUp){
  var request = new ms.sql.Request(ms.connection);

  var objects = yield request.query("select * from RumArte.dbo.Objects where EnteredDate > CONVERT(DATETIME, '"+previousBackUp+"');");

  return objects;
}

//Get all objects
function* getAllObjects(){
    var request = new ms.sql.Request(ms.connection);

    var objects = yield request.query("select * from RumArte.dbo.Objects;");

    return objects;
}

//Get exhibitions added in the last X days
function* getExhibitions(previousBackUp){
  var request = new ms.sql.Request(ms.connection);

  var exhibitions = yield request.query("select * from RumArte.dbo.Exhibitions where EnteredDate > CONVERT(DATETIME, '"+previousBackUp+"');");

  return exhibitions;
}

//Get all exhibitions
function* getAllExhibitions(){
    var request = new ms.sql.Request(ms.connection);

    var exhibitions = yield request.query("select * from RumArte.dbo.Exhibitions);");

    return exhibitions;
}



module.exports = {
  getObjects : getObjects,
  getExhibitions : getExhibitions,
  getAllObjects : getAllObjects,
  getAllExhibitions : getAllExhibitions,
  getObject : getObject
}
