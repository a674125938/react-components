"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRuntimeTheme = exports.setRuntimeTheme = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _theme = _interopRequireDefault(require("./theme"));

var _this = void 0;

var runtimeTheme = _theme.default;

var setRuntimeTheme = function setRuntimeTheme(_runtimeTheme) {
  (0, _newArrowCheck2.default)(this, _this);
  runtimeTheme = _runtimeTheme;
}.bind(void 0);

exports.setRuntimeTheme = setRuntimeTheme;

var getRuntimeTheme = function getRuntimeTheme() {
  (0, _newArrowCheck2.default)(this, _this);
  return runtimeTheme || _theme.default;
}.bind(void 0);

exports.getRuntimeTheme = getRuntimeTheme;