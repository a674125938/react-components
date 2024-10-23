"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ZForm = _interopRequireDefault(require("./ZForm"));

var _controllerDecorator = _interopRequireDefault(require("./controllerDecorator"));

var _default = _ZForm.default;
exports.default = _default;
_ZForm.default.controllerDecorator = _controllerDecorator.default;