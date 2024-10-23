"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _useUncontrolled5 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _ControllerContext = _interopRequireDefault(require("../../components/Form/ControllerContext"));

var _useDidMount = _interopRequireDefault(require("../../hooks/useDidMount"));

var _isArray = _interopRequireDefault(require("../../utils/isArray"));

var _isNumber = _interopRequireDefault(require("../../utils/isNumber"));

var _Calendar = _interopRequireWildcard(require("../../components/Calendar"));

var _pick = _interopRequireDefault(require("../../utils/pick"));

var _Popover = _interopRequireDefault(require("../../components/Popover"));

var _Input = _interopRequireDefault(require("../../components/Input"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _utils = require("./utils");

var _style = require("./style");

var _Footer = _interopRequireDefault(require("./Footer"));

var _useRangePicker5 = _interopRequireDefault(require("./useRangePicker"));

var _excluded = ["options", "option", "defaultOption", "onOptionChange", "hideOptions", "value", "defaultValue", "onChange", "onInitialChange", "nullable", "size", "display", "format", "rules", "type", "disabled", "zIndex", "locale", "selectProps", "popoverProps", "rangeTip", "status", "placeholder", "shortcuts", "customRender"],
    _excluded2 = ["range"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var formatValue = function formatValue(v) {
  var nullable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var defaultV = arguments.length > 2 ? arguments[2] : undefined;
  return v == null ? nullable ? null : (0, _moment.default)(+defaultV) : (0, _moment.default)(+v);
};

var formatRangeValue = function formatRangeValue(value) {
  var nullable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var d = arguments.length > 2 ? arguments[2] : undefined;
  return [formatValue(value[0], nullable[0], d), formatValue(value[1], nullable[1], d)];
};

var getDateFromOption = function getDateFromOption(option) {
  (0, _newArrowCheck2.default)(this, _this);
  if (option === null) return null;

  if (_moment.default.isDate(option) || _moment.default.isMoment(option) || (0, _isNumber.default)(option)) {
    return (0, _moment.default)(option);
  } else {
    return (0, _moment.default)().add(option);
  }
}.bind(void 0);

var getValueFromOption = function getValueFromOption() {
  var _this2 = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var optionValue = arguments.length > 1 ? arguments[1] : undefined;
  var option = options.find(function (option) {
    (0, _newArrowCheck2.default)(this, _this2);
    return option.value === optionValue;
  }.bind(this));

  var _ref = option || {},
      _ref$range = _ref.range,
      range = _ref$range === void 0 ? {} : _ref$range;

  var s = getDateFromOption(range.start);
  var e = getDateFromOption(range.end);
  return [s, e];
};

var Range = function Range(_ref2) {
  var _this3 = this,
      _rules$range,
      _rules$range2;

  (0, _newArrowCheck2.default)(this, _this);
  var _options = _ref2.options,
      _option = _ref2.option,
      defaultOption = _ref2.defaultOption,
      _onOptionChange = _ref2.onOptionChange,
      hideOptions = _ref2.hideOptions,
      _value = _ref2.value,
      defaultValue = _ref2.defaultValue,
      _onChange = _ref2.onChange,
      onInitialChange = _ref2.onInitialChange,
      nullable = _ref2.nullable,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'md' : _ref2$size,
      _ref2$display = _ref2.display,
      display = _ref2$display === void 0 ? {} : _ref2$display,
      format = _ref2.format,
      _ref2$rules = _ref2.rules,
      rules = _ref2$rules === void 0 ? {} : _ref2$rules,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'date' : _ref2$type,
      disabled = _ref2.disabled,
      zIndex = _ref2.zIndex,
      _locale = _ref2.locale,
      selectProps = _ref2.selectProps,
      _popoverProps = _ref2.popoverProps,
      rangeTip = _ref2.rangeTip,
      status = _ref2.status,
      placeholder = _ref2.placeholder,
      shortcuts = _ref2.shortcuts,
      customRender = _ref2.customRender,
      rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
  var d = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return new Date();
  }.bind(this), []);
  var locale = (0, _useLocale.default)(_zh_CN.default, 'DatePicker', _locale);

  var _useUncontrolled = (0, _useUncontrolled5.default)(_option, defaultOption || 'custom', _onOptionChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      option = _useUncontrolled2[0],
      onOptionChange = _useUncontrolled2[1];

  var options = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return _options ? _options.concat({
      label: locale.custom,
      value: 'custom'
    }) : [];
  }.bind(this), [_options, locale.custom]);

  var _useUncontrolled3 = (0, _useUncontrolled5.default)(_value, defaultValue || [null, null], _onChange),
      _useUncontrolled4 = (0, _slicedToArray2.default)(_useUncontrolled3, 3),
      value = _useUncontrolled4[0],
      onChange = _useUncontrolled4[1],
      updateValueWithoutCallOnChange = _useUncontrolled4[2];

  var _useState = (0, _react.useState)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return formatRangeValue(value, nullable, d);
  }.bind(this)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      cacheValue = _useState2[0],
      setCacheValue = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      rangeError = _useState4[0],
      setRangeError = _useState4[1];

  var inputRefS = (0, _react.useRef)();
  var inputRefE = (0, _react.useRef)();
  var actionRefS = (0, _react.useRef)();
  var actionRefE = (0, _react.useRef)(); // 0 没有编辑中 1 第一个编辑中 2 非第一个编辑中

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isFirstEditing = _useState6[0],
      setIsFirstEditing = _useState6[1];

  var _useContext = (0, _react.useContext)(_ControllerContext.default),
      contextStatus = _useContext.status;

  var readonly = option !== 'custom';

  var _ref3 = (0, _isArray.default)(nullable) ? nullable : [],
      _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
      nullableS = _ref4[0],
      nullableE = _ref4[1];

  var precision = type === 'month' ? 'month' : null; // eslint-disable-next-line @typescript-eslint/no-unused-vars

  var rangeDisplay = display.range,
      pickerDisplay = (0, _objectWithoutProperties2.default)(display, _excluded2);

  var _ref5 = (0, _isArray.default)(shortcuts) ? shortcuts : [],
      _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
      shortcutsS = _ref6[0],
      shortcutsE = _ref6[1];

  var startRangeInputRef = (0, _react.useRef)(null);

  var _useState7 = (0, _react.useState)(200),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      startRangeInputWidth = _useState8[0],
      setStartRangeInputWidth = _useState8[1];

  (0, _useDidMount.default)(function () {
    (0, _newArrowCheck2.default)(this, _this3);

    var _ref7 = (0, _isArray.default)(value) ? value : [null, null],
        _ref8 = (0, _slicedToArray2.default)(_ref7, 2),
        valueS = _ref8[0],
        valueE = _ref8[1];

    var initialValue;

    if (option !== 'custom') {
      initialValue = getValueFromOption(options, option);
    } else {
      initialValue = [formatValue(valueS, nullableS, d), formatValue(valueE, nullableE, d)];
    }

    onInitialChange && onInitialChange(initialValue);
    updateValueWithoutCallOnChange(initialValue);
  }.bind(this));
  var handleStartChange = (0, _react.useCallback)(function (value, isClear) {
    (0, _newArrowCheck2.default)(this, _this3);

    var _cacheValue = (0, _slicedToArray2.default)(cacheValue, 2),
        valueE = _cacheValue[1];

    var newValue = [value, valueE];
    var rangeDateValidResult = (0, _utils.isRangeDateValid)(newValue, rules, precision);
    setRangeError(undefined);

    if (isClear) {
      var _actionRefS$current, _actionRefE$current;

      onChange(newValue);
      (_actionRefS$current = actionRefS.current) === null || _actionRefS$current === void 0 ? void 0 : _actionRefS$current.hide();
      (_actionRefE$current = actionRefE.current) === null || _actionRefE$current === void 0 ? void 0 : _actionRefE$current.hide();
    } else if (rangeDateValidResult !== true) {
      var _inputRefE$current;

      (_inputRefE$current = inputRefE.current) === null || _inputRefE$current === void 0 ? void 0 : _inputRefE$current.focus();

      if (rangeDateValidResult === 'startGreaterThanEnd') {
        var _actionRefE$current2;

        (_actionRefE$current2 = actionRefE.current) === null || _actionRefE$current2 === void 0 ? void 0 : _actionRefE$current2.clear();
      } else {
        setRangeError(locale[rangeDateValidResult + 'Tip']);
      }

      newValue[1] = null;
    } else if (isFirstEditing === 1) {
      var _inputRefE$current2;

      (_inputRefE$current2 = inputRefE.current) === null || _inputRefE$current2 === void 0 ? void 0 : _inputRefE$current2.focus();
    } else {
      onChange(newValue);
    }

    setCacheValue(formatRangeValue(newValue, nullable, d));
  }.bind(this), [cacheValue, rules, precision, isFirstEditing, locale, onChange, nullable, d]);
  var handleEndChange = (0, _react.useCallback)(function (value, isClear) {
    (0, _newArrowCheck2.default)(this, _this3);

    var _cacheValue2 = (0, _slicedToArray2.default)(cacheValue, 1),
        valueS = _cacheValue2[0];

    var newValue = [valueS, value];
    var rangeDateValidResult = (0, _utils.isRangeDateValid)(newValue, rules, precision);
    setRangeError(undefined);

    if (isClear) {
      var _actionRefS$current2, _actionRefE$current3;

      onChange(newValue);
      (_actionRefS$current2 = actionRefS.current) === null || _actionRefS$current2 === void 0 ? void 0 : _actionRefS$current2.hide();
      (_actionRefE$current3 = actionRefE.current) === null || _actionRefE$current3 === void 0 ? void 0 : _actionRefE$current3.hide();
    } else if (rangeDateValidResult !== true) {
      var _inputRefS$current;

      (_inputRefS$current = inputRefS.current) === null || _inputRefS$current === void 0 ? void 0 : _inputRefS$current.focus();

      if (rangeDateValidResult === 'startGreaterThanEnd') {
        var _actionRefS$current3;

        (_actionRefS$current3 = actionRefS.current) === null || _actionRefS$current3 === void 0 ? void 0 : _actionRefS$current3.clear();
      } else {
        setRangeError(locale[rangeDateValidResult + 'Tip']);
      }

      newValue[0] = null;
    } else if (isFirstEditing === 1) {
      var _inputRefS$current2;

      (_inputRefS$current2 = inputRefS.current) === null || _inputRefS$current2 === void 0 ? void 0 : _inputRefS$current2.focus();
    } else {
      onChange(newValue);
    }

    setCacheValue(formatRangeValue(newValue, nullable, d));
  }.bind(this), [cacheValue, rules, precision, isFirstEditing, locale, onChange, nullable, d]);
  var onClearS = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    handleStartChange(null, true);
  }.bind(this), [handleStartChange]);
  var onClearE = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    handleEndChange(null, true);
  }.bind(this), [handleEndChange]);
  var handleOptionChange = (0, _react.useCallback)(function (value) {
    (0, _newArrowCheck2.default)(this, _this3);
    if (value !== 'custom') onChange(getValueFromOption(options, value));
    onOptionChange(value);
  }.bind(this), [onChange, onOptionChange, options]);
  var handleInputMouseDown = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this3);
    if (e.target === e.currentTarget) e.preventDefault();
  }.bind(this), []);
  var sharedPickerProps = {
    size: size,
    format: format,
    display: pickerDisplay,
    disabled: disabled,
    popoverProps: _popoverProps,
    zIndex: zIndex,
    type: type,
    rules: rules,
    status: status
  };

  var _cacheValue3 = (0, _slicedToArray2.default)(cacheValue, 2),
      valueS = _cacheValue3[0],
      valueE = _cacheValue3[1];

  var _ref9 = (0, _isArray.default)(placeholder) ? placeholder : [],
      _ref10 = (0, _slicedToArray2.default)(_ref9, 2),
      _ref10$ = _ref10[0],
      placeholderS = _ref10$ === void 0 ? locale.placeholderRangeStart : _ref10$,
      _ref10$2 = _ref10[1],
      placeholderE = _ref10$2 === void 0 ? locale.placeholderRangeEnd : _ref10$2;

  var _useRangePicker = (0, _useRangePicker5.default)(_objectSpread(_objectSpread({
    value: valueS,
    onChange: handleStartChange,
    nullable: nullableS,
    placeholder: placeholderS,
    shortcuts: shortcutsS,
    actionRef: actionRefS,
    onClear: onClearS
  }, sharedPickerProps), {}, {
    rules: isFirstEditing === 2 ? _objectSpread(_objectSpread({}, rules), {}, {
      range: [(_rules$range = rules.range) === null || _rules$range === void 0 ? void 0 : _rules$range[0], cacheValue[1]]
    }) : rules,
    prefix: true,
    suffix: locale.to
  })),
      _useRangePicker2 = (0, _slicedToArray2.default)(_useRangePicker, 8),
      inputPropsS = _useRangePicker2[0],
      inputWrapPropsS = _useRangePicker2[1],
      calendarPropsS = _useRangePicker2[2],
      footerPropsS = _useRangePicker2[3],
      _useRangePicker2$ = _useRangePicker2[4],
      activeS = _useRangePicker2$.active,
      errorS = _useRangePicker2$.error,
      popoverProps = _useRangePicker2[5],
      popupProps = _useRangePicker2[6],
      _useRangePicker2$2 = _useRangePicker2[7],
      hasTime = _useRangePicker2$2.hasTime,
      isMonth = _useRangePicker2$2.isMonth;

  var _useRangePicker3 = (0, _useRangePicker5.default)(_objectSpread(_objectSpread({
    value: valueE,
    onChange: handleEndChange,
    nullable: nullableE,
    placeholder: placeholderE,
    shortcuts: shortcutsE,
    actionRef: actionRefE,
    onClear: onClearE
  }, sharedPickerProps), {}, {
    rules: isFirstEditing === 2 ? _objectSpread(_objectSpread({}, rules), {}, {
      range: [cacheValue[0], (_rules$range2 = rules.range) === null || _rules$range2 === void 0 ? void 0 : _rules$range2[1]]
    }) : rules
  })),
      _useRangePicker4 = (0, _slicedToArray2.default)(_useRangePicker3, 5),
      inputPropsE = _useRangePicker4[0],
      inputWrapPropsE = _useRangePicker4[1],
      calendarPropsE = _useRangePicker4[2],
      footerPropsE = _useRangePicker4[3],
      _useRangePicker4$ = _useRangePicker4[4],
      activeE = _useRangePicker4$.active,
      errorE = _useRangePicker4$.error;

  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    if (activeS || activeE) return;
    setCacheValue(formatRangeValue(value, nullable, d));
  }.bind(this), [activeE, activeS, d, nullable, value]);
  (0, _react.useEffect)(function () {
    var _this4 = this;

    (0, _newArrowCheck2.default)(this, _this3);

    if (!activeS && !activeE) {
      setIsFirstEditing(0);
    } else {
      setIsFirstEditing(function (v) {
        (0, _newArrowCheck2.default)(this, _this4);
        return v === 0 ? 1 : 2;
      }.bind(this));
    }
  }.bind(this), [activeE, activeS]);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this3);

    if (activeE) {
      var _startRangeInputRef$c;

      setStartRangeInputWidth(((_startRangeInputRef$c = startRangeInputRef.current) === null || _startRangeInputRef$c === void 0 ? void 0 : _startRangeInputRef$c.offsetWidth) || 200);
    }
  }.bind(this), [activeE]);
  var CalendarComp = isMonth ? _Calendar.default.Month : hasTime ? _Calendar.default : _Calendar.TwoSide;
  return /*#__PURE__*/_react.default.createElement(_style.RangeContainer, (0, _extends2.default)({}, rest, {
    disabled: disabled
  }), !!options.length && /*#__PURE__*/_react.default.createElement(_style.RangeSelect, (0, _extends2.default)({}, selectProps, {
    options: options.map(function (option) {
      (0, _newArrowCheck2.default)(this, _this3);
      return (0, _pick.default)(option, ['label', 'value', 'disabled']);
    }.bind(this)),
    size: size,
    value: option,
    disabled: disabled,
    onChange: handleOptionChange
  })), readonly && customRender !== null && customRender !== void 0 && customRender.readonlyDisplay ? customRender.readonlyDisplay(cacheValue) : /*#__PURE__*/_react.default.createElement(_Popover.default, (0, _extends2.default)({}, popoverProps, {
    visible: activeS || activeE,
    popup: /*#__PURE__*/_react.default.createElement(_style.SPopup, (0, _extends2.default)({}, popupProps, {
      endInputHighlight: activeE
    }), /*#__PURE__*/_react.default.createElement(_style.Arrow, {
      style: {
        left: activeE ? startRangeInputWidth + 'px' : '20px'
      }
    }), /*#__PURE__*/_react.default.createElement(_style.RangeCalendarWrap, {
      visible: activeS
    }, /*#__PURE__*/_react.default.createElement(CalendarComp, (0, _extends2.default)({}, calendarPropsS, {
      rangeValue: [calendarPropsS.value, cacheValue === null || cacheValue === void 0 ? void 0 : cacheValue[1]],
      value: null
    })), /*#__PURE__*/_react.default.createElement(_Footer.default, (0, _extends2.default)({}, footerPropsS, {
      tip: rangeError || errorS || rangeTip,
      isError: !!rangeError || !!errorS
    }))), /*#__PURE__*/_react.default.createElement(_style.RangeCalendarWrap, {
      visible: activeE
    }, /*#__PURE__*/_react.default.createElement(CalendarComp, (0, _extends2.default)({}, calendarPropsE, {
      rangeValue: [cacheValue === null || cacheValue === void 0 ? void 0 : cacheValue[0], calendarPropsE.value],
      value: null
    })), /*#__PURE__*/_react.default.createElement(_Footer.default, (0, _extends2.default)({}, footerPropsE, {
      tip: rangeError || errorE || rangeTip,
      isError: !!rangeError || !!errorE
    }))))
  }), /*#__PURE__*/_react.default.createElement(_style.SRangeInputWrap, {
    size: size,
    disabled: disabled,
    focused: activeS || activeE,
    readonly: readonly,
    onMouseDown: handleInputMouseDown,
    status: status || contextStatus
  }, readonly ? /*#__PURE__*/_react.default.createElement("span", {
    className: _style.readonlyInputCls
  }, inputPropsS.value) : /*#__PURE__*/_react.default.createElement(_style.RangeInputWrap, (0, _extends2.default)({}, inputWrapPropsS, {
    ref: startRangeInputRef
  }), /*#__PURE__*/_react.default.createElement(_Input.default, (0, _extends2.default)({}, inputPropsS, {
    ref: inputRefS
  }))), readonly ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: _style.dateSeparatorCls
  }, "-"), /*#__PURE__*/_react.default.createElement("span", {
    className: _style.readonlyInputCls
  }, inputPropsE.value)) : /*#__PURE__*/_react.default.createElement(_style.RangeInputWrap, (0, _extends2.default)({}, inputWrapPropsE, {
    isEnd: true
  }), /*#__PURE__*/_react.default.createElement(_Input.default, (0, _extends2.default)({}, inputPropsE, {
    ref: inputRefE
  }))))));
}.bind(void 0);

Range.propTypes = {
  onChange: _propTypes.default.func,
  onInitialChange: _propTypes.default.func,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.node.isRequired,
    value: _propTypes.default.string.isRequired,
    disabled: _propTypes.default.bool,
    range: _propTypes.default.shape({})
  })),
  option: _propTypes.default.string,
  defaultOption: _propTypes.default.string,
  onOptionChange: _propTypes.default.func,
  hideOptions: _propTypes.default.bool,
  format: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  display: _propTypes.default.shape({
    date: _propTypes.default.shape({
      format: _propTypes.default.string,
      show: _propTypes.default.bool
    }),
    hour: _propTypes.default.bool,
    minute: _propTypes.default.bool,
    second: _propTypes.default.bool,
    range: _propTypes.default.shape({
      format: _propTypes.default.string
    })
  }),
  rules: _propTypes.default.shape({
    maxRange: _propTypes.default.any,
    minRange: _propTypes.default.any
  }),
  status: _propTypes.default.oneOf(['default', 'error']),
  type: _propTypes.default.oneOf(['date', 'month']),
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  disabled: _propTypes.default.bool,
  zIndex: _propTypes.default.number,
  selectProps: _propTypes.default.any,
  popoverProps: _propTypes.default.any,
  customRender: _propTypes.default.shape({
    readonlyDisplay: _propTypes.default.func
  }),
  rangeTip: _propTypes.default.node,
  locale: _propTypes.default.any
};

var _default = /*#__PURE__*/(0, _react.memo)(Range);

exports.default = _default;