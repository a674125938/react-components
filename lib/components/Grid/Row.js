"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _excluded = ["gutter"];

var _this = void 0;

var Align = ['top', 'middle', 'bottom'];
var Justify = ['start', 'end', 'center', 'space-around', 'space-between'];
var Type = ['flex'];

var Row = function Row(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === void 0 ? 16 : _ref$gutter,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.RowWrap, (0, _extends2.default)({
    gutter: gutter
  }, rest));
}.bind(void 0);

Row.propTypes = {
  /** 是否为flex类型，flex类型时定位属性才能生效 */
  type: _propTypes.default.oneOf(Type),

  /** 垂直定位 */
  align: _propTypes.default.oneOf(Align),

  /** 水平定位 */
  justify: _propTypes.default.oneOf(Justify),

  /** 栅格间距，单个值为横行间隔，数组为[横向间距, 纵向间距] */
  gutter: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** @ignore */
  className: _propTypes.default.string,

  /** @ignore */
  style: _propTypes.default.object,

  /** @ignore */
  children: _propTypes.default.node
};
Object.assign(Row, {
  Align: Align,
  Justify: Justify,
  Type: Type
});
var _default = Row;
exports.default = _default;