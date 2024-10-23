"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isDateDisabled", {
  enumerable: true,
  get: function get() {
    return _utils.isDateDisabled;
  }
});
Object.defineProperty(exports, "getValidDate", {
  enumerable: true,
  get: function get() {
    return _utils.getValidDate;
  }
});
exports.isRangeDateValid = exports.isDateValid = exports.setPrecision = exports.formatToShort = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _moment = _interopRequireDefault(require("moment"));

var _utils = require("../../components/Calendar/utils");

var _this = void 0;

var formatToShort = function formatToShort(format) {
  (0, _newArrowCheck2.default)(this, _this);
  return format.replace('YYYY', 'YY').replace('MM', 'M').replace('DD', 'D').replace('HH', 'H').replace('mm', 'm').replace('ss', 's');
}.bind(void 0);

exports.formatToShort = formatToShort;

var setPrecision = function setPrecision(v, precision) {
  (0, _newArrowCheck2.default)(this, _this);

  if (precision) {
    v = (0, _moment.default)(+v).startOf(precision);
  }

  return v;
}.bind(void 0);

exports.setPrecision = setPrecision;

var isRangeDateValid = function isRangeDateValid(value, rules, precision) {
  (0, _newArrowCheck2.default)(this, _this);

  var _value = (0, _slicedToArray2.default)(value, 2),
      start = _value[0],
      end = _value[1];

  start = start == null ? null : (0, _moment.default)(+start);
  end = end == null ? null : (0, _moment.default)(+end);

  if (precision) {
    start && start.startOf(precision);
    end && end.startOf(precision);
  }

  var range = rules.range,
      maxRange = rules.maxRange,
      minRange = rules.minRange;

  if (range) {
    var _range = (0, _slicedToArray2.default)(range, 2),
        s = _range[0],
        e = _range[1];

    s = s == null ? null : (0, _moment.default)(+s);
    e = e == null ? null : (0, _moment.default)(+e);

    if (precision) {
      s && s.startOf(precision);
      e && e.startOf(precision);
    }

    if (s != null && start != null && start < s) {
      return 'rangeError';
    }

    if (e != null && end != null && end > e) {
      return 'rangeError';
    }
  }

  if (start == null || end == null) {
    return true;
  }

  if (start > end) {
    return 'startGreaterThanEnd';
  }

  if (maxRange && (0, _moment.default)(start).add(maxRange) < end) {
    return 'maxRangeError';
  }

  if (minRange && (0, _moment.default)(end).subtract(minRange) < start) {
    return 'minRangeError';
  }

  return true;
}.bind(void 0);

exports.isRangeDateValid = isRangeDateValid;

var isDateValid = function isDateValid(date, value, rules) {
  (0, _newArrowCheck2.default)(this, _this);
  date = (0, _moment.default)(+date);

  if (!rules) {
    return false;
  }

  var range = rules.range,
      custom = rules.custom;

  if (range) {
    var _range2 = (0, _slicedToArray2.default)(range, 2),
        start = _range2[0],
        end = _range2[1];

    if (start != null) start = (0, _moment.default)(+start).startOf('second');
    if (end != null) end = (0, _moment.default)(+end).startOf('second');
    var v = date.startOf('second');

    if (start != null && v < start || end != null && v > end) {
      return true;
    }
  }

  if (custom) {
    return custom(date, value == null ? value : (0, _moment.default)(+value));
  }
}.bind(void 0);

exports.isDateValid = isDateValid;