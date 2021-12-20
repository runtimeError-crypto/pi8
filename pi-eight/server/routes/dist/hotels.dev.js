
var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _validator = _interopRequireDefault(require("validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

function validateSignupForm(payload) {
  var errors = {};
  var isFormValid = true;
  var message = "";

  if (!payload || typeof payload.email !== "string" || !_validator["default"].isEmail(payload.email)) {
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
}

function validateLoginForm(payload) {
  var errors = {};
  var isFormValid = true;
  var message = "";

  if (!payload || typeof payload.email !== "string" || payload.email.trim().length === 0) {
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
}

router.post("/signup", function (req, res, next) {
  var validationResult = validateSignupForm(req.body);

  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  return _passport["default"].authenticate('local-signup', function (err) {
    if (err) {
      return res.status(200).json({
        success: false,
        message: 'Could not process the form'
      });
    }

    return res.status(200).json({
      success: true,
      message: "You have signed up!  Please log in"
    });
  })(req, res, next);
});
router.post("/login", function (req, res, next) {
  var validationResult = validateLoginForm(req.body);

  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  return _passport["default"].authenticate('local-login', function (err, token, userData) {
    if (err) {
      return res.status(200).json({
        success: false,
        message: 'Could not process the form'
      });
    }

    return res.json({
      success: true,
      message: 'You have successfully logged in',
      token: token,
      user: userData
    });
  })(req, res, next);
});
module.exports = router;