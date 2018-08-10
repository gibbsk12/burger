USE burgers_db;

INSERT INTO burgers (burger_name, devoured, routeName)
VALUES ("Basic Burger", false,'basicburger');

INSERT INTO burgers (burger_name, devoured, routeName)
VALUES ("Turkey Burger", false, 'turkeyburger');

INSERT INTO burgers (burger_name, devoured,routeName)
VALUES ("Bacon Cheeseburger", false, 'baconcheeseburger');


SELECT * FROM burgers