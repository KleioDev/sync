

/**
* Parameters: Integer with days
* Return: datestring = currentDay - days
**/
function parseDate(lastBackUpDate){

    console.log(lastBackUpDate);

    var date = new Date(lastBackUpDate);

    return date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}

module.exports = {
  parseDate : parseDate
}
