"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = require("../../type");

var _Badge = _interopRequireDefault(require("./Badge"));

var _Bubble = _interopRequireDefault(require("./Bubble"));

var ExportBadge = (0, _type.ExportComponent)(_Badge.default, {
  Bubble: _Bubble.default
});
var _default = ExportBadge;
exports.default = _default;