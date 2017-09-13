package models
import play.api.Logger
class ShengJiLogic {
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
  def distributeCards(cardBase: Array[Array[Int]]): Array[(Int,Int)]= {
    //Create an array with each person getting a card
    //Shuffle that card base
    val seedNumber = 107
    val randomCards = scala.util.Random.shuffle((0 to seedNumber).toList)
    var randomCardList = new Array[(Int,Int)](108)
    //Determine which deck, suit, and card each entry of the random card is, and seed with 1-4 to deal to the player
    //Set a player count and give it to a player on each iteration of the random card generator
    var playerCount = -1

    for(i <- 0 to randomCards.length-1) {
      playerCount += 1
      var innerCardIndex=randomCards(i)
      var (suitNumber,cardNumber)=(0,0)
        //Find which suit it's in
        if(innerCardIndex>=27) {
          suitNumber=(innerCardIndex-innerCardIndex%27)/27
          innerCardIndex=innerCardIndex%27
        }
        //Find out what card it is
        cardNumber=innerCardIndex

      randomCardList(i) = (suitNumber,cardNumber)
    }
    //type Array[(Int, Int)]
    //Suit ranges from 0 to 3 (Spades, Hearts, Diamonds, Clubs)
    //card ranges from 0 to 26 (2 to Ace then 2 to Ace again then 4 jokers)
      return randomCardList
}




  def showCards(cardBase: Array[(Int,Int)]) {

    for(i <- 0 to 107) {
      print(cardBase(i)._1+" "+cardBase(i)._2)
      println()
    }

  }

}

/*
███╗   ███╗ █████╗ ██████╗ ██████╗ ██╗███╗   ██╗ ██████╗
████╗ ████║██╔══██╗██╔══██╗██╔══██╗██║████╗  ██║██╔════╝
██╔████╔██║███████║██████╔╝██████╔╝██║██╔██╗ ██║██║  ███╗
██║╚██╔╝██║██╔══██║██╔═══╝ ██╔═══╝ ██║██║╚██╗██║██║   ██║
██║ ╚═╝ ██║██║  ██║██║     ██║     ██║██║ ╚████║╚██████╔╝
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝     ╚═╝╚═╝  ╚═══╝ ╚═════╝

*/
  object GlobalMappings{
    //Create mapping

    val cardState=Map(
      "InDeck" -> 0,
      "FaceDown" -> 1,
      "PlayedCards" -> 2,
      "P1Hand" -> 4,
      "P2Hand" -> 5,
      "P3Hand" -> 6,
      "P4Hand" -> 7,
      "P1Start" -> 8,
      "P2Start" -> 10,
      "P3Start" -> 12,
      "P4Start" -> 14,
      "P1OnBoard" -> 16,
      "P2OnBoard" -> 20,
      "P3OnBoard" -> 24,
      "P4OnBoard" -> 28,
      "P1TrumpSingle" -> -4,
      "P2TrumpSingle" -> -5,
      "P3TrumpSingle" -> -6,
      "P4TrumpSingle" -> -7,
      "P1TrumpDouble" -> -8,
      "P2TrumpDouble" -> -10,
      "P3TrumpDouble" -> -12,
      "P4TrumpDouble" -> -14
    )
    //Card mapping
    val valToCard=Map (
      0 -> 2,
      1 -> 3,
      2 -> 4,
      3 -> 5,
      4 -> 6,
      5 -> 7,
      6 -> 8,
      7 -> 9,
      8 -> 10,
      9 -> "J",
      10 -> "Q",
      11 -> "K",
      12 -> "A",
      13 -> "Black Joker",
      14 -> "Red Joker"
    )
    //Suit mapping
    val suitToCard=Map (
      0-> "Clubs",
      1-> "Spades",
      2-> "Hearts",
      3-> "Diamonds"
    )
    //Player to Hand mapping
    //Given player X we give them a mapping to use for cardState
    def playerCardState(playerState: Int): String = playerState match {
      case 0 => "P1Hand"
      case 1 => "P2Hand"
      case 2 => "P3Hand"
      case 3 => "P4Hand"
    }
  }
