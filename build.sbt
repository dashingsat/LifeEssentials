name := "LifeEssentials"

version := "1.0"

lazy val `lifeessentials` = (project in file(".")).enablePlugins(PlayScala,SbtWeb)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  jdbc , cache , ws   , specs2 % Test ,
  "org.webjars" %% "webjars-play" % "2.4.0-1",
  "org.webjars" % "bootstrap" % "3.1.1-2" ,
  "org.webjars" % "react" % "0.14.2"
)

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  