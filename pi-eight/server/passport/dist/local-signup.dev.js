"use strict";

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
  var existingUser = usersData.findByEmail(email);

  if (existingUser) {
    return done('E-mail already exists');
  }

  usersData.save(user);
  return done(null);
});