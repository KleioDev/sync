var co = require('co'),
    misc = require('./misc');


exports.getObject = co.wrap(function *getObject(ms, objectNumber){
    var request = new ms.sql.Request(ms.connection);

    return yield request.query("SELECT [ObjectID],[ObjectNumber] FROM [RumArte].[dbo].[Objects] WHERE [ObjectNumber] = '"+ objectNumber +"';");
});

//Get all objects
exports.getAllObjects = co.wrap(function* getAllObjects(ms, lastUpdate){
    var request = new ms.sql.Request(ms.connection);

    if(!lastUpdate || lastUpdate.length < 1){
        return yield request.query("select * from RumArte.dbo.Objects where Title is not NULL and ObjectNumber is not null;");
    } else {
        var lastUpdateTime = misc.parseDate(lastUpdate);
        return yield request.query("select * from RumArte.dbo.Objects where EnteredDate > '" +lastUpdateTime+ "' and Title is not NULL and ObjectNumber is not null;");
    }

});

////Get all exhibitions
exports.getAllExhibitions = co.wrap(function* getAllExhibitions(ms, lastUpdate){
    var request = new ms.sql.Request(ms.connection);

    if(!lastUpdate || lastUpdate.length < 1){ //There has never been a migration
        return yield request.query("select * from RumArte.dbo.Exhibitions where ExhTitle is not NULL and ExhibitionID is not null;");
    } else {
        var lastUpdateTime = misc.parseDate(lastUpdate);
        return yield request.query("select * from RumArte.dbo.Exhibitions where EnteredDate > '" + lastUpdateTime + "' and ExhTitle is not NULL and ExhibitionID is not null;");
    }


});

//Get an exhibition based on ExhibitionID
exports.getExhibition = co.wrap(function * getExhibition(ms, ExhibitionID){
    var request = new ms.sql.Request(ms.connection);

    return yield request.query("select * from RumArte.dbo.Exhibitions where ExhibitionID = '"+ ExhibitionID +"';")
});

