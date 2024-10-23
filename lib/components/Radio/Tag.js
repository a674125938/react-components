"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("./Radio"));

var _this = void 0;

/** @deprecated */
var Button = function Button(props) {
  (0, _newArrowCheck2.default)(this, _this);
  console.warn('This will be deprecated, please use <Radio styleType="tag"></Radio> to instead!');
  return /*#__PURE__*/_react.default.createElement(_Radio.default, (0, _extends2.default)({}, props, {
    styleType: "tag"
  }));
}.bind(void 0);

var _default = Button;
exports.default = _default;