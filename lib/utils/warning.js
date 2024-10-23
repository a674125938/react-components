"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onceWarning = exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _once = _interopRequireDefault(require("./once"));

var _this = void 0;

var warning = function warning(msg) {
  (0, _newArrowCheck2.default)(this, _this);
  console.error("URC Warning: ".concat(msg));
}.bind(void 0);

var _default = warning;
exports.default = _default;

var onceWarning = function onceWarning(msg) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  return (0, _once.default)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return warning(msg);
  }.bind(this));
}.bind(void 0);

exports.onceWarning = onceWarning;