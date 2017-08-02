#Users schema
# --- !Ups

CREATE TABLE Hands (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  Card1 int NOT NULL,
  Card2 int NOT NULL,
  Card3 int NOT NULL,
  Card4 int NOT NULL,
  Card5 int NOT NULL,
  Card6 int NOT NULL,
  Card7 int NOT NULL,
  Card8 int NOT NULL,
  Card9 int NOT NULL,
  Card10 int NOT NULL,
  Card11 int NOT NULL,
  Card12 int NOT NULL,
  Card13 int NOT NULL,
  Card14 int NOT NULL,
  Card15 int NOT NULL,
  Card16 int NOT NULL,
  Card17 int NOT NULL,
  Card18 int NOT NULL,
  Card19 int NOT NULL,
  Card20 int NOT NULL,
  Card21 int NOT NULL,
  Card22 int NOT NULL,
  Card23 int NOT NULL,
  Card24 int NOT NULL,
  Card25 int NOT NULL,
  Card26 int NOT NULL,
  PRIMARY KEY (id)
);
# --- !Downs
# DROP TABLE Hands;
