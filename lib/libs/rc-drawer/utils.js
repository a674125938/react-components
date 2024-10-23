"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataToArray = dataToArray;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.transformArguments = transformArguments;
exports.isNumeric = exports.transitionEnd = exports.transitionStr = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

function dataToArray(vars) {
  if (Array.isArray(vars)) {
    return vars;
  }

  return [vars];
}

var transitionEndObject = {
  transition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend'
};
var transitionStr = Object.keys(transitionEndObject).filter(function (key) {
  (0, _newArrowCheck2.default)(this, _this);

  if (typeof document === 'undefined') {
    return false;
  }

  var html = document.getElementsByTagName('html')[0];
  return key in (html ? html.style : {});
}.bind(void 0))[0];
exports.transitionStr = transitionStr;
var transitionEnd = transitionEndObject[transitionStr];
exports.transitionEnd = transitionEnd;

function addEventListener(target, eventType, callback, options) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    target.attachEvent("on".concat(eventType), callback);
  }
}

function removeEventListener(target, eventType, callback, options) {
  if (target.removeEventListener) {
    target.removeEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    target.detachEvent("on".concat(eventType), callback);
  }
}

function transformArguments(arg, cb) {
  var result;

  if (typeof arg === 'function') {
    result = arg(cb);
  } else {
    result = arg;
  }

  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }

    return [result[0], result[1]];
  }

  return [result];
}

var isNumeric = function isNumeric(value) {
  (0, _newArrowCheck2.default)(this, _this);
  return !isNaN(parseFloat(value)) && isFinite(value); // eslint-disable-line
}.bind(void 0);

exports.isNumeric = isNumeric;