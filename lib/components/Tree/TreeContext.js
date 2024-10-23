"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var TreeContext = /*#__PURE__*/_react.default.createContext({
  selectedMap: {},
  group: {}
});

var _default = TreeContext;
exports.default = _default;