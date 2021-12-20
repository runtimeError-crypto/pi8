"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormHelpers =
/*#__PURE__*/
function () {
  function FormHelpers() {
    _classCallCheck(this, FormHelpers);
  }

  _createClass(FormHelpers, null, [{
    key: "handleFormChange",
    value: function handleFormChange(event, stateField) {
      var target = event.target;
      var field = target.name;
      var value = target.value;
      var state = this.state[stateField];
      state[field] = value;
      this.setState(_defineProperty({}, stateField, state));
    }
  }]);

  return FormHelpers;
}();

var _default = FormHelpers;
exports["default"] = _default;