var co = require('co'),
    sql = require('co-mssql'),
    sqlConfig = require('../config/config').msDevelopment;

module.exports = function (){

    return co(function *(){

        var connection = new sql.Connection(sqlConfig);

        try {

            yield connection.connect();

        } catch (err) {

            console.log(err);
            throw(err);
        }

        return {
            connection : connection,
            sql : sql
        };

    }).catch(function(err){
        console.error(err);
    });

};
