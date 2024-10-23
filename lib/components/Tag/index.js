"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = require("../../type");

var _Tag = _interopRequireDefault(require("./Tag"));

var _Group = _interopRequireDefault(require("./Group"));

var _Icon = _interopRequireDefault(require("./Icon"));

var ExportTag = (0, _type.ExportComponent)(_Tag.default, {
  Group: _Group.default,
  Icon: _Icon.default
});
var _default = ExportTag;
exports.default = _default;