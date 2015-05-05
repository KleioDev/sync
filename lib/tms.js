var co = require('co');


exports.getObject = co.wrap(function *getObject(ms, objectNumber){
    var request = new ms.sql.Request(ms.connection);

    return yield request.query("SELECT [ObjectID],[ObjectNumber] FROM [RumArte].[dbo].[Objects] WHERE [ObjectNumber] = '"+ objectNumber +"';");
});

//Get all objects
exports.getAllObjects = co.wrap(function* getAllObjects(ms){
    var request = new ms.sql.Request(ms.connection);

    return yield request.query("select * from RumArte.dbo.Objects where Title is not NULL and ObjectNumber is not null;");
});

////Get all exhibitions
//function* getAllExhibitions(){
//    var request = new ms.sql.Request(ms.connection);
//
//    var exhibitions = yield request.query("select * from RumArte.dbo.Exhibitions);");
//
//    return exhibitions;
//}
//
