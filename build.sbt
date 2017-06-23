name := """play-scala"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.11"

libraryDependencies += jdbc
libraryDependencies += cache
libraryDependencies += ws
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "2.0.0" % Test
// https://mvnrepository.com/artifact/org.webjars/bootstrap
libraryDependencies += "org.webjars" % "bootstrap" % "3.2.0"
// https://mvnrepository.com/artifact/com.googlecode.playn/playn-webgl
libraryDependencies += "com.googlecode.playn" % "playn-webgl" % "1.9"
