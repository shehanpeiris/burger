// Require connection file to have access to MySQL database
var connection = require("./connection.js");

// Object Relational Mapper (ORM)
var orm = {
  selectAll: function() {
    // MySQL query to retrieve all data from burgers table
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result, "\n-------------------");
    });
  },
  insertOne: function(burgerName) {
    // MySQL query to add a new burger to the burgers table
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
    console.log(queryString);
    connection.query(queryString, [burgerName], function(err, result) {
      if (err) throw err;
      console.log(result, "\n-------------------");
    });
  },
  updateOne: function(isDevoured, burgerName) {
    // MySQL query to update the devoured boolean for an existing burger
    var queryString = "UPDATE burgers SET devoured = ? where burger_name = ?";
    console.log(queryString);
    connection.query(
      queryString, [isDevoured, burgerName], function(err, result) {
        if (err) throw err;
        console.log(result, "\n-------------------");
      }
    );
  }
};

module.exports = orm;