"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _once = _interopRequireDefault(require("./once"));

var _this = void 0;

var deprecatedLog = function deprecatedLog(name, insteadName) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  return (0, _once.default)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    console.error("URC Deprecated: ".concat(name, " will be deprecated, please use ").concat(insteadName, " to replace"));
  }.bind(this));
}.bind(void 0);

var _default = deprecatedLog;
exports.default = _default;