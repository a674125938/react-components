"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var wait = function wait() {
  var _this = this;

  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (resolve) {
    (0, _newArrowCheck2.default)(this, _this);
    return setTimeout(resolve, ms);
  }.bind(this));
};

var _default = wait;
exports.default = _default;