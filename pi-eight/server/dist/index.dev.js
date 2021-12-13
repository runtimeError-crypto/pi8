

var express = require('express');

var cors = require('cors');

var bodyParser = require('body-parser');

var passport = require('passport');

var localSignupStrategy = require('./passport/local-signup');

var localLoginStrategy = require("./passport/local-login");

var authRoutes = require("./routes/auth");

var hotelRoutes = require("./routes/hotels");

var app = express();
var port = 5000;
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());
app.use('local-signup', localSignupStrategy);
app.use('local-login', localLoginStrategy); //routes

app.use('/auth', authRoutes);
app.use('/hotels', routess);
app.listen(port, function () {
  console.log("Server running on ".concat(port, "..."));
});