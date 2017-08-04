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
    Ok(views.html.index("Your new application is ready...")) //calling index method in views
  }
  def javascriptRoutes() = Action { implicit request =>
    Ok (
        JavaScriptReverseRouter("jsRoutes")(
          routes.javascript.HomeController.getItem,
          routes.javascript.HomeController.newItem,
          routes.javascript.HomeController.updateItem,
          routes.javascript.HomeController.startGame
        )
      ).as("text/javascript")
  }
  def projects = Action {
    Ok(views.html.projects())
  }
  def updateItem(id: Boolean) = Action {

      Ok(views.html.projects())
  }

  def getItem(id: Boolean) = Action {
    if(id == true) Ok("true")
    else Ok("false")
  }

  def startGame(numberOfDecks: Int) = Action {
    val GameLogic = new ShengJiLogic
    var cardList = GameLogic.createCardBase(numberOfDecks)
    Ok("true")
  }

  def newItem(id: Integer) = Action {
    //Build the table
    val QueryLogic = new QueryLogic
    val buildQuery = QueryLogic.buildQuery();
      val conn = db.getConnection()
      try {
        val stmt = conn.createStatement
        stmt.executeUpdate(buildQuery)

    } finally {
      conn.close()
    }
    Ok("created CardBase")
  }

}
