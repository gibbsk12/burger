DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id Int AUTO_INCREMENT NOT NULL,
  routeName VARCHAR(255),
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

SELECT 
    *
FROM
    burgers