var connection = require("./connection")

var tableName = "burgers";

var orm = {
  selectAll: function(callback){
      var query = "SELECT * FROM " + tableName;
      connection.query(query, function(err, result){
          callback(result);
      })
  },

}