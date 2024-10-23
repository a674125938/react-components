"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

var months = '1_2_3_4_5_6_7_8_9_10_11_12'.split('_').map(function (v) {
  (0, _newArrowCheck2.default)(this, _this);
  return "".concat(v, "\u6708");
}.bind(void 0));
var weekdays = '日_一_二_三_四_五_六'.split('_');
var _default = {
  month: '月',
  year: '年',
  monthBeforeYear: false,
  months: months,
  weekdays: weekdays,
  disabledTip: '当前日期不可选'
};
exports.default = _default;