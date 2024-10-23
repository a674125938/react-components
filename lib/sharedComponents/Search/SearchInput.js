"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _Input = _interopRequireDefault(require("../../components/Input"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _style = require("./style");

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _excluded = ["count"];

var SearchInput = /*#__PURE__*/_react.default.forwardRef(function SearchInput(_ref, ref) {
  var count = _ref.count,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var locale = (0, _useLocale.default)(_zh_CN.default, 'SharedSearch');

  var prefix = /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
    type: "search"
  });

  var suffix = count != null ? /*#__PURE__*/_react.default.createElement("span", {
    className: _style.countCls
  }, count, locale.unit) : null;
  return /*#__PURE__*/_react.default.createElement(_Input.default, (0, _extends2.default)({
    className: _style.inputCls,
    suffix: suffix,
    prefix: prefix,
    clearable: true,
    block: true,
    ref: ref
  }, rest));
});

var _default = SearchInput;
exports.default = _default;