package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import play.libs._
import play.api.routing._
/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject() extends Controller {

  def index = Action {
    Ok(views.html.index("Your new application is ready...")) //calling index method in views
  }

  def test = Action {
    Ok(views.html.home())
  }
  def javascriptRoutes() = Action { implicit request =>
    Ok (
        JavaScriptReverseRouter("jsRoutes")(
          routes.javascript.HomeController.getItem,
          routes.javascript.HomeController.newItem,
          routes.javascript.HomeController.updateItem
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

  def newItem = Action {
    Ok(views.html.projects())
  }

}
