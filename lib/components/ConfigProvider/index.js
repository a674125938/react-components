"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../../config");

var _type = require("../../type");

var _ConfigProvider = _interopRequireDefault(require("./ConfigProvider"));

var ExportConfigProvider = (0, _type.ExportComponent)(_ConfigProvider.default, {
  setConfig: _config.setConfig
});
var _default = ExportConfigProvider;
exports.default = _default;