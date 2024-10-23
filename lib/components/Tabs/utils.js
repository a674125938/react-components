"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTransform = setTransform;
exports.isTransform3dSupported = isTransform3dSupported;
exports.getStyle = getStyle;
exports.isVertical = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.MozTransform = v;
}

function isTransform3dSupported(style) {
  return ('transform' in style || 'webkitTransform' in style || 'MozTransform' in style) && window.atob;
}

var isVertical = function isVertical(tabBarPosition) {
  (0, _newArrowCheck2.default)(this, _this);
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}.bind(void 0);

exports.isVertical = isVertical;

function getStyle(el, property) {
  return +window.getComputedStyle(el).getPropertyValue(property).replace('px', '');
}