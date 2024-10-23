"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shapes = exports.Sizes = exports.StyleTypes = void 0;

var _style = require("../../style");

var StyleTypes = (0, _style.tuple)('primary', 'border', 'border-gray');
exports.StyleTypes = StyleTypes;
var Sizes = (0, _style.tuple)('sm', 'md', 'lg');
exports.Sizes = Sizes;
var Shapes = (0, _style.tuple)('circle', 'square');
exports.Shapes = Shapes;