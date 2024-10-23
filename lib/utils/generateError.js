"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

/** 构建error */
var generateError = function generateError(message, name) {
  (0, _newArrowCheck2.default)(this, _this);
  var error = new Error(message);

  if (name) {
    error.name = name;
  }

  return error;
}.bind(void 0);

var _default = generateError;
exports.default = _default;