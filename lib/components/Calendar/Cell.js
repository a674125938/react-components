"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _style = require("./style");

var _excluded = ["children", "mode", "className", "value", "disabled"];

var _this = void 0;

var Cell = function Cell(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var children = _ref.children,
      mode = _ref.mode,
      className = _ref.className,
      value = _ref.value,
      disabled = _ref.disabled,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var locale = (0, _useLocale.default)(_zh_CN.default, 'Calendar');
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(className, _style.prefixCls + "-cell-".concat(mode)),
    title: disabled ? locale.disabledTip : ''
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _style.cellContentPrevSpaceCls
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _style.cellContentCls
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.cellContentSquareCls
  }, children)), /*#__PURE__*/_react.default.createElement("span", {
    className: _style.cellContentNextSpaceCls
  }));
}.bind(void 0);

var _default = /*#__PURE__*/_react.default.memo(Cell);

exports.default = _default;