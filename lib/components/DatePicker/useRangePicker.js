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

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _Time = _interopRequireDefault(require("../../components/TimePicker/Time"));

var _DatePicker = require("./DatePicker");

var _Month = require("./Month");

var _usePicker3 = _interopRequireDefault(require("./usePicker"));

var _excluded = ["prefix", "type", "suffix", "actionRef", "onClear"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var inputCustomStyle = {
  border: 'none',
  boxShadow: 'none',
  background: 'none'
};

var useRangePicker = function useRangePicker(_ref) {
  var _timeProps$mode,
      _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var prefix = _ref.prefix,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'date' : _ref$type,
      suffix = _ref.suffix,
      actionRef = _ref.actionRef,
      onClear = _ref.onClear,
      pickProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var isMonth = type === 'month';

  var _usePicker = (0, _usePicker3.default)(_objectSpread({}, pickProps), isMonth ? _Month.displayToFormatAndTimeMode : _DatePicker.displayToFormatAndTimeMode, type, onClear),
      _usePicker2 = (0, _slicedToArray2.default)(_usePicker, 9),
      inputProps = _usePicker2[0],
      popoverProps = _usePicker2[2],
      popupProps = _usePicker2[3],
      calendarProps = _usePicker2[4],
      timeProps = _usePicker2[5],
      footerProps = _usePicker2[6],
      status = _usePicker2[7],
      actions = _usePicker2[8];

  var hasTime = !!((_timeProps$mode = timeProps.mode) !== null && _timeProps$mode !== void 0 && _timeProps$mode.length);
  (0, _react.useImperativeHandle)(actionRef, function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return {
      clear: actions.clear,
      hide: actions.hide
    };
  }.bind(this), [actions.clear, actions.hide]);
  return [// inputProps
  _objectSpread(_objectSpread({}, inputProps), {}, {
    customStyle: inputCustomStyle,
    block: true,
    prefix: prefix ? /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      type: "calendar"
    }) : null,
    suffix: suffix
  }), // inputWrapProps
  {
    isMonth: isMonth,
    hasTime: hasTime,
    hasPrefix: prefix,
    hasSuffix: !!suffix,
    disabled: inputProps.disabled,
    status: inputProps.status,
    clearable: inputProps.clearable
  }, // calendarProps
  _objectSpread(_objectSpread({}, calendarProps), {}, {
    sidebar: isMonth ? null : hasTime ? /*#__PURE__*/_react.default.createElement(_Time.default, timeProps) : null
  }), footerProps, status, popoverProps, // popupProps
  popupProps, {
    hasTime: hasTime,
    isMonth: isMonth
  }];
}.bind(void 0);

var _default = useRangePicker;
exports.default = _default;