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

  /**
   * Create an Action to render an HTML page with a welcome message.
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index = Action {
    Ok(views.html.index("Your new application is ready...")) //calling index method in views
  }


  def projects = Action {
    Ok(views.html.projects())
  }

  //For routing javascript queries to back end
  def javascriptRoutes = Action { implicit request =>
    Ok(
        JavaScriptReverseRouter("jsRoutes")(
            routes.javascript.javascriptRoutes
        )
    ).as("text/javascript")
}


}
