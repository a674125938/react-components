"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = require("../../type");

var _LocaleProvider = _interopRequireDefault(require("./LocaleProvider"));

var _useLocale = _interopRequireDefault(require("./useLocale"));

var ExportLocaleProvider = (0, _type.ExportComponent)(_LocaleProvider.default, {
  useLocale: _useLocale.default
});
var _default = ExportLocaleProvider;
exports.default = _default;