"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

var _default = function (handle) {
  (0, _newArrowCheck2.default)(this, _this);
  var memoMap = {};
  return function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (memoMap.hasOwnProperty(key)) {
      return memoMap[key];
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var returnValue = handle.apply(void 0, [key].concat(args));
    return memoMap[key] = returnValue;
  };
}.bind(void 0);

exports.default = _default;