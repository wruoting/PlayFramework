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
    var cardList = createCardBase(numberOfDecks);
    Ok("true")
  }

  def newItem = Action {
    Ok(views.html.projects())
  }

  /***
  Parameters: Number of Decks
  Return: Array with one value for each card
  Use: Creates an Empty CardBase
  ***/
  def createCardBase(numberOfDecks:Int) : Array[Array[Int]] = {
    val placeholderNumberOfDecks=numberOfDecks
    var cardList=Array.ofDim[Int](4,27)
          for(i <- 0 to 3) {
            for(j <-0 to 26) {
                cardList(i)(j)=0
            }
          }
    return cardList
  }

  /***
  Use: To distribute cards randomly at the beginning of each cycle
  Parameters: Default mapping of Cards, Card Base,Trump suit, SuitHolder
  Return: Array with one value for each card
  This function serves as a way of giving each player a randomly preset hand. Iterating through the array will allow you time to do trump suit shows, etc.
  ***/
  //   def distributeCards(cardBase: Array[Array[Int]],trumpCard: Int,trumpSuit: Int): Array[Array[Int]]= {
  //     //Create an array with each person getting a card
  //     //Shuffle that card base
  //     val seedNumber = 107
  //     val randomCards = scala.util.Random.shuffle((0 to seedNumber).toList)
  //     //Determine which deck, suit, and card each entry of the random card is, and seed with 1-4 to deal to the player
  //     //Set a player count and give it to a player on each iteration of the random card generator
  //     var playerCount = -1
  //     for(i <- 0 to randomCards.length-1) {
  //       playerCount += 1
  //       var innerCardIndex=randomCards(i)
  //       var (suitNumber,cardNumber)=(0,0)
  //         //Find which suit it's in
  //         if(innerCardIndex>=27) {
  //           suitNumber=(innerCardIndex-innerCardIndex%27)/27
  //           innerCardIndex=innerCardIndex%27
  //         }
  //         //Find out what card it is
  //         cardNumber=innerCardIndex
  //
  //       //Now you have the random card index, in which you can give to player 1, 2, 3 or 4
  //       //Redefine which of the 4 players it should go to
  //       val realPlayerCount=playerCount%4
  //       cardBase(suitNumber)(cardNumber) = GlobalMappings.cardState(GlobalMappings.playerCardState(realPlayerCount))
  //       //Set as trump card for player if necessary
  //       if ((cardNumber==trumpCard || (cardNumber%13)==trumpCard) && cardNumber != 26) {
  //         cardBase(suitNumber)(cardNumber) = -GlobalMappings.cardState(GlobalMappings.playerCardState(realPlayerCount))
  //       }
  //     return cardBase
  // }

}
