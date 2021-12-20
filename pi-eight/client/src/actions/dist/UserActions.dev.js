"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dispatcher = _interopRequireDefault(require("../dispatcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userActions = {
  types: {
    REGISTER_USER: 'REGISTER_USER',
    LOGIN_USER: 'LOGIN_USER',
    register: function register(user) {
      _dispatcher["default"].dispatch({
        type: this.types.REGISTER_USER,
        user: user
      });
    },
    login: function login(user) {
      _dispatcher["default"].dispatch({
        type: this.types.LOGIN_USER,
        user: user
      });
    },
    details: function details(id) {
      _dispatcher["default"].dispatch({
        type: this.types.DETAILS,
        id: id
      });
    }
  }
};
var _default = userActions;
exports["default"] = _default;