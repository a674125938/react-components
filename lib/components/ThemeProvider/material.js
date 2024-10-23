"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

var _default = function (originTheme) {
  (0, _newArrowCheck2.default)(this, _this);
  console.warn('Material theme is default theme now, please remove this generate function');
  return originTheme;
}.bind(void 0);

exports.default = _default;