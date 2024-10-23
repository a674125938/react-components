"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controllerPrefix = exports.prefixCls = void 0;

var _config = _interopRequireDefault(require("../../../config"));

var _prefixCls = _config.default.prefixCls;
var prefixCls = _prefixCls + '-compact';
exports.prefixCls = prefixCls;
var controllerPrefix = prefixCls + '-controller';
exports.controllerPrefix = controllerPrefix;