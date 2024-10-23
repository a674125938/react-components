"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _globalAnimation = require("../../style/globalAnimation");

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _usePopoverConfig = _interopRequireDefault(require("../../hooks/usePopoverConfig"));

var _KeyCode = _interopRequireDefault(require("../../utils/KeyCode"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _utils = require("./utils");

var _style = require("./style");

var _excluded = ["value", "defaultValue", "onChange", "rules", "disabled", "nullable", "display", "size", "popoverProps", "getCalendarContainer", "zIndex", "format", "locale", "status", "placeholder", "shortcuts", "type"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var formatInput = function formatInput(v, allFormat, precision) {
  (0, _newArrowCheck2.default)(this, _this);
  if (v == '') return null;
  var l = allFormat.length;
  v = v.replace(/：/g, ':').replace(/—/g, '-').replace(/\s{2,}/g, ' ').trim();

  for (var i = 0; i < l; i++) {
    var format = allFormat[i];
    format = format.replace(/\s[2]/g, ' ');
    format = format.trim();
    var d = (0, _moment.default)(v, format, true);

    if (d.isValid()) {
      return precision ? d.startOf(precision) : d;
    }
  }

  return false;
}.bind(void 0);

var formatDate = function formatDate(v, format) {
  (0, _newArrowCheck2.default)(this, _this);
  if (v == null) return '';
  var d = (0, _moment.default)(+v);
  return d.isValid() ? d.format(format) : '';
}.bind(void 0);

var formatToTimeMode = function formatToTimeMode(format) {
  (0, _newArrowCheck2.default)(this, _this);
  var timeMode = [];
  if (format.indexOf('H') >= 0) timeMode.push('HH');
  if (format.indexOf('m') >= 0) timeMode.push('mm');
  if (format.indexOf('s') >= 0) timeMode.push('ss');
  return timeMode;
}.bind(void 0);

var getValidCurrentDate = function getValidCurrentDate(value, d, currentValue) {
  (0, _newArrowCheck2.default)(this, _this);
  return value != null && (0, _moment.default)(+value).isValid() ? value : currentValue != null ? currentValue : (0, _moment.default)(d).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  });
}.bind(void 0);

var trigger = [];
var align = {
  points: ['tl', 'bl'],
  overflow: {
    adjustX: 0,
    adjustY: 1
  },
  offset: [0, 10],
  targetOffset: [0, 0]
};

var usePicker = function usePicker(props, displayToFormatAndTimeMode, mode, onClear) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _value = props.value,
      defaultValue = props.defaultValue,
      _onChange = props.onChange,
      rules = props.rules,
      disabled = props.disabled,
      nullable = props.nullable,
      display = props.display,
      size = props.size,
      popoverProps = props.popoverProps,
      getCalendarContainer = props.getCalendarContainer,
      zIndex = props.zIndex,
      _format = props.format,
      _locale = props.locale,
      status = props.status,
      placeholder = props.placeholder,
      shortcuts = props.shortcuts,
      type = props.type,
      rest = (0, _objectWithoutProperties2.default)(props, _excluded);

  var _useMemo = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return displayToFormatAndTimeMode(display);
  }.bind(this), [display, displayToFormatAndTimeMode]),
      _useMemo2 = (0, _slicedToArray2.default)(_useMemo, 2),
      displayFormat = _useMemo2[0],
      displayTimeMode = _useMemo2[1];

  var _useMemo3 = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    var allFormat = displayFormat;
    var timeMode = displayTimeMode;

    if (_format) {
      allFormat = (Array.isArray(_format) ? _format : [_format]).concat(displayFormat);
      timeMode = formatToTimeMode(allFormat[0]);
    }

    return [allFormat[0], allFormat, timeMode];
  }.bind(this), [_format, displayFormat, displayTimeMode]),
      _useMemo4 = (0, _slicedToArray2.default)(_useMemo3, 3),
      format = _useMemo4[0],
      allFormat = _useMemo4[1],
      timeMode = _useMemo4[2];

  var precision = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    if (mode === 'month') return 'month';
    if (!(timeMode !== null && timeMode !== void 0 && timeMode.length)) return 'date';
    if (timeMode.indexOf('ss') >= 0) return 'second';
    if (timeMode.indexOf('mm') >= 0) return 'minute';
    if (timeMode.indexOf('HH') >= 0) return 'hour';
    return 'date';
  }.bind(this), [mode, timeMode]);
  var d = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return new Date();
  }.bind(this), []);
  var clickConfirm = !(timeMode !== null && timeMode !== void 0 && timeMode.length);

  var _useUncontrolled = (0, _useUncontrolled3.default)(_value, defaultValue, _onChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      value = _useUncontrolled2[0],
      onChange = _useUncontrolled2[1];

  var _useState = (0, _react.useState)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return getValidCurrentDate(value, d);
  }.bind(this)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      calCurrentValue = _useState2[0],
      setCalCurrentValue = _useState2[1];

  if (!nullable && value == null) value = d;

  var _useState3 = (0, _react.useState)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return formatDate(value, format);
  }.bind(this)),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  var _useState5 = (0, _react.useState)(value),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      calValue = _useState6[0],
      setCalValue = _useState6[1];

  var _useState7 = (0, _react.useState)(calValue),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      lastValidValue = _useState8[0],
      setLastValidValue = _useState8[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      useInputValue = _useState10[0],
      setUseInputValue = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      visible = _useState12[0],
      setVisible = _useState12[1];

  var locale = (0, _useLocale.default)(_zh_CN.default, 'DatePicker', _locale);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    if (visible) return;

    if (!value) {
      if (nullable) {
        setInputValue('');
      } else if (!nullable) {
        setInputValue(formatDate((0, _moment.default)(+d), format));
      }
    } else {
      setInputValue(formatDate((0, _moment.default)(+value), format));
    }
  }.bind(this), [visible, d, format, nullable, value]);
  var error = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    var currentValue;

    if (useInputValue) {
      var inputDValue = formatInput(inputValue, allFormat, precision);
      if (inputDValue === false) return locale.inputErrorTip;
      currentValue = inputDValue;
    } else {
      currentValue = calValue;
    }

    if (!currentValue) {
      return nullable ? true : locale.nullableErrorTip;
    } else if ((0, _utils.isDateValid)(currentValue, value, rules)) {
      return locale.dateErrorTip;
    }

    return true;
  }.bind(this), [allFormat, calValue, inputValue, locale.dateErrorTip, locale.inputErrorTip, locale.nullableErrorTip, nullable, precision, rules, useInputValue, value]);
  var handleInputChange = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    if (!visible) setVisible(true);
    var v = e.target.value;
    setInputValue(v);
    var d = formatInput(v, allFormat, precision);

    if (d) {
      setCalValue(d);
    } else {
      setCalValue(null);
      calValue && setLastValidValue(calValue);
    }

    setUseInputValue(true);
  }.bind(this), [allFormat, calValue, precision, visible]);
  var clear = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    setInputValue('');
    setCalValue(null);
  }.bind(this), []);
  var hide = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    setVisible(false);
  }.bind(this), []);
  var handleConfirm = (0, _react.useCallback)(function (v) {
    (0, _newArrowCheck2.default)(this, _this2);
    var currentValue = v !== undefined ? v : calValue;

    if (!currentValue) {
      if (!nullable) return;
    } else if ((0, _utils.isDateDisabled)(+currentValue, value, rules)) {
      return;
    }

    onChange && onChange(currentValue ? (0, _moment.default)(+currentValue) : null);
    setVisible(false);
  }.bind(this), [calValue, nullable, onChange, rules, value]);
  var handleInputClear = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    clear(); // 不走 onChange，区分两种操作

    if (onClear) {
      onClear();
    } else {
      handleConfirm(null);
    }
  }.bind(this), [clear, handleConfirm, onClear]);
  var handleCalendarChange = (0, _react.useCallback)(function (v) {
    (0, _newArrowCheck2.default)(this, _this2);
    v = (0, _utils.getValidDate)(v, rules);
    v = (0, _utils.setPrecision)(v, precision);
    setCalValue((0, _moment.default)(+v));
    setInputValue(formatDate((0, _moment.default)(+v), format));
    setUseInputValue(false);

    if (clickConfirm) {
      onChange && onChange((0, _moment.default)(+v));
      setVisible(false);
    }
  }.bind(this), [clickConfirm, format, onChange, precision, rules]);
  var handleInputFocus = (0, _react.useCallback)(function () {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    setCalValue(value == null ? null : value);
    setCalCurrentValue(function (currentValue) {
      (0, _newArrowCheck2.default)(this, _this3);
      return getValidCurrentDate(value, d, currentValue);
    }.bind(this));
    setUseInputValue(true);
    setVisible(true);
  }.bind(this), [d, value]);
  var handleInputBlur = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    setVisible(false);
  }.bind(this), []);
  var handleInputClick = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    setVisible(true);
  }.bind(this), []);
  var handleInputMouseDown = handleInputClick;
  var handleInputDown = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);

    if (e.keyCode === _KeyCode.default.ENTER) {
      handleConfirm();
      e.preventDefault();
      e.stopPropagation();
    }
  }.bind(this), [handleConfirm]);
  var handleShortcut = (0, _react.useCallback)(function (v) {
    (0, _newArrowCheck2.default)(this, _this2);
    handleCalendarChange(v);
    handleConfirm(v);
  }.bind(this), [handleCalendarChange, handleConfirm]);
  var popoverConfigProps = (0, _usePopoverConfig.default)();
  var avoidBlur = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    return e.preventDefault();
  }.bind(this), []);
  var inputProps = {
    value: inputValue,
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onKeyDown: handleInputDown,
    onClick: handleInputClick,
    onMouseDown: handleInputMouseDown,
    disabled: disabled,
    size: size,
    status: status,
    placeholder: placeholder === undefined ? locale.placeholder : placeholder,
    clearable: nullable ? {
      autoFocus: false,
      callOnChange: false
    } : false,
    onClear: handleInputClear
  };

  var containerProps = _objectSpread(_objectSpread({}, rest), {}, {
    disabled: disabled,
    status: status
  });

  var _popoverProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({
    zIndex: zIndex,
    transitionName: "".concat(_globalAnimation.animationPrefixCls, "-fade")
  }, popoverConfigProps), popoverProps), getCalendarContainer ? {
    getPopupContainer: getCalendarContainer
  } : {}), {}, {
    popupClassName: _style.datePickerPopupCls,
    trigger: trigger,
    visible: visible,
    align: align
  });

  var popupProps = {
    onMouseDown: avoidBlur
  };
  var calendarProps = {
    rules: rules,
    value: calValue,
    current: calCurrentValue,
    onCurrentChange: setCalCurrentValue,
    onChange: handleCalendarChange,
    customStyle: {
      boxShadow: false
    }
  };
  var timeProps = {
    value: calValue || lastValidValue,
    mode: timeMode,
    onChange: handleCalendarChange
  };
  var footerProps = {
    mode: mode,
    onShortcut: handleShortcut,
    confirmAble: error === true,
    onConfirm: handleConfirm,
    locale: _locale,
    shortcuts: shortcuts,
    showConfirm: !clickConfirm
  };
  return [inputProps, containerProps, _popoverProps, popupProps, calendarProps, timeProps, footerProps, {
    error: typeof error === 'string' ? error : null,
    active: visible
  }, {
    clear: clear,
    hide: hide
  }];
}.bind(void 0);

var _default = usePicker;
exports.default = _default;