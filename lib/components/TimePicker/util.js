"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollTo = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _raf = _interopRequireDefault(require("raf"));

var _this = void 0;

var scrollMap = {};

var _scrollTo2 = function _scrollTo(element, to, duration, uid, tag) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  if (tag != scrollMap[uid]) return;

  if (duration <= 0) {
    (0, _raf.default)(function () {
      (0, _newArrowCheck2.default)(this, _this2);
      element.scrollTop = to;
    }.bind(this));
    return;
  }

  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  (0, _raf.default)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    element.scrollTop += perTick;
    if (element.scrollTop === to) return;

    _scrollTo2(element, to, duration - 10, uid, tag);
  }.bind(this));
}.bind(void 0);

var scrollTo = function scrollTo(element, to, duration, uid) {
  (0, _newArrowCheck2.default)(this, _this);

  _scrollTo2(element, to, duration, uid, scrollMap[uid] = (scrollMap[uid] | 0) + 1);
}.bind(void 0);

exports.scrollTo = scrollTo;