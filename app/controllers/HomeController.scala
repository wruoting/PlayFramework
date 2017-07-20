package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import play.libs._
import play.api.routing._
import scala.collection.mutable.MutableList
import models.Query
import models.ShengJiLogic
/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject() extends Controller {

  // def test = Action {
  //   import play.api.db._
  //   val list = MutableList[Query]()
  //   DB.withConnection { conn =>
  //     val stm = conn.createStatement()
  //     val res = stm.executeQuery("""
  //     select
  //        character_set_name, description
  //     from
  //        character_sets
  //     order by
  //         character_set_name
  //     limit 10""")
  //     while (res.next()) {
  //       list.+=(Query(res.getString(1), res.getString(2)))
  //     }
  //   }
  //
  //   Ok(views.html.index(list))
  // }

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
    Ok(views.html.index("test"))
  }

  def getItem(id: Boolean) = Action {
    if(id == true) Ok("true")
    else Ok("false")
  }

  def startGame(numberOfDecks: Int) = Action {
    val GameLogic = new ShengJiLogic
    var cardList = GameLogic.createCardBase(numberOfDecks);
    Ok("true")
  }

  def newItem = Action {
    Ok(views.html.projects())
  }

}
