"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("./utils"));

/**
 * 得到会导致元素显示不全的祖先元素
 */
var getParent = _utils.default.getParent;

function getOffsetParent(element) {
  if (_utils.default.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
  <div style="width: 50px;height: 100px;overflow: hidden">
  <div style="width: 50px;height: 100px;position: relative;" id="d6">
  元素 6 高 100px 宽 50px<br/>
  </div>
  </div>
  */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法


  var doc = _utils.default.getDocument(element);

  var body = doc.body;
  var parent;

  var positionStyle = _utils.default.css(element, 'position');

  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }

  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = _utils.default.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var _default = getOffsetParent;
exports.default = _default;