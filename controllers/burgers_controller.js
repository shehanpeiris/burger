var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use database functions.
var burger = require("../models/burger.js");

// Create all the app routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log("Testing handlebars object: ", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log("Testing req body: ", req.body.devoured);
  burger.create(["devoured"], [req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({result});
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var burgerID = req.params.id;
  console.log("Testing burger ID: ", burgerID);

  burger.update({devoured: req.body.devoured}, burgerID, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
