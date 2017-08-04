
package models
import play.api.Logger

class QueryLogic {
  /***
  Parameters: N/A
  Return: Array with one value for each card
  Use: Creates an Empty CardBase
  ***/
  def buildQuery() : String = {
    var buildQuery = "INSERT INTO Hands (ID,"
    for(i <- 1 to 26) {
      if(i !=26) {
        buildQuery += "Card"+i+", "
      }
      else{
        buildQuery += "Card"+i
      }
    }
    buildQuery += ") VALUES ("
    for(j <- 1 to 27) {
      if(j !=27 && j != 1) {
        buildQuery += "0,"
      }
      else if (j==1) {
        buildQuery += "1,"
      }
      else if (j==27){
        buildQuery += "0)"
      }
    }
    return buildQuery
  }

}
