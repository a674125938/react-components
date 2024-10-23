"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _default = function (v) {
  (0, _newArrowCheck2.default)(this, _this);
  return typeof v === 'function';
}.bind(void 0);

exports.default = _default;