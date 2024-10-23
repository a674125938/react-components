"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

var config = {
  prefixCls: 'uc-fe',
  actionListAutoAdjustment: false
};
var _default = config;
/** 只能在组件初始化时使用，否则会导致意外的问题 */

exports.default = _default;

var setConfig = function setConfig(_config) {
  (0, _newArrowCheck2.default)(this, _this);
  Object.assign(config, _config);
}.bind(void 0);

exports.setConfig = setConfig;