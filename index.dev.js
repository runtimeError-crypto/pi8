


import express from 'express'

import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';




var app = express();
var port = 5000;
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());
app.use('localSignupStrategy');
app.use('localLoginStrategy')


app.listen(port, function () {
  return console.log(`Server running on ${port}...`)
})