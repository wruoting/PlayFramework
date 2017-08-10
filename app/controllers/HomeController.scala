package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import play.libs._
import play.api.routing._
import play.api.db._
import models._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject() (db: Database)  extends Controller {


  def index = Action {
    Ok(views.html.index("Home Page")) //calling index method in views
  }
  def projects = Action {
    Ok(views.html.projects())
  }
  def javascriptRoutes() = Action { implicit request =>
    Ok (
        JavaScriptReverseRouter("jsRoutes")(
          routes.javascript.HomeController.getItem,
          routes.javascript.HomeController.newGame,
          routes.javascript.HomeController.updateItem,
          routes.javascript.HomeController.startGame,
          routes.javascript.HomeController.dealCard
        )
      ).as("text/javascript")
  }

  //from hands db
  def updateItem(playerID: Int, cardNumber: Int, updateState: Int) = Action {
      val QueryLogic = new QueryLogic
      val conn = db.getConnection()
      try {
          var stmt = conn.createStatement()
          val tableState = stmt.executeUpdate(QueryLogic.updateTable(playerID,cardNumber,updateState))
      }
      finally {
        conn.close()
      }
      Ok("Updated Item")
  }

  //from hands db
  def getItem(playerID: Int, cardNumber: Int) = Action {
    var cardState = ""
    val QueryLogic = new QueryLogic
    val conn = db.getConnection()
    try {
        var stmt = conn.createStatement()
        val tableState = stmt.executeQuery(QueryLogic.getTable(playerID,cardNumber))
        if(tableState.next()) {
          cardState = tableState.getString("CARD"+cardNumber)
        }
    }
    finally {
      conn.close()
    }
    Ok(cardState)
  }



  //from card list db
  def dealCard (index: Int) = Action {
    val QueryLogic = new QueryLogic
    val conn = db.getConnection()
    var Suit = ""
    var Card = ""
    try {
      val stmt = conn.createStatement()

      val tableState = stmt.executeQuery(QueryLogic.getCardFromStartingTable(index))
      if(tableState.next()) {
        Suit = tableState.getString("Suit")
        Card = tableState.getString("Card")
      }
    }
    finally {
      conn.close()
    }
    var SuitCard = Suit + " " + Card
    Ok(SuitCard)
  }


  def startGame(numberOfDecks: Int) = Action {
    val GameLogic = new ShengJiLogic
    val QueryLogic = new QueryLogic
    val cardList = GameLogic.createCardBase(numberOfDecks)
    val cardDistribute = GameLogic.distributeCards(cardList)
    val conn = db.getConnection()
    var numberOfEntries = ""

    try {
      val stmt = conn.createStatement()
      val tableState = stmt.executeQuery(QueryLogic.checkTableState("CardList"))
      if(tableState.next()) {
         numberOfEntries = tableState.getString(1)
      }
      if(numberOfEntries.toInt == 0) {
        for (i <- 0 to 107) {
          stmt.executeUpdate(QueryLogic.createStartingTable(i))
          stmt.executeUpdate(QueryLogic.updateStartingTable(cardDistribute(i),i))
        }
      }
      else {
        for (i <- 0 to 107) {
          stmt.executeUpdate(QueryLogic.updateStartingTable(cardDistribute(i),i))
        }
      }
    }
    finally {
      conn.close()
    }
    Ok("Game Started")
  }


  def newGame(id: Int) = Action {
    //Build the table
    var numberOfEntries = ""
    val QueryLogic = new QueryLogic
    val UpdateQueryDB_Create_Cards = new Array[String](4)
    for(i <- 0 to 3) {
      UpdateQueryDB_Create_Cards(i) = QueryLogic.buildDeck(i+1)
    }
      val conn = db.getConnection()
      try {
        val stmt = conn.createStatement()
        val tableState = stmt.executeQuery(QueryLogic.checkTableState("HANDS"))
        if(tableState.next()) {
           numberOfEntries = tableState.getString(1)
        }
        if(numberOfEntries.toInt == 0) {
          for(i <- 0 to 3) {
            stmt.executeUpdate(UpdateQueryDB_Create_Cards(i))
          }
        }
      } finally {
        conn.close()
      }
    Ok("New Deck Built")
  }

}
