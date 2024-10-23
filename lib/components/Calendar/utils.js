"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidDate = exports.isDateDisabled = exports.getDisabledRule = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _moment = _interopRequireDefault(require("moment"));

var _this = void 0;

var getDisabledRule = function getDisabledRule(rules) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  if (!rules) return {};
  var disabledRule = {};

  if (rules.range) {
    disabledRule.date = function (date, value) {
      (0, _newArrowCheck2.default)(this, _this2);
      return !!isDateDisabled(date, value, rules);
    }.bind(this);

    disabledRule.month = function (date) {
      (0, _newArrowCheck2.default)(this, _this2);
      return !!isMonthDisabled(date, rules);
    }.bind(this);

    disabledRule.year = function (date) {
      (0, _newArrowCheck2.default)(this, _this2);
      return !!isYearDisabled(date, rules);
    }.bind(this);

    disabledRule.decade = function (date) {
      (0, _newArrowCheck2.default)(this, _this2);
      return !!isDecadeDisabled(date, rules);
    }.bind(this);

    return disabledRule;
  }

  return {};
}.bind(void 0);

exports.getDisabledRule = getDisabledRule;

var isDateDisabled = function isDateDisabled(date, value, rules) {
  (0, _newArrowCheck2.default)(this, _this);
  date = (0, _moment.default)(+date);

  if (!rules) {
    return false;
  }

  var range = rules.range,
      custom = rules.custom;

  if (range) {
    var _range = (0, _slicedToArray2.default)(range, 2),
        start = _range[0],
        end = _range[1];

    if (start != null && (0, _moment.default)(+date).endOf('date') < start || end != null && (0, _moment.default)(+date).startOf('date') > end) {
      return true;
    }
  }

  if (custom) {
    return custom((0, _moment.default)(+date), value == null ? value : (0, _moment.default)(+value));
  }
}.bind(void 0);

exports.isDateDisabled = isDateDisabled;

var isMonthDisabled = function isMonthDisabled(date, rules) {
  (0, _newArrowCheck2.default)(this, _this);
  date = (0, _moment.default)(+date);
  if (!rules) return false;
  var range = rules.range;

  if (range) {
    var _range2 = (0, _slicedToArray2.default)(range, 2),
        start = _range2[0],
        end = _range2[1];

    if (start != null && (0, _moment.default)(+date).endOf('month') < start || end != null && (0, _moment.default)(+date).startOf('month') > end) {
      return true;
    }
  }
}.bind(void 0);

var isYearDisabled = function isYearDisabled(date, rules) {
  (0, _newArrowCheck2.default)(this, _this);
  date = (0, _moment.default)(+date);
  if (!rules) return false;
  var range = rules.range;

  if (range) {
    var _range3 = (0, _slicedToArray2.default)(range, 2),
        start = _range3[0],
        end = _range3[1];

    if (start != null && (0, _moment.default)(+date).endOf('year') < start || end != null && (0, _moment.default)(+date).startOf('year') > end) {
      return true;
    }
  }
}.bind(void 0);

var isDecadeDisabled = function isDecadeDisabled(date, rules) {
  (0, _newArrowCheck2.default)(this, _this);
  date = (0, _moment.default)(+date);
  if (!rules) return false;
  var range = rules.range;

  if (range) {
    var _range4 = (0, _slicedToArray2.default)(range, 2),
        start = _range4[0],
        end = _range4[1];

    var baseYear = (date.year() / 10 | 0) * 10;

    if (start != null && (0, _moment.default)(+date).set('year', baseYear + 10).endOf('year') < start || end != null && (0, _moment.default)(+date).set('year', baseYear).startOf('year') > end) {
      return true;
    }
  }
}.bind(void 0);

var getValidDate = function getValidDate(date, rules) {
  (0, _newArrowCheck2.default)(this, _this);
  var d = (0, _moment.default)(+date);

  if (!rules) {
    return d;
  }

  var range = rules.range;

  if (range) {
    var _range5 = (0, _slicedToArray2.default)(range, 2),
        start = _range5[0],
        end = _range5[1];

    if (start != null && d < start) {
      return (0, _moment.default)(+start);
    }

    if (end != null && d > end) {
      return (0, _moment.default)(+end);
    }
  }

  return d;
}.bind(void 0);

exports.getValidDate = getValidDate;