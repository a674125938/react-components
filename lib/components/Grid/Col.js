"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _this = void 0;

var Col = function Col(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var rest = (0, _extends2.default)({}, _ref);
  return /*#__PURE__*/_react.default.createElement(_style.ColWrap, rest);
}.bind(void 0);

Col.propTypes = {
  /** 栅格占位格数 */
  span: _propTypes.default.number,

  /** 栅格向右偏移格数，偏移占位 */
  offset: _propTypes.default.number,

  /** 栅格向左偏移格数，偏移不占位 */
  pull: _propTypes.default.number,

  /** 栅格向右偏移格数，偏移不占位 */
  push: _propTypes.default.number,

  /** flex布局下的order */
  order: _propTypes.default.number,

  /** @ignore */
  gutter: _propTypes.default.number,

  /** @ignore */
  className: _propTypes.default.string
};
var _default = Col;
exports.default = _default;