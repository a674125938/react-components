"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Card = _interopRequireDefault(require("../../components/Radio/Card"));

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _selectable = require("../../hooks/selectable");

var _style = require("./style");

var _CheckboxIcon = _interopRequireDefault(require("./CheckboxIcon"));

var _CheckboxContext = _interopRequireDefault(require("./CheckboxContext"));

var _excluded = ["checked", "disabled", "children", "title", "onChange", "className", "indeterminate"],
    _excluded2 = ["onChange", "className"],
    _excluded3 = ["defaultChecked", "checked", "onChange", "value", "onClick", "disabledLabel"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var IconCheckboxWithoutMemo = function IconCheckboxWithoutMemo(_ref) {
  var _classnames;

  (0, _newArrowCheck2.default)(this, _this);
  var checked = _ref.checked,
      disabled = _ref.disabled,
      children = _ref.children,
      title = _ref.title,
      onChange = _ref.onChange,
      className = _ref.className,
      indeterminate = _ref.indeterminate,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.CheckboxWrap, (0, _extends2.default)({
    checked: checked,
    disabled: disabled,
    className: (0, _classnames2.default)((_classnames = {}, (0, _defineProperty2.default)(_classnames, _style.prefixCls, true), (0, _defineProperty2.default)(_classnames, _style.checkedCls, checked), (0, _defineProperty2.default)(_classnames, _style.disabledCls, disabled), (0, _defineProperty2.default)(_classnames, _style.indeterminateCls, indeterminate), _classnames), className)
  }, rest), /*#__PURE__*/_react.default.createElement(_CheckboxIcon.default, {
    checked: checked,
    disabled: disabled,
    indeterminate: indeterminate
  }), children != null && /*#__PURE__*/_react.default.createElement("span", {
    className: _style.contentCls
  }, children));
}.bind(void 0);

IconCheckboxWithoutMemo.propTypes = {
  checked: _propTypes.default.bool,
  defaultChecked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  indeterminate: _propTypes.default.bool,
  title: _propTypes.default.node,
  disabledLabel: _propTypes.default.node
};

var IconCheckbox = /*#__PURE__*/_react.default.memo(IconCheckboxWithoutMemo);

var CardCheckboxWithoutMemo = function CardCheckboxWithoutMemo(_ref2) {
  (0, _newArrowCheck2.default)(this, _this);
  var onChange = _ref2.onChange,
      className = _ref2.className,
      rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement(_Card.default, (0, _extends2.default)({}, rest, {
    className: (0, _classnames2.default)(_style.prefixCls, _style.cardCls, className),
    multiple: true
  }));
}.bind(void 0);

CardCheckboxWithoutMemo.propTypes = {
  checked: _propTypes.default.bool,
  defaultChecked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  indeterminate: _propTypes.default.bool,
  title: _propTypes.default.node,
  disabledLabel: _propTypes.default.node
};

var CardCheckbox = /*#__PURE__*/_react.default.memo(CardCheckboxWithoutMemo);

var Checkbox = function Checkbox(_ref3) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref3$defaultChecked = _ref3.defaultChecked,
      defaultChecked = _ref3$defaultChecked === void 0 ? false : _ref3$defaultChecked,
      _checked = _ref3.checked,
      _onChange = _ref3.onChange,
      _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? '' : _ref3$value,
      onClick = _ref3.onClick,
      disabledLabel = _ref3.disabledLabel,
      restProps = (0, _objectWithoutProperties2.default)(_ref3, _excluded3);

  var _useUncontrolled = (0, _useUncontrolled3.default)(_checked, defaultChecked, _onChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      __checked = _useUncontrolled2[0],
      onChange = _useUncontrolled2[1];

  var _useItem = (0, _selectable.useItem)(value, __checked, _CheckboxContext.default),
      checked = _useItem.checked,
      toggle = _useItem.toggle,
      restContext = _useItem.restContext;

  var finalProps = _objectSpread(_objectSpread(_objectSpread({
    size: 'md'
  }, restContext), restProps), {}, {
    checked: checked
  });

  var disabled = finalProps.disabled;
  var handleClick = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    if (disabled) return;
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
    onChange(!checked);
    toggle(value);
  }.bind(this), [checked, disabled, onChange, onClick, toggle, value]);
  var styleType = finalProps.styleType;

  if (styleType === 'card') {
    return /*#__PURE__*/_react.default.createElement(CardCheckbox, (0, _extends2.default)({}, finalProps, {
      onClick: handleClick
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement(IconCheckbox, (0, _extends2.default)({}, finalProps, {
      onClick: handleClick
    }));
  }
}.bind(void 0);

Checkbox.propTypes = {
  checked: _propTypes.default.bool,
  defaultChecked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  indeterminate: _propTypes.default.bool,
  title: _propTypes.default.node,
  disabledLabel: _propTypes.default.node
};

var _default = /*#__PURE__*/_react.default.memo(Checkbox);

exports.default = _default;