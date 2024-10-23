"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var _excluded = ["separator", "styleType", "children"];

var _this = void 0;

var Breadcrumb = function Breadcrumb(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref$separator = _ref.separator,
      separator = _ref$separator === void 0 ? '/' : _ref$separator,
      _ref$styleType = _ref.styleType,
      styleType = _ref$styleType === void 0 ? 'block-hover' : _ref$styleType,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var isFirstItem;
  return /*#__PURE__*/_react.default.createElement(_style.BreadcrumbWrap, (0, _extends2.default)({
    styleType: styleType
  }, rest), _react.default.Children.map(children, function (child) {
    (0, _newArrowCheck2.default)(this, _this2);

    if ( /*#__PURE__*/_react.default.isValidElement(child) && child.type.__IS_BREADCRUMB_ITEM) {
      isFirstItem = isFirstItem === undefined ? true : false;

      if (!isFirstItem) {
        return [/*#__PURE__*/_react.default.createElement(_style.SeparatorWrap, {
          key: "separator"
        }, separator), child];
      }
    }

    return child;
  }.bind(this)));
}.bind(void 0);

Breadcrumb.propTypes = {
  separator: _propTypes.default.node
};
var _default = Breadcrumb;
exports.default = _default;