"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

var _default = function (obj, keys) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var result = {};
  keys.forEach(function (key) {
    (0, _newArrowCheck2.default)(this, _this2);

    if (key in obj) {
      result[key] = obj[key];
    }
  }.bind(this));
  return result;
}.bind(void 0);

exports.default = _default;