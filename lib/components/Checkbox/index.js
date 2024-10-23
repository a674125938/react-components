"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = require("../../type");

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _Group = _interopRequireDefault(require("./Group"));

var _interface = require("./interface");

var ExportCheckbox = (0, _type.ExportComponent)(_Checkbox.default, {
  Group: _Group.default,

  /** @deprecated */
  StyleType: _interface.StyleTypes,

  /** @deprecated */
  Size: _interface.Sizes
});
var _default = ExportCheckbox;
exports.default = _default;