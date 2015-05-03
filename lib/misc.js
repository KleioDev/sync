

/**
* Parameters: Integer with days
* Return: datestring = currentDay - days
**/
function getPastDate(days){
  var currDate = Date.now();

  var lastBackUpDate = new Date(currDate - (1000 * 60 * 60 * 24 * days));

  return lastBackUpDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
