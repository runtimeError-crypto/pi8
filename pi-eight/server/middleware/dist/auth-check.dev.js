"use strict";

var jwt = require(jsonwebtoken);

var userData = require('../data/users');

module.exports = function (req, res, next) {
  if (!req.headers.autorization) {
    return res.status(401).end();
  }

  var token = req.headers.authorizaion.split('')[1];
  return jwt.verify(token, 's0me random string', function (err, decoded) {
    if (err) {
      return res.status(401).end();
    }

    var userId = decoded.sub;
    var user = userData.findById(userId);

    if (!user) {
      return res.status(401).end();
    }

    req.user = user;
    return next();
  });
};