"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "alignElement", {
  enumerable: true,
  get: function get() {
    return _alignElement.default;
  }
});
Object.defineProperty(exports, "alignPoint", {
  enumerable: true,
  get: function get() {
    return _alignPoint.default;
  }
});
exports.default = void 0;

var _alignElement = _interopRequireDefault(require("./align/alignElement"));

var _alignPoint = _interopRequireDefault(require("./align/alignPoint"));

var _default = _alignElement.default;
exports.default = _default;