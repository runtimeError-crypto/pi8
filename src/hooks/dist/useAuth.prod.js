"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}
var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap;
    return _getRequireWildcardCache = function () {
        return e
    }, e
}

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    if (null === e || "object" !== _typeof(e) && "function" != typeof e) return {
        default: e
    };
    var t = _getRequireWildcardCache();
    if (t && t.has(e)) return t.get(e);
    var r, o = {},
        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e) {
        Object.prototype.hasOwnProperty.call(e, i) && ((r = n ? Object.getOwnPropertyDescriptor(e, i) : null) && (r.get || r.set) ? Object.defineProperty(o, i, r) : o[i] = e[i])
    }
    return o.default = e, t && t.set(e, o), o
}