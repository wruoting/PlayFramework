
package models
import play.api.Logger

class QueryLogic {
  /***
  Parameters: N/A
  Return: Array with one value for each card
  Use: Creates an Empty CardBase
  ***/
  def buildDeck(playerNumber: Int) : String = {
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
        buildQuery += playerNumber+","
      }
      else if (j==27){
        buildQuery += "0)"
      }
    }
    return buildQuery
  }

  def checkTableState() : String = {
    var buildQuery = "SELECT COUNT(ID) FROM HANDS"
      return buildQuery
  }

  def getTable(playerID: Int, cardNumber: Int) : String = {
    var buildQuery = "SELECT CARD"+
                      cardNumber + " FROM HANDS WHERE ID = " +
                      playerID
    return buildQuery
  }

  def updateTable(playerID: Int, cardNumber: Int, updateState: Int) : String = {
    var buildQuery = "UPDATE HANDS SET CARD"+
                      cardNumber + " = " +
                      updateState + " WHERE ID = " +
                      playerID
      return buildQuery
  }


}
