"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = require("../../type");

var _Button = _interopRequireDefault(require("../../components/Button"));

var _ActionList = _interopRequireDefault(require("./ActionList"));

var Sizes = _Button.default.Sizes;
var ButtonStyleTypes = _Button.default.StyleTypes;
var ExportActionList = (0, _type.ExportComponent)(_ActionList.default, {
  Sizes: Sizes,
  ButtonStyleTypes: ButtonStyleTypes
});
var _default = ExportActionList;
exports.default = _default;