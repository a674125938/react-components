"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Radio = _interopRequireDefault(require("./Radio"));

var _Group = _interopRequireDefault(require("./Group"));

var _Button = _interopRequireDefault(require("./Button"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _default = _Radio.default;
exports.default = _default;
_Radio.default.Group = _Group.default;
_Radio.default.Button = _Button.default;
_Radio.default.Tag = _Tag.default;