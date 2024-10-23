"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PureOption = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var _excluded = ["value", "children"],
    _excluded2 = ["value", "label", "children"];

var _this = void 0;

var Option = function Option(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var value = _ref.value,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.OptionWrap, (0, _extends2.default)({}, rest, {
    itemKey: value
  }), children);
}.bind(void 0);

Option.propTypes = {
  disabled: _propTypes.default.bool,
  tooltip: _propTypes.default.any,
  children: _propTypes.default.node,
  label: _propTypes.default.node
};
Option.isMenuItem = true;

var PureOption = function PureOption(_ref2) {
  (0, _newArrowCheck2.default)(this, _this);
  var value = _ref2.value,
      label = _ref2.label,
      children = _ref2.children,
      rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement(_style.OptionWrap, (0, _extends2.default)({}, rest, {
    itemKey: value
  }), children);
}.bind(void 0);

exports.PureOption = PureOption;
PureOption.propTypes = {
  disabled: _propTypes.default.bool,
  tooltip: _propTypes.default.any,
  children: _propTypes.default.node,
  label: _propTypes.default.node
};
var _default = Option;
exports.default = _default;