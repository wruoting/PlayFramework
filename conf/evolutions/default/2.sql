#Users schema
# --- !Ups

CREATE TABLE CardList (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  Suit int NOT NULL,
  Card int NOT NULL,
  PRIMARY KEY (id)
);
# --- !Downs
# DROP TABLE CardList;
