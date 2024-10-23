"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attrs = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

var attrs = function attrs(attributes) {
  (0, _newArrowCheck2.default)(this, _this);
  var newAttrsMap = {};

  for (var _key in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, _key)) {
      var v = attributes[_key];

      switch (v) {
        case false:
        case null:
        case undefined:
          break;

        case true:
        default:
          newAttrsMap[_key] = v;
          break;
      }
    }
  }

  return newAttrsMap;
}.bind(void 0);

exports.attrs = attrs;