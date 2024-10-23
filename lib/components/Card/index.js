"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Card = _interopRequireDefault(require("./Card"));

var _Header = _interopRequireDefault(require("./Header"));

var _Action = _interopRequireDefault(require("./Action"));

var _Content = _interopRequireDefault(require("./Content"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _SubArea = _interopRequireDefault(require("./SubArea"));

var _default = _Card.default;
exports.default = _default;
Object.assign(_Card.default, {
  Header: _Header.default,
  Action: _Action.default,
  Content: _Content.default,
  Footer: _Footer.default,
  SubArea: _SubArea.default
});