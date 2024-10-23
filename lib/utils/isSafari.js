"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome/') > -1;
var isSafari = !isChrome && navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
var _default = isSafari;
exports.default = _default;