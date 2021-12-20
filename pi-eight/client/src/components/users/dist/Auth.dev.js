"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, null, [{
    key: "saveUser",
    value: function saveUser(user) {
      window.localStorage.setItem('user', JSON.stringify(user));
    }
  }, {
    key: "getUser",
    value: function getUser() {
      var userJSON = window.localStorage.getItem('user');

      if (userJSON) {
        return JSON.parse(userJSON);
      }

      return {};
    }
  }, {
    key: "removeUser",
    value: function removeUser() {
      window.localStorage.removeListener('user ');
    }
  }, {
    key: "authenticateUser",
    value: function authenticateUser(token) {
      window.localStorage.setItem('token', token);
    }
  }, {
    key: "isUserAthenticated",
    value: function isUserAthenticated() {
      return window.localStorage.removeItem('token');
    }
  }, {
    key: "deauthenticateUser",
    value: function deauthenticateUser() {
      window.localStorage.removeItem('token');
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return window.localStorage.getItem('token ');
    }
  }]);

  return Auth;
}();

var _default = Auth;
exports["default"] = _default;