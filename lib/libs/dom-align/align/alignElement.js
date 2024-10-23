"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _align = _interopRequireDefault(require("./align"));

var _getOffsetParent = _interopRequireDefault(require("../getOffsetParent"));

var _getVisibleRectForElement = _interopRequireDefault(require("../getVisibleRectForElement"));

var _getRegion = _interopRequireDefault(require("../getRegion"));

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = (0, _getVisibleRectForElement.default)(target, alwaysByViewport);
  var targetRegion = (0, _getRegion.default)(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = (0, _getRegion.default)(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return (0, _align.default)(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = _getOffsetParent.default;
alignElement.__getVisibleRectForElement = _getVisibleRectForElement.default;
var _default = alignElement;
exports.default = _default;