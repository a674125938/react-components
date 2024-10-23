"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var _this = void 0;

var Content = function Content(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var rest = (0, _extends2.default)({}, _ref);
  return /*#__PURE__*/_react.default.createElement(_style.ContentWrap, rest);
}.bind(void 0);

var _default = /*#__PURE__*/_react.default.memo(Content);

exports.default = _default;