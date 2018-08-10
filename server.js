var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars')
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars")

app.use(express.static("./public"));

require("./controllers/burger_controller")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
