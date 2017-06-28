@Singleton
class Application @Inject() extends Controller {

  @helper.javascriptRouter("jsRoutes")(
      routes.javascript.gameEngine
  )
}
