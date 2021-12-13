"use strict";

var jwt = require('jsonwebtoken');

var usersData = require('../data/users');

var PassportLocalStragegy = require('passport-local').Strategy;

module.exports = new PassportLocalStragegy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, function (req, email, password, done) {
  var user = {
    email: email.trim(),
    password: password.trim()
  };
  var savedUser = usersData.findByEmail(email);

  if (!savedUser) {
    var error = new Error('Incorrect email or password');
    error.name = 'IncorrectCredentialsError';
    return done(error);
  }

  var isMatch = savedUser.password === user.password;

  if (!isMatch) {
    var _error = new Error('Incorrect email or password');

    _error.name = 'IncorrectCredentialsError';
    return done(_error);
  }

  var payload = {
    sub: savedUser.id
  };
  var token = jwt.sign(payload, 'some random string');
  var data = {
    name: savedUser.name
  };
  return done(null, token, data);
});