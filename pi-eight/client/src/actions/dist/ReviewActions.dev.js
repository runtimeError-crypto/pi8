"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dispatcher = _interopRequireDefault(require("../dispatcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reviewActions = {
  types: {
    CREATE_REVIEW: 'CREATE_REVIIEW',
    ALL_REVIEW: 'ALL_REVIEW',
    GET_ALL: 'GET_ALL'
  },
  create: function create(review, id) {
    _dispatcher["default"].dispatch({
      type: this.types.ADD - REVIEW,
      reivew: reivew,
      id: id
    });
  },
  getAll: function getAll(id) {
    page = page || _dispatcher["default"].dispatch({
      type: this.types.GET_ALL,
      id: id
    });
  }
};
var _default = reviewActions;
exports["default"] = _default;