"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.displayToFormatAndTimeMode = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Input = _interopRequireDefault(require("../../components/Input"));

var _Calendar = _interopRequireDefault(require("../../components/Calendar"));

var _Popover = _interopRequireDefault(require("../../components/Popover"));

var _Time = _interopRequireDefault(require("../../components/TimePicker/Time"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _style = require("./style");

var _Footer = _interopRequireDefault(require("./Footer"));

var _usePicker3 = _interopRequireDefault(require("./usePicker"));

var _utils = require("./utils");

var _Month = _interopRequireDefault(require("./Month"));

var _this = void 0;

var displayToFormatAndTimeMode = function displayToFormatAndTimeMode(display) {
  (0, _newArrowCheck2.default)(this, _this);
  var format = 'YYYY-MM-DD HH:mm:ss';
  var timeFormatA = ['HH', 'mm', 'ss'];

  if (display) {
    var dateFormat = 'YYYY-MM-DD';

    if (display.date && display.date.format) {
      dateFormat = display.date.format;
    }

    timeFormatA = [];

    if (display.hour !== false) {
      timeFormatA.push('HH');
    }

    if (display.minute !== false) {
      timeFormatA.push('mm');
    }

    if (display.second !== false) {
      timeFormatA.push('ss');
    }

    format = timeFormatA.length ? dateFormat + ' ' + timeFormatA.join(':') : dateFormat;
  }

  return [[format, (0, _utils.formatToShort)(format)], timeFormatA];
}.bind(void 0);

exports.displayToFormatAndTimeMode = displayToFormatAndTimeMode;

var DatePickerForDate = function DatePickerForDate(props) {
  var _timeProps$mode;

  (0, _newArrowCheck2.default)(this, _this);

  var _usePicker = (0, _usePicker3.default)(props, displayToFormatAndTimeMode, 'date'),
      _usePicker2 = (0, _slicedToArray2.default)(_usePicker, 8),
      inputProps = _usePicker2[0],
      containerProps = _usePicker2[1],
      popoverProps = _usePicker2[2],
      popupProps = _usePicker2[3],
      calendarProps = _usePicker2[4],
      timeProps = _usePicker2[5],
      footerProps = _usePicker2[6],
      error = _usePicker2[7].error;

  var hasTime = !!((_timeProps$mode = timeProps.mode) !== null && _timeProps$mode !== void 0 && _timeProps$mode.length);
  return /*#__PURE__*/_react.default.createElement(_style.PickerContainer, (0, _extends2.default)({}, containerProps, {
    hasTime: hasTime
  }), /*#__PURE__*/_react.default.createElement(_Popover.default, (0, _extends2.default)({}, popoverProps, {
    popup: /*#__PURE__*/_react.default.createElement(_style.SPopup, popupProps, /*#__PURE__*/_react.default.createElement(_style.Arrow, null), /*#__PURE__*/_react.default.createElement(_Calendar.default, (0, _extends2.default)({}, calendarProps, {
      sidebar: hasTime ? /*#__PURE__*/_react.default.createElement(_Time.default, timeProps) : null
    })), /*#__PURE__*/_react.default.createElement(_Footer.default, (0, _extends2.default)({}, footerProps, {
      tip: error,
      isError: !!error
    })))
  }), /*#__PURE__*/_react.default.createElement(_Input.default, (0, _extends2.default)({}, inputProps, {
    prefix: /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      type: "calendar"
    }),
    block: true
  }))));
}.bind(void 0);

DatePickerForDate.propTypes = {
  onChange: _propTypes.default.func,
  rules: _propTypes.default.any,
  format: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  nullable: _propTypes.default.bool,
  display: _propTypes.default.shape({
    date: _propTypes.default.shape({
      format: _propTypes.default.string,
      show: _propTypes.default.bool
    }),
    hour: _propTypes.default.bool,
    minute: _propTypes.default.bool,
    second: _propTypes.default.bool
  }),
  disabled: _propTypes.default.bool,
  status: _propTypes.default.oneOf(['default', 'error']),
  placeholder: _propTypes.default.string,
  shortcuts: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.oneOf([null])]),
  popoverProps: _propTypes.default.any,
  type: _propTypes.default.oneOf(['date', 'month']),
  locale: _propTypes.default.any,
  zIndex: _propTypes.default.number,
  getCalendarContainer: _propTypes.default.func
};

var DatePicker = function DatePicker(props) {
  (0, _newArrowCheck2.default)(this, _this);
  var type = props.type;
  return type === 'month' ? /*#__PURE__*/_react.default.createElement(_Month.default, props) : /*#__PURE__*/_react.default.createElement(DatePickerForDate, props);
}.bind(void 0);

DatePicker.propTypes = {
  onChange: _propTypes.default.func,
  rules: _propTypes.default.any,
  format: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  nullable: _propTypes.default.bool,
  display: _propTypes.default.shape({
    date: _propTypes.default.shape({
      format: _propTypes.default.string,
      show: _propTypes.default.bool
    }),
    hour: _propTypes.default.bool,
    minute: _propTypes.default.bool,
    second: _propTypes.default.bool
  }),
  disabled: _propTypes.default.bool,
  status: _propTypes.default.oneOf(['default', 'error']),
  placeholder: _propTypes.default.string,
  shortcuts: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.oneOf([null])]),
  popoverProps: _propTypes.default.any,
  type: _propTypes.default.oneOf(['date', 'month']),
  locale: _propTypes.default.any,
  zIndex: _propTypes.default.number,
  getCalendarContainer: _propTypes.default.func
};

var _default = /*#__PURE__*/_react.default.memo(DatePicker);

exports.default = _default;