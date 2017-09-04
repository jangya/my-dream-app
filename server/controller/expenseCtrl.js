var passport = require('passport');
var mongoose = require('mongoose');
var Expense = require('./../model/expense');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.create = function(req, res) {
  // req.body = JSON.parse(req.body.toString());
  console.log(req.body);
  if(!req.body.name || !req.body.userId) {
    sendJSONresponse(res, 400, {
      "message": "Name is required"
    });
    return;
  }

  var expense = new Expense();

  expense.name = req.body.name;
  expense.sharing = req.body.sharing;
  expense._userId = req.body.userId;

  expense.save(function(err) {
    if (err) throw err;
    res.status(200);
    res.json({
      "message" : "Succesfully created"
    });
  });

};
module.exports.getExpense = function(req, res) {
    if (!req.params.userId) {
      res.status(401).json({
        "message" : "UnauthorizedError: private profile"
      });
    } else {
      Expense
        .find({_userId:req.params.userId})
        .exec(function(err, expense) {
          res.status(200).json(expense);
        });
    }
  };
module.exports.allExpenses = function(req, res) {
  Expense.find()
    .then(function(doc){
      res.send(doc);
    });
};
