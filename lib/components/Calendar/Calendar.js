"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _utils = require("./utils");

var _style = require("./style");

var _HeaderSwitcher = _interopRequireDefault(require("./HeaderSwitcher"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _Month = _interopRequireDefault(require("./Month"));

var _Cell = _interopRequireDefault(require("./Cell"));

var _HeaderButton = _interopRequireDefault(require("./HeaderButton"));

var _this2 = void 0;

var _excluded = ["onSelect", "onChange", "rules", "locale"],
    _excluded2 = ["type"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DateCalendar = /*#__PURE__*/_react.default.memo(function DateCalendar(_ref) {
  var _this = this;

  var onSelect = _ref.onSelect,
      onChange = _ref.onChange,
      rules = _ref.rules,
      _locale = _ref.locale,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var disabledRule = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    return (0, _utils.getDisabledRule)(rules);
  }.bind(this), [rules]);
  var handleChange = (0, _react.useCallback)(function (v) {
    (0, _newArrowCheck2.default)(this, _this);
    var validDate = (0, _utils.getValidDate)(v, rules);
    onChange && onChange(validDate);
    onSelect && onSelect(validDate);
  }.bind(this), [onChange, onSelect, rules]);
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
  return /*#__PURE__*/_react.default.createElement(_style.SCalendar, (0, _extends2.default)({
    prefixCls: _style.prefixCls,
    disabledRule: disabledRule,
    onChange: handleChange,
    locale: calendarLocale,
    monthBeforeYear: locale.monthBeforeYear,
    components: {
      HeaderSwitcher: renderHeaderSwitcher,
      Cell: _Cell.default,
      HeaderButton: _HeaderButton.default
    }
  }, rest));
});

var Calendar = function Calendar(_ref2) {
  (0, _newArrowCheck2.default)(this, _this2);
  var type = _ref2.type,
      props = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  return type === 'month' ? /*#__PURE__*/_react.default.createElement(_Month.default, props) : /*#__PURE__*/_react.default.createElement(DateCalendar, props);
}.bind(void 0);

Calendar.propTypes = {
  onSelect: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onCurrentChange: _propTypes.default.func,
  customStyle: _propTypes.default.shape({
    boxShadow: _propTypes.default.bool
  }),
  type: _propTypes.default.oneOf(['date', 'month']),
  locale: _propTypes.default.any
};

var _default = /*#__PURE__*/(0, _react.memo)(Calendar);

exports.default = _default;