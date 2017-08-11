package models

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

  def checkTableState(table: String) : String = {
    var buildQuery = "SELECT COUNT(*) FROM " + table
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

  def updateStartingTable(cardDistribute: (Int,Int), count: Int) : String = {
    var realCount = count + 1
    var buildQuery = "UPDATE CardList SET" +
                      " SUIT = " + cardDistribute._1 +
                      ", CARD = " + cardDistribute._2 +
                      "WHERE ID = " + realCount
    return buildQuery
  }

  def createStartingTable(count: Int) : String = {
    var realCount = count + 1
    var buildQuery = "INSERT INTO CardList (ID, SUIT, CARD) VALUES ("+
                      realCount + ", 0 , 0 );"
    return buildQuery
  }

  def getCardFromStartingTable(index: Int): String = {
    var buildQuery = "SELECT * FROM CardList WHERE ID = " + index
    return buildQuery
  }

}
