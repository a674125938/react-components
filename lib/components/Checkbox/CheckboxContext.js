"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _noop = _interopRequireDefault(require("../../utils/noop"));

var CheckboxContext = /*#__PURE__*/_react.default.createContext({
  toggleSelect: _noop.default,
  addItem: _noop.default,
  removeItem: _noop.default
});

var _default = CheckboxContext;
exports.default = _default;