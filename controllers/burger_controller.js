var orm = require("../config/orm");

module.exports = function(app) {
    app.get(["/api/burgers", '/'], function(req, res) {
      orm.selectAll(function(results) {
          var burgers = {eaten: [], uneaten: []}
        for (i =0; i< results.length; i++){
            if (results[i].devoured == 0){
                burgers.uneaten.push(results[i])
            }else{
                burgers.eaten.push(results[i])
            }
        }
        res.render('index', {
            burgers: burgers
        });
      });
    });
    app.post("/api/burgers", function(req, res) {
      orm.insertOne(req.body, function(results) {
        res.json(req.body.burgerName.replace(/\s+/g, "").toLowerCase());
      });
    });
    app.put("/api/burgers", function(req, res) {
      orm.updateOne(req.body, function(results) {
        res.json(results);
      });
    });
  };
  