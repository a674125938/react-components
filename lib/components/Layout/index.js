"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = require("../../type");

var _Layout = _interopRequireDefault(require("./Layout"));

var _Header = _interopRequireDefault(require("./Header"));

var _Sider = _interopRequireDefault(require("./Sider"));

var _Content = _interopRequireDefault(require("./Content"));

var _Footer = _interopRequireDefault(require("./Footer"));

var ExportLayout = (0, _type.ExportComponent)(_Layout.default, {
  Header: _Header.default,
  Sider: _Sider.default,
  Content: _Content.default,
  Footer: _Footer.default
});
var _default = ExportLayout;
exports.default = _default;