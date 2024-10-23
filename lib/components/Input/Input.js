"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _ControllerContext = _interopRequireDefault(require("../../components/Form/ControllerContext"));

var _noop = _interopRequireDefault(require("../../utils/noop"));

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _style = require("./style");

var _excluded = ["value", "defaultValue", "onChange", "disabled", "size", "icon", "prefix", "suffix", "clearable", "block", "style", "status", "customStyle", "className", "onFocus", "onBlur", "onClear"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Input = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _value = _ref.value,
      defaultValue = _ref.defaultValue,
      _onChange = _ref.onChange,
      disabled = _ref.disabled,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      icon = _ref.icon,
      prefix = _ref.prefix,
      suffix = _ref.suffix,
      clearable = _ref.clearable,
      block = _ref.block,
      style = _ref.style,
      _status = _ref.status,
      customStyle = _ref.customStyle,
      className = _ref.className,
      _ref$onFocus = _ref.onFocus,
      onFocus = _ref$onFocus === void 0 ? _noop.default : _ref$onFocus,
      _ref$onBlur = _ref.onBlur,
      onBlur = _ref$onBlur === void 0 ? _noop.default : _ref$onBlur,
      _ref$onClear = _ref.onClear,
      onClear = _ref$onClear === void 0 ? _noop.default : _ref$onClear,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var valueGetter = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    return e.target.value;
  }.bind(this), []);

  var _useUncontrolled = (0, _useUncontrolled3.default)(_value, defaultValue || '', _onChange, {
    getter: valueGetter
  }),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      value = _useUncontrolled2[0],
      onChange = _useUncontrolled2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var inputRef = (0, _react.useRef)(null);
  var focus = (0, _react.useCallback)(function (options) {
    (0, _newArrowCheck2.default)(this, _this2);
    inputRef.current && inputRef.current.focus(options);
  }.bind(this), []);
  (0, _react.useImperativeHandle)(ref, function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return {
      input: inputRef.current,
      focus: focus
    };
  }.bind(this), [focus]);
  var handleFocus = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    setFocused(true);
    onFocus(e);
  }.bind(this), [onFocus]);
  var handleBlur = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    setFocused(false);
    onBlur(e);
  }.bind(this), [onBlur]);
  var handleClearMouseDown = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    e.preventDefault();
    e.stopPropagation();
  }.bind(this), []);
  var handleClear = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    if (disabled) return;
    e.stopPropagation();
    onClear();
    var input = inputRef.current;
    if (!input) return;
    e.target = input;
    e.currentTarget = input;
    var cacheV = input.value;

    if ((clearable === null || clearable === void 0 ? void 0 : clearable.callOnChange) !== false) {
      input.value = '';
      onChange(e);
      input.value = cacheV;
    }

    if ((clearable === null || clearable === void 0 ? void 0 : clearable.autoFocus) !== false) {
      input.focus();
    }
  }.bind(this), [clearable, disabled, onChange, onClear]);
  var handleWrapMouseDown = (0, _react.useCallback)(function (e) {
    var _inputRef$current;

    (0, _newArrowCheck2.default)(this, _this2);
    // 避免影响输入框的选中、移动光标等操作
    if (e.target === inputRef.current) return;
    e.preventDefault();
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  }.bind(this), []);

  var _useContext = (0, _react.useContext)(_ControllerContext.default),
      status = _useContext.status;

  return /*#__PURE__*/_react.default.createElement(_style.InputWrap, {
    size: size,
    focused: focused,
    style: style,
    disabled: disabled,
    status: _status || status,
    customStyle: customStyle,
    block: block,
    className: className,
    empty: !value,
    onMouseDown: handleWrapMouseDown
  }, /*#__PURE__*/_react.default.createElement(_style.Prefix, null, prefix), /*#__PURE__*/_react.default.createElement("span", {
    className: _style.inputBlockWrapCls
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, rest, {
    value: value,
    onChange: onChange,
    ref: inputRef,
    onFocus: handleFocus,
    onBlur: handleBlur,
    disabled: disabled
  })), /*#__PURE__*/_react.default.createElement(_style.Clear, {
    clearable: clearable,
    onMouseDown: handleClearMouseDown,
    onClick: handleClear
  })), /*#__PURE__*/_react.default.createElement(_style.Suffix, {
    icon: icon
  }, suffix));
}.bind(void 0));

var _default = /*#__PURE__*/_react.default.memo(Input);

exports.default = _default;