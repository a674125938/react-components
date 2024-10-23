"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _noop = _interopRequireDefault(require("../../utils/noop"));

var CascadeContext = /*#__PURE__*/_react.default.createContext({
  expandItem: _noop.default,
  selectItem: _noop.default
});

var _default = CascadeContext;
exports.default = _default;