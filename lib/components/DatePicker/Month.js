"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.displayToFormatAndTimeMode = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _Input = _interopRequireDefault(require("../../components/Input"));

var _Calendar = _interopRequireDefault(require("../../components/Calendar"));

var _Popover = _interopRequireDefault(require("../../components/Popover"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _usePopoverConfig = _interopRequireDefault(require("../../hooks/usePopoverConfig"));

var _style = require("./style");

var _Footer = _interopRequireDefault(require("./Footer"));

var _usePicker3 = _interopRequireDefault(require("./usePicker"));

var _utils = require("./utils");

var _this = void 0;

var displayToFormatAndTimeMode = function displayToFormatAndTimeMode(display) {
  (0, _newArrowCheck2.default)(this, _this);
  var format = 'YYYY-MM';

  if (display) {
    if (display.date && display.date.format) {
      format = display.date.format;
    }
  }

  return [[format, (0, _utils.formatToShort)(format)]];
}.bind(void 0);
/**
 * @deprecated 请使用 ```<DatePicker type='month' />``` 替换
 */


exports.displayToFormatAndTimeMode = displayToFormatAndTimeMode;

var Month = function Month(props) {
  (0, _newArrowCheck2.default)(this, _this);

  var _usePicker = (0, _usePicker3.default)(props, displayToFormatAndTimeMode, 'month'),
      _usePicker2 = (0, _slicedToArray2.default)(_usePicker, 8),
      inputProps = _usePicker2[0],
      containerProps = _usePicker2[1],
      popoverProps = _usePicker2[2],
      popupProps = _usePicker2[3],
      calendarProps = _usePicker2[4],
      footerProps = _usePicker2[6],
      error = _usePicker2[7].error;

  var popoverConfigProps = (0, _usePopoverConfig.default)();
  return /*#__PURE__*/_react.default.createElement(_style.PickerContainer, (0, _extends2.default)({
    isMonth: true
  }, containerProps), /*#__PURE__*/_react.default.createElement(_Popover.default, (0, _extends2.default)({
    popup: /*#__PURE__*/_react.default.createElement(_style.SPopup, popupProps, /*#__PURE__*/_react.default.createElement(_style.Arrow, null), /*#__PURE__*/_react.default.createElement(_Calendar.default.Month, calendarProps), /*#__PURE__*/_react.default.createElement(_Footer.default, (0, _extends2.default)({}, footerProps, {
      tip: error,
      isError: !!error
    })))
  }, popoverConfigProps, popoverProps), /*#__PURE__*/_react.default.createElement(_Input.default, (0, _extends2.default)({}, inputProps, {
    prefix: /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      type: "calendar"
    }),
    block: true
  }))));
}.bind(void 0);

var _default = /*#__PURE__*/_react.default.memo(Month);

exports.default = _default;