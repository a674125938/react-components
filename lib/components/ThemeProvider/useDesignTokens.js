"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _emotionTheming = require("emotion-theming");

var _style = require("../../style");

var _this = void 0;

var useDesignTokens = function useDesignTokens() {
  (0, _newArrowCheck2.default)(this, _this);
  var theme = (0, _emotionTheming.useTheme)();
  if (!Object.keys(theme).length) return _style.defaultTheme.designTokens;
  return theme.designTokens;
}.bind(void 0);

var _default = useDesignTokens;
exports.default = _default;