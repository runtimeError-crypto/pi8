"use strict";

var express = require("express");

var passport = require("passport");

var validator = require("validator");

var router = new express.Router();

function validateSignupform(payload) {
  var errors = {};
  var isFormValid = true;
  var message = "";

  if (!payload || typeof payload.email !== "string" || validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = "Please provide a correct email address";
  }

  if (!payload || typeof payload.password !== "string" || payload.password.trim().length < 4) {
    isFormValid = false;
    errors.password = "Password must have at least 4 characters.";
  }

  if (!payload || typeof payload.name !== "string" || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = "Please provide your name";
  }

  if (!isFormValid) {
    message = "Check the for for errors.";
  }

  return {
    success: isFormValid,
    message: message,
    errors: errors
  };

  function validateLoginForm(payload) {
    var errors = {};
    var isFormValid = true;
    var message = "";

    if (!payload || typeof payload.name !== "string" || payload.name.trim().length === 0) {
      isFormValid = false;
      errors.name = "Please provide your name";
    }
  }

  if (!payload || typeof payload.email !== "string" || payload.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = "Please provide a correct email address";
  }

  if (!payload || typeof payload.password !== "string" || payload.password.trim().length < 4) {
    isFormValid = false;
    errors.password = "Password must have at least 4 characters.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }

  return {
    success: isFormValid,
    message: message,
    errors: errors
  };
  router.post("/signup", function (req, res, next) {
    var validationResult = validateSignupForm(req.body);

    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validateionResult.message,
        errors: validatoinResult.errors
      });
    }
  });
  f;
}