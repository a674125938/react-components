"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camel2Kebab = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _memo = _interopRequireDefault(require("./memo"));

var camel2Kebab = (0, _memo.default)(function () {
  var _this = this;

  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return s.replace(/([A-Z])/g, function (v, n, i) {
    (0, _newArrowCheck2.default)(this, _this);
    var r = v.toLowerCase() || '';
    return i === 0 ? r : '-' + r;
  }.bind(this));
});
exports.camel2Kebab = camel2Kebab;