// Import ORM object
var orm = require("../config/orm.js");


var burger = {
  all: function(cb) {
      orm.selectAll("burgers", function(res) {
      cb(res);
      });
  },
  // The variables cols and vals are arrays.
  create: function(val, cb) {
      orm.insertOne("burgers", val, function(res) {
      cb(res);
      });
  },
  update: function(isDevoured, burgerName, cb) {
      orm.updateOne("burgers", isDevoured, burgerName, function(res) {
      cb(res);
      });
  }
};
  
// Export the database functions for the controller (catsController.js).
module.exports = burger;