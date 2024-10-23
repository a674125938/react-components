"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = require("../../type");

var _Breadcrumb = _interopRequireDefault(require("./Breadcrumb"));

var _Item = _interopRequireDefault(require("./Item"));

var _BackButton = _interopRequireDefault(require("./BackButton"));

var _interface = require("./interface");

var ExportBreadcrumb = (0, _type.ExportComponent)(_Breadcrumb.default, {
  Item: _Item.default,
  BackButton: _BackButton.default,
  StyleType: _interface.StyleTypes,
  defaultProps: {}
});
var _default = ExportBreadcrumb;
exports.default = _default;