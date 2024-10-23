"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sizes = exports.StyleTypes = exports.TabBarPositions = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("../../style");

var TabBarPositions = (0, _style.tuple)('top', 'bottom', 'left', 'right');
exports.TabBarPositions = TabBarPositions;
var StyleTypes = (0, _style.tuple)('default', 'ink', 'pure');
exports.StyleTypes = StyleTypes;
var Sizes = (0, _style.tuple)('sm', 'md', 'lg');
exports.Sizes = Sizes;