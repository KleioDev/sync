


//Get objects in the last 30 days
function *getObjects(request, previousBackUp){
  return yield request.query("select * from RumArte.dbo.Objects where EnteredDate > CONVERT(DATETIME, '"+previousBackUp+"');");

}
