"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _group = require("../../hooks/group");

var CollapseContext = /*#__PURE__*/_react.default.createContext(_group.defaultContext);

var _default = CollapseContext;
exports.default = _default;