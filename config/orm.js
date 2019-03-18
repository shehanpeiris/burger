// Require connection file to have access to MySQL database
var connection = require("./connection.js");

// Object Relational Mapper (ORM)
var orm = {
  selectAll: function(tableInput, cb) {
    // MySQL query to retrieve all data from burgers table
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log("Testing selectAll result", result);
      cb(result);
    });
  },
  insertOne: function(table, val, cb) {
    // MySQL query to add a new burger to the burgers table
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, false)";
    console.log(queryString);
    connection.query(queryString, [table, val], function(err, result) {
      if (err) throw err;
      console.log(result, "\n-------------------");
      cb(result);
    });
  },
  updateOne: function(table, isDevoured, id, cb) {
    // MySQL query to update the devoured boolean for an existing burger
    var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
    console.log(queryString);
    connection.query(
      queryString, [table, isDevoured, id], function(err, result) {
        if (err) throw err;
        console.log(result, "\n-------------------");
        cb(result);
      }
    );
  }
};

module.exports = orm;