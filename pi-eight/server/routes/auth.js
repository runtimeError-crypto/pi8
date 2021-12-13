const express = require("express");
const passport = require("passport");
const validator = require("validator");

const router = new express.Router();

function validateSignupform(payload) {
  const errors = {};
  let isFormValid = true;
  let message = "";

  if (
    !payload ||
    typeof payload.email !== "string" ||
    validator.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = "Please provide a correct email address";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length < 4
  ) {
    isFormValid = false;
    errors.password = "Password must have at least 4 characters.";
  }

  if (
    !payload ||
    typeof payload.name !== "string" ||
    payload.name.trim().length === 0
  ) {
    isFormValid = false;
    errors.name = "Please provide your name";
  }

  if (!isFormValid) {
    message = "Check the for for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors,
  };

  function validateLoginForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = "";

    if (
      !payload ||
      typeof payload.name !== "string" ||
      payload.name.trim().length === 0
    ) {
      isFormValid = false;
      errors.name = "Please provide your name";
    }
  }
  if (
    !payload ||
    typeof payload.email !== "string" ||
    payload.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = "Please provide a correct email address";
  }
  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length < 4
  ) {
    isFormValid = false;
    errors.password = "Password must have at least 4 characters.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }
  return {
    success: isFormValid,
    message,
    errors,
  };

  router.post("/signup", (req, res, next) => {
    const validationResult = validateSignupForm(req.body);
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validateionResult.message,
        errors: validatoinResult.errors,
      });
    }
  });

  f;
}
