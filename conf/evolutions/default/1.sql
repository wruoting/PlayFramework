#Users schema
# --- !Ups

CREATE TABLE Test (
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
  PRIMARY KEY (id)
);
# --- !Downs
# DROP TABLE Test;
