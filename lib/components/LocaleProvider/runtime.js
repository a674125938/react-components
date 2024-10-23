"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRuntimeLocale = exports.setRuntimeLocale = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

var runtimeLocale = {};

var setRuntimeLocale = function setRuntimeLocale(_runtimeLocale) {
  (0, _newArrowCheck2.default)(this, _this);
  runtimeLocale = _runtimeLocale;
}.bind(void 0);

exports.setRuntimeLocale = setRuntimeLocale;

var getRuntimeLocale = function getRuntimeLocale() {
  (0, _newArrowCheck2.default)(this, _this);
  return runtimeLocale;
}.bind(void 0);

exports.getRuntimeLocale = getRuntimeLocale;