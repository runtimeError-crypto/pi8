"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dispatcher = _interopRequireDefault(require("../dispatcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hotelActions = {
  types: {
    CREATE_HOTEL: 'CREATE_HOTEL',
    ALL_HOTELS: 'ALL_HOTELS',
    DETAILS: 'DETAILS'
  },
  create: function create(hotel) {
    _dispatcher["default"].dispatcher({
      type: this.types.CREATE_HOTEL,
      hotel: hotel
    });
  },
  all: function all(page) {
    page = page || _dispatcher["default"].dispatch({
      type: this.types.ALL_HOTELS,
      page: page
    });
  },
  details: function details(id) {
    _dispatcher["default"].dispatch({
      type: this.types.DETAILS,
      id: id
    });
  }
};
var _default = hotelActions;
exports["default"] = _default;