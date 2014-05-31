'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.email = function(req, res) {
    console.log('*** Retrieving emails');

    return res.json([{
            "body":["<strong>Whats UP!</strong>,","Yes this is the body "],
            "from":["Mike@23.nba"],
            "to":["test@test.com","new@test.com"],
            "subject":"My first email",
            "date":"2014-05-28"
    },{
        "body":["Hello Shawn,","Yes this is the second body "],
        "from":["kobe@24.nba"],
        "to":["test@test.com"],
        "subject":"My Second email",
        "date":"2014-05-29"
    }]);
};
