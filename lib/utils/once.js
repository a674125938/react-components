"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

var once = function once(func) {
  (0, _newArrowCheck2.default)(this, _this);
  var result;
  var done = false;
  return function () {
    if (!done) {
      done = true;
      result = func.apply(void 0, arguments);
    }

    return result;
  };
}.bind(void 0);

var _default = once;
exports.default = _default;