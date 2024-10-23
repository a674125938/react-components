"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _utils = require("./utils");

var _style = require("./style");

var _HeaderSwitcher = _interopRequireDefault(require("./HeaderSwitcher"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _Cell = _interopRequireDefault(require("./Cell"));

var _HeaderButton = _interopRequireDefault(require("./HeaderButton"));

var _excluded = ["onSelect", "onChange", "rules", "locale", "current", "defaultCurrent", "onCurrentChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TwoSide = /*#__PURE__*/_react.default.memo(function TwoSide(_ref) {
  var _this = this;

  var onSelect = _ref.onSelect,
      onChange = _ref.onChange,
      rules = _ref.rules,
      _locale = _ref.locale,
      _current = _ref.current,
      _defaultCurrent = _ref.defaultCurrent,
      _onCurrentChange = _ref.onCurrentChange,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useUncontrolled = (0, _useUncontrolled3.default)(_current, _defaultCurrent || rest.value || rest.defaultValue || new Date(), _onCurrentChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      current = _useUncontrolled2[0],
      setCurrent = _useUncontrolled2[1];

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      firstDisplay = _useState2[0],
      setFirstDisplay = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      secondDisplay = _useState4[0],
      setSecondDisplay = _useState4[1];

  var handleFirstModeChange = (0, _react.useCallback)(function (mode) {
    (0, _newArrowCheck2.default)(this, _this);
    setSecondDisplay(mode === 'date');
  }.bind(this), []);
  var handleSecondModeChange = (0, _react.useCallback)(function (mode) {
    (0, _newArrowCheck2.default)(this, _this);
    setFirstDisplay(mode === 'date');
  }.bind(this), []);
  var handleSecondCurrentChange = (0, _react.useCallback)(function (d) {
    (0, _newArrowCheck2.default)(this, _this);
    setCurrent((0, _moment.default)(d).add({
      month: -1
    }));
  }.bind(this), [setCurrent]);
  var disabledRule = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    return (0, _utils.getDisabledRule)(rules);
  }.bind(this), [rules]);
  var handleChange = (0, _react.useCallback)(function (v) {
    (0, _newArrowCheck2.default)(this, _this);
    var validDate = (0, _utils.getValidDate)(v, rules);
    onChange && onChange(validDate);
  }.bind(this), [onChange, rules]);
  var locale = (0, _useLocale.default)(_zh_CN.default, 'Calendar', _locale);
  var calendarLocale = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    return {
      months: locale.months,
      weekdays: locale.weekdays
    };
  }.bind(this), [locale.months, locale.weekdays]);
  var renderHeaderSwitcher = (0, _react.useCallback)(function (props) {
    (0, _newArrowCheck2.default)(this, _this);
    return /*#__PURE__*/_react.default.createElement(_HeaderSwitcher.default, (0, _extends2.default)({}, props, {
      locale: locale
    }));
  }.bind(this), [locale]);
  return /*#__PURE__*/_react.default.createElement(_style.STwoSide, {
    className: !firstDisplay || !secondDisplay ? _style.twoSideSingleCls : ''
  }, /*#__PURE__*/_react.default.createElement(_style.SCalendar, (0, _extends2.default)({
    prefixCls: _style.prefixCls,
    disabledRule: disabledRule,
    onChange: handleChange,
    locale: calendarLocale,
    monthBeforeYear: locale.monthBeforeYear,
    components: {
      HeaderSwitcher: renderHeaderSwitcher,
      Cell: _Cell.default,
      HeaderButton: _HeaderButton.default
    },
    current: current,
    onCurrentChange: setCurrent,
    onModeChange: handleFirstModeChange,
    customStyle: {
      boxShadow: false
    },
    hidden: !firstDisplay
  }, rest)), /*#__PURE__*/_react.default.createElement(_style.SCalendar, (0, _extends2.default)({
    prefixCls: _style.prefixCls,
    disabledRule: disabledRule,
    onChange: handleChange,
    locale: calendarLocale,
    monthBeforeYear: locale.monthBeforeYear,
    components: {
      HeaderSwitcher: renderHeaderSwitcher,
      Cell: _Cell.default,
      HeaderButton: _HeaderButton.default
    },
    current: (0, _moment.default)(+current).add({
      month: 1
    }),
    onCurrentChange: handleSecondCurrentChange,
    onModeChange: handleSecondModeChange,
    customStyle: {
      boxShadow: false
    },
    hidden: !secondDisplay
  }, rest)));
});

var _default = /*#__PURE__*/(0, _react.memo)(TwoSide);

exports.default = _default;