"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var _this = void 0;

var Link = function Link(props) {
  (0, _newArrowCheck2.default)(this, _this);
  return /*#__PURE__*/_react.default.createElement(_style.SLink, props);
}.bind(void 0);

Link.propTypes = {
  href: _propTypes.default.string,
  target: _propTypes.default.string
};
var _default = Link;
exports.default = _default;