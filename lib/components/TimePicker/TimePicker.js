"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _Input = _interopRequireDefault(require("../../components/Input"));

var _Popover = _interopRequireDefault(require("../../components/Popover"));

var _Box = _interopRequireDefault(require("../../components/Box"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _globalAnimation = require("../../style/globalAnimation");

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _usePopoverConfig = _interopRequireDefault(require("../../hooks/usePopoverConfig"));

var _style = require("./style");

var _Time = _interopRequireDefault(require("./Time"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FooterWithoutMemo = function FooterWithoutMemo(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var onConfirm = _ref.onConfirm,
      disabled = _ref.disabled,
      _locale = _ref.locale;
  var locale = (0, _useLocale.default)(_zh_CN.default, 'DatePicker', _locale);
  var handleConfirm = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    onConfirm();
  }.bind(this), [onConfirm]);
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: _style.footerCls,
    container: true,
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement(_Button.default, {
    styleType: "primary",
    size: "sm",
    onClick: handleConfirm,
    disabled: disabled
  }, locale.confirm));
}.bind(void 0);

var Footer = /*#__PURE__*/(0, _react.memo)(FooterWithoutMemo);

var inputToTime = function inputToTime(v, format) {
  (0, _newArrowCheck2.default)(this, _this);
  if (v == '') return null;
  v = v.replace(/：/g, ':').trim();
  return (0, _moment.default)(v, format.trim(), true);
}.bind(void 0);

var timeToInput = function timeToInput(v, format) {
  (0, _newArrowCheck2.default)(this, _this);
  if (v == null) return '';
  return (0, _moment.default)(+v).format(format);
}.bind(void 0);

var formatToTimeMode = function formatToTimeMode(format) {
  (0, _newArrowCheck2.default)(this, _this);
  var timeMode = [];
  if (format.indexOf('H') >= 0) timeMode.push('HH');
  if (format.indexOf('m') >= 0) timeMode.push('mm');
  if (format.indexOf('s') >= 0) timeMode.push('ss');
  return timeMode;
}.bind(void 0);

var DefaultFormat = 'HH:mm:ss';

var TimePicker = function TimePicker(_ref2) {
  var _this3 = this;

  (0, _newArrowCheck2.default)(this, _this);

  var _value = _ref2.value,
      defaultValue = _ref2.defaultValue,
      _onChange = _ref2.onChange,
      _ref2$format = _ref2.format,
      _format = _ref2$format === void 0 ? DefaultFormat : _ref2$format,
      nullable = _ref2.nullable,
      size = _ref2.size,
      disabled = _ref2.disabled,
      popoverProps = _ref2.popoverProps,
      locale = _ref2.locale;

  var _useUncontrolled = (0, _useUncontrolled3.default)(_value, defaultValue, _onChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      value = _useUncontrolled2[0],
      onChange = _useUncontrolled2[1];

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = (0, _react.useState)(value),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      timeValue = _useState4[0],
      setTimeValue = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      useInputValue = _useState6[0],
      setUseInputValue = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      active = _useState8[0],
      setActive = _useState8[1];

  var defaultTime = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return (0, _moment.default)().startOf('date');
  }.bind(this), []);
  var avoidBlur = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this3);
    return e.preventDefault();
  }.bind(this), []);
  var format = _format || DefaultFormat;
  var handleConfirm = (0, _react.useCallback)(function (value) {
    (0, _newArrowCheck2.default)(this, _this3);
    setActive(false);
    var finalValue = timeValue;

    if (value !== undefined) {
      onChange(value === null ? null : (0, _moment.default)(+value));
      return;
    }

    if (useInputValue) {
      var inputTime = inputToTime(inputValue, format);

      if (inputTime) {
        finalValue = inputTime;
        if (inputTime.isValid()) return;
      } else {
        finalValue = null;
      }
    }

    if (finalValue == null && !nullable) return;
    onChange(finalValue == null ? null : (0, _moment.default)(+finalValue));
  }.bind(this), [format, inputValue, nullable, onChange, timeValue, useInputValue]);
  var handleInputChange = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this3);
    var s = e.target.value;
    setInputValue(s);
    var inputTime = inputToTime(s, format);
    if (inputTime && inputTime.isValid()) setTimeValue(inputTime);
    setUseInputValue(true);
  }.bind(this), [format]);
  var handleTimeChange = (0, _react.useCallback)(function (v) {
    (0, _newArrowCheck2.default)(this, _this3);
    setTimeValue(v);
    setInputValue(timeToInput(v, format));
    setUseInputValue(false);
  }.bind(this), [format]);
  var handleInputFocus = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return setActive(true);
  }.bind(this), []);
  var handleInputBlur = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return setActive(false);
  }.bind(this), []);
  var handleInputClear = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    nullable && handleConfirm(null);
  }.bind(this), [handleConfirm, nullable]);
  var formatTimeValue = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return new Date(+(timeValue == null ? defaultTime : timeValue));
  }.bind(this), [defaultTime, timeValue]);
  var isValid = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);

    if (useInputValue) {
      var inputTime = inputToTime(inputValue, format);
      if (inputTime) return inputTime.isValid();
      return nullable;
    }

    return true;
  }.bind(this), [format, inputValue, nullable, useInputValue]);
  var timeMode = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return formatToTimeMode(format);
  }.bind(this), [format]);
  var popoverConfigProps = (0, _usePopoverConfig.default)();
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this3);

    if (!active) {
      setTimeValue(value);
      setInputValue(value == null ? nullable ? '' : timeToInput(defaultTime, format) : timeToInput(value, format));
    }
  }.bind(this), [active, defaultTime, format, nullable, value]);
  return /*#__PURE__*/_react.default.createElement(_Popover.default, (0, _extends2.default)({
    transitionName: "".concat(_globalAnimation.animationPrefixCls, "-fade")
  }, popoverConfigProps, popoverProps, {
    trigger: [],
    visible: active,
    onVisibleChange: setActive,
    popup: /*#__PURE__*/_react.default.createElement(_style.SPopup, {
      onMouseDown: avoidBlur
    }, /*#__PURE__*/_react.default.createElement(_Time.default, {
      value: formatTimeValue,
      onChange: handleTimeChange,
      mode: timeMode
    }), /*#__PURE__*/_react.default.createElement(Footer, {
      onConfirm: handleConfirm,
      disabled: !isValid,
      locale: locale
    }))
  }), /*#__PURE__*/_react.default.createElement(_style.SWrap, {
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    value: inputValue,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    onFocus: handleInputFocus,
    onClick: handleInputFocus,
    onClear: handleInputClear,
    size: size,
    disabled: disabled,
    clearable: nullable ? {
      autoFocus: false,
      callOnChange: false
    } : false,
    prefix: /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      type: "clock"
    })
  })));
}.bind(void 0);

TimePicker.propTypes = {
  onChange: _propTypes.default.func,
  popoverProps: _propTypes.default.any,
  nullable: _propTypes.default.bool,
  format: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  locale: _propTypes.default.any
};

var _default = /*#__PURE__*/(0, _react.memo)(TimePicker);

exports.default = _default;