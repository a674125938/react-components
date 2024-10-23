"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.measureScrollbar = measureScrollbar;
exports.debounce = debounce;
exports.warningOnce = warningOnce;
exports.remove = remove;
exports.INTERNAL_COL_DEFINE = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _warning = _interopRequireDefault(require("warning"));

var scrollbarSize; // Measure scrollbar width for padding body during modal show/hide

var scrollbarMeasure = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
};

function measureScrollbar() {
  var _this = this;

  var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vertical';

  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return 0;
  }

  if (scrollbarSize) {
    return scrollbarSize;
  }

  var scrollDiv = document.createElement('div');
  Object.keys(scrollbarMeasure).forEach(function (scrollProp) {
    (0, _newArrowCheck2.default)(this, _this);
    scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
  }.bind(this));
  document.body.appendChild(scrollDiv);
  var size = 0;

  if (direction === 'vertical') {
    size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  } else if (direction === 'horizontal') {
    size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
  }

  document.body.removeChild(scrollDiv);
  scrollbarSize = size;
  return scrollbarSize;
}

function debounce(func, wait, immediate) {
  var timeout;

  function debounceFunc() {
    var _this2 = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this; // https://fb.me/react-event-pooling

    if (args[0] && args[0].persist) {
      args[0].persist();
    }

    var later = function later() {
      (0, _newArrowCheck2.default)(this, _this2);
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    }.bind(this);

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  }

  debounceFunc.cancel = function cancel() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounceFunc;
}

var warned = {};

function warningOnce(condition, format, args) {
  if (!warned[format]) {
    (0, _warning.default)(condition, format, args);
    warned[format] = !condition;
  }
}

function remove(array, item) {
  var index = array.indexOf(item);
  var front = array.slice(0, index);
  var last = array.slice(index + 1, array.length);
  return front.concat(last);
}

var INTERNAL_COL_DEFINE = 'RC_TABLE_INTERNAL_COL_DEFINE';
exports.INTERNAL_COL_DEFINE = INTERNAL_COL_DEFINE;