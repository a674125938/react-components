"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _isFunction = _interopRequireDefault(require("./isFunction"));

var _this = void 0;

var _default = function (v) {
  (0, _newArrowCheck2.default)(this, _this);
  if (!v) return true;
  if ((0, _isFunction.default)(v)) return true;
  if ('length' in v) return !v.length;
  if ('size' in v) return !v.size;
  if (Object.keys(v).length) return false;
  return true;
}.bind(void 0);

exports.default = _default;