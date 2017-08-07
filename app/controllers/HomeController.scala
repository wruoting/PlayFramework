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
          routes.javascript.HomeController.startGame
        )
      ).as("text/javascript")
  }

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

  def startGame(numberOfDecks: Int) = Action {
    val GameLogic = new ShengJiLogic
    var cardList = GameLogic.createCardBase(numberOfDecks)
    var cardDistribute = GameLogic.distributeCards(cardList)
    GameLogic.showCards(cardDistribute)
    // for(i <- 0 to 25) {
    //   for(j<- 0 to 3) {
    //     cardList(i)(j)
    //   }
    // }
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
        val tableState = stmt.executeQuery(QueryLogic.checkTableState())
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
