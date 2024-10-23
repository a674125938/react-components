"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = require("../../type");

var _Select = _interopRequireDefault(require("./Select"));

var _Option = _interopRequireDefault(require("./Option"));

var _Group = _interopRequireDefault(require("./Group"));

var _Extra = _interopRequireDefault(require("./Extra"));

var ExportSelect = (0, _type.ExportComponent)(_Select.default, {
  Option: _Option.default,
  Group: _Group.default,
  Extra: _Extra.default,
  Size: _type.Sizes
});
var _default = ExportSelect;
exports.default = _default;