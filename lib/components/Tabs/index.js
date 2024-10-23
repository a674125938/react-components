"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = require("../../type");

var _Tabs = _interopRequireDefault(require("./Tabs"));

var _Pane = _interopRequireDefault(require("./Pane"));

var _shared = require("./shared");

var ExportTabs = (0, _type.ExportComponent)(_Tabs.default, {
  Pane: _Pane.default,
  StyleTypes: _shared.StyleTypes,
  StyleType: _shared.StyleTypes,
  Sizes: _shared.Sizes,
  Size: _shared.Sizes,
  TabBarPositions: _shared.TabBarPositions,
  Position: _shared.TabBarPositions
});
var _default = ExportTabs;
exports.default = _default;