"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var r,o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e){Object.prototype.hasOwnProperty.call(e,i)&&((r=n?Object.getOwnPropertyDescriptor(e,i):null)&&(r.get||r.set)?Object.defineProperty(o,i,r):o[i]=e[i])}return o.default=e,t&&t.set(e,o),o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var reportWebVitals=function(u){u&&u instanceof Function&&Promise.resolve().then(function(){return _interopRequireWildcard(require("web-vitals"))}).then(function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,n=e.getLCP,i=e.getTTFB;t(u),r(u),o(u),n(u),i(u)})},_default=reportWebVitals;exports.default=reportWebVitals;