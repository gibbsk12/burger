var connection = require("./connection")

var orm = {
  selectAll: function(callback){
      var query = "SELECT * FROM burgers" 
      connection.query(query, function(err, result){
          callback(result);
      })
  },
  insertOne: function(burgerObject,callback){
      var query = "INSERT INTO burgers (burger_name, devoured, routeName) VALUES (?,?,?)";
      burgerObject.eaten = 0;
      var routeName = burgerObject.burgerName.replace(/\s+/g, "").toLowerCase();
      connection.query(query,[burgerObject.burgerName, burgerObject.eaten, routeName], function(err, result){
          callback(result)
      })
  },
  updateOne: function(burgerObject, callback){
      var query = "UPDATE burgers SET devoured = true WHERE routeName = ?";
      connection.query(query, burgerObject.route, function(error, result){
          callback(result);
      })
  }
};

module.exports = orm;