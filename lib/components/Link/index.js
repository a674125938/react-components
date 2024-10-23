"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Link = _interopRequireDefault(require("./Link"));

var _Button = _interopRequireDefault(require("./Button"));

var _type = require("../../type");

var ExportLink = (0, _type.ExportComponent)(_Link.default, {
  Button: _Button.default
});
var _default = ExportLink;
exports.default = _default;