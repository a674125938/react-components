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

var _style = require("./style");

var _excluded = ["className"];

var _this = void 0;

var Content = function Content(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.ContentWrap, (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(_style.prefixCls, className)
  }));
}.bind(void 0);

var MemoContent = /*#__PURE__*/_react.default.memo(Content);

var _default = MemoContent;
exports.default = _default;