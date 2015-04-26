/**
 * Created by cesarcruz on 4/26/15.
 */
var thunkify = require('thunkify');
var excel = require('excel-stream');
var fs = require('fs');

//Read the xlx file
fs.createReadStream('/var/kleio/artifacts.xlsx')
    .pipe(excel()).on('data', function(stream){
        console.log(stream);
    });

