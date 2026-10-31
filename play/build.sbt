name := "my-app"
version := "1.0"
scalaVersion := "3.3.6"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

libraryDependencies += guice
