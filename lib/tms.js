var ms = require('../db/db');
var co = require('co');


function *getObject(objectNumber){
    var request = new ms.sql.Request(ms.connection);

    var object = request.query("SELECT [ObjectID],[ObjectNumber] FROM [RumArte].[dbo].[Objects] WHERE [ObjectNumber] = '"+ objectNumber +"';");

    return object;
}

//Get all objects
function* getAllObjects(){
    var request = new ms.sql.Request(ms.connection);

    var objects = request.query("select * from RumArte.dbo.Objects where Title is not NULL and ObjectNumber is not null;");

    return objects;
}

//Get all exhibitions
function* getAllExhibitions(){
    var request = new ms.sql.Request(ms.connection);

    var exhibitions = yield request.query("select * from RumArte.dbo.Exhibitions);");

    return exhibitions;
}



module.exports = {
  getAllObjects : getAllObjects,
  getAllExhibitions : getAllExhibitions,
  getObject : getObject
}
