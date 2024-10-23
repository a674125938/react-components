"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

var months = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_').map(function (v) {
  (0, _newArrowCheck2.default)(this, _this);
  return v.substr(0, 3);
}.bind(void 0));
var weekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_').map(function (v) {
  (0, _newArrowCheck2.default)(this, _this);
  return v.substr(0, 2);
}.bind(void 0));
var _default = {
  month: '',
  year: '',
  monthBeforeYear: true,
  months: months,
  weekdays: weekdays,
  disabledTip: 'Invalid date'
};
exports.default = _default;