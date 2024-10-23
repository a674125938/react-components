"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ThemeProvider = _interopRequireDefault(require("./ThemeProvider"));

var _useDesignTokens = _interopRequireDefault(require("./useDesignTokens"));

_ThemeProvider.default.useDesignTokens = _useDesignTokens.default;
var _default = _ThemeProvider.default;
exports.default = _default;