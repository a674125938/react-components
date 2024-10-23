"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("./utils"));

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!_utils.default.isWindow(node) && node.nodeType !== 9) {
    offset = _utils.default.offset(node);
    w = _utils.default.outerWidth(node);
    h = _utils.default.outerHeight(node);
  } else {
    var win = _utils.default.getWindow(node);

    offset = {
      left: _utils.default.getWindowScrollLeft(win),
      top: _utils.default.getWindowScrollTop(win)
    };
    w = _utils.default.viewportWidth(win);
    h = _utils.default.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}

var _default = getRegion;
exports.default = _default;