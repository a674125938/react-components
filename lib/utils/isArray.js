"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

var _default = function (v) {
  (0, _newArrowCheck2.default)(this, _this);
  return Object.prototype.toString.apply(v) === '[object Array]';
}.bind(void 0);

exports.default = _default;