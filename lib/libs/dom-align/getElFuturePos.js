"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getAlignOffset = _interopRequireDefault(require("./getAlignOffset"));

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = (0, _getAlignOffset.default)(refNodeRegion, points[1]);
  var p2 = (0, _getAlignOffset.default)(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

var _default = getElFuturePos;
exports.default = _default;