"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Panel", {
  enumerable: true,
  get: function get() {
    return _Panel.default;
  }
});
exports.default = void 0;

var _type = require("../../type");

var _Collapse = _interopRequireDefault(require("./Collapse"));

var _Panel = _interopRequireDefault(require("./Panel"));

var ExportCollapse = (0, _type.ExportComponent)(_Collapse.default, {
  Panel: _Panel.default
});
var _default = ExportCollapse;
exports.default = _default;