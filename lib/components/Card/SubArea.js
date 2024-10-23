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

var _excluded = ["title", "children"];

var _this = void 0;

var SubArea = function SubArea(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var title = _ref.title,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.SubAreaWrap, rest, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.titleCls
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.subAreaContentCls
  }, children));
}.bind(void 0);

SubArea.propTypes = {
  title: _propTypes.default.node,
  children: _propTypes.default.node
};

var _default = /*#__PURE__*/_react.default.memo(SubArea);

exports.default = _default;