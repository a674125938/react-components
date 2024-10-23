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

var _CheckboxIcon = _interopRequireDefault(require("../../components/Checkbox/CheckboxIcon"));

var _style = require("./style");

var _RadioIcon = _interopRequireDefault(require("./RadioIcon"));

var _excluded = ["title", "children", "checked", "disabled", "indeterminate", "multiple"];

var _this = void 0;

var Card = function Card(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var title = _ref.title,
      children = _ref.children,
      checked = _ref.checked,
      disabled = _ref.disabled,
      indeterminate = _ref.indeterminate,
      multiple = _ref.multiple,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.RadioCardWrap, (0, _extends2.default)({
    checked: checked,
    disabled: disabled
  }, rest), title == null ? null : /*#__PURE__*/_react.default.createElement("div", {
    className: _style.cardHeaderCls
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _style.cardTitleCls
  }, title), multiple ? /*#__PURE__*/_react.default.createElement(_CheckboxIcon.default, {
    disabled: disabled,
    checked: checked,
    indeterminate: indeterminate
  }) : /*#__PURE__*/_react.default.createElement(_RadioIcon.default, {
    disabled: disabled,
    checked: checked
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.cardContentCls
  }, children));
}.bind(void 0);

var _default = /*#__PURE__*/_react.default.memo(Card);

exports.default = _default;