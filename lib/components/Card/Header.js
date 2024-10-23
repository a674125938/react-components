"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _excluded = ["comment", "children"];

var _this = void 0;

var Header = function Header(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var comment = _ref.comment,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.HeaderWrap, rest, /*#__PURE__*/_react.default.createElement(_style.TitleWrap, null, children), /*#__PURE__*/_react.default.createElement(_style.CommentWrap, null, comment));
}.bind(void 0);

Header.propTypes = {
  /** 小标题，注解 */
  comment: _propTypes.default.node,

  /** @ignore */
  children: _propTypes.default.node
};
var _default = Header;
exports.default = _default;