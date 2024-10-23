"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAncestorFixed;

var _utils = _interopRequireDefault(require("./utils"));

var getParent = _utils.default.getParent;

function isAncestorFixed(element) {
  if (_utils.default.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = _utils.default.getDocument(element);

  var body = doc.body;
  var parent = null;

  for (parent = getParent(element); // 修复元素位于 document.documentElement 下导致崩溃问题
  parent && parent !== body && parent !== doc; parent = getParent(parent)) {
    var positionStyle = _utils.default.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}