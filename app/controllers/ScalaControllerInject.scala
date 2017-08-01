package controllers
import javax.inject.Inject

import play.api.Play.current
import play.api.mvc._
import play.api.db._

class ScalaControllerInject @Inject()(db: Database) extends Controller {

  def index = Action {
    var outString = "number is"
    val conn = db.getConnection()
    try {
      val stmt = conn.createStatement
      //val rs = stmt.executeQuery("UPDATE TEST SET CARD1 = 1 ")
      //stmt.executeUpdate("UPDATE TEST SET CARD1 = 1")
      val rs = stmt.executeQuery("SELECT CARD1 FROM TEST WHERE ID = 1")

    while (rs.next()) {
      outString += rs.getString(1)
    }
  } finally {
    conn.close()
  }
    Ok(outString)
  }
}
