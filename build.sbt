
name := """play-scala"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.11"

libraryDependencies += jdbc
libraryDependencies += cache
libraryDependencies += ws
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "2.0.0" % Test
// https://mvnrepository.com/artifact/org.webjars/bootstrap (honestly idk if im using this right now)
libraryDependencies += "org.webjars" % "bootstrap" % "3.2.0"
//add evolutions for relational database (relational database is supposed to track changes?)
libraryDependencies ++= Seq(evolutions, jdbc)
//h2 database for accessing a local db
libraryDependencies += "com.h2database" % "h2" % "1.4.192"

libraryDependencies += "com.typesafe.play" %% "play-json" % "2.3.4"
