"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _this = void 0;

var _default = /*#__PURE__*/_react.default.memo(function () {
  (0, _newArrowCheck2.default)(this, _this);
  return /*#__PURE__*/_react.default.createElement("rect", {
    width: "14",
    height: "2.5",
    x: "5",
    y: "10.75",
    rx: ".3"
  });
}.bind(void 0));

exports.default = _default;