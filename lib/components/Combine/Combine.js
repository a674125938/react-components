"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _style = require("./style");

var _excluded = ["children", "sharedProps", "spacing", "separator"];

var _this = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Combine = function Combine(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var children = _ref.children,
      _ref$sharedProps = _ref.sharedProps,
      sharedProps = _ref$sharedProps === void 0 ? {} : _ref$sharedProps,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 'smart' : _ref$spacing,
      separator = _ref.separator,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _sharedProps$size = sharedProps.size,
      size = _sharedProps$size === void 0 ? 'md' : _sharedProps$size;
  var isFirstItem;
  return /*#__PURE__*/_react.default.createElement(_style.CombineWrap, (0, _extends2.default)({
    spacing: spacing === 'smart' ? size : spacing
  }, rest), _react.default.Children.map(children, function (child) {
    (0, _newArrowCheck2.default)(this, _this2);
    if (child == null || child === false) return child;
    isFirstItem = isFirstItem === undefined ? true : false;

    var _child = /*#__PURE__*/_react.default.createElement("div", {
      className: _style.itemCls
    }, /*#__PURE__*/_react.default.isValidElement(child) ? /*#__PURE__*/_react.default.cloneElement(child, _objectSpread(_objectSpread({}, sharedProps), {}, {
      className: (0, _classnames.default)(child.props.className, sharedProps.className)
    })) : child);

    return separator && !isFirstItem ? [/*#__PURE__*/_react.default.createElement("span", {
      className: _style.separatorCls,
      key: "separator"
    }, separator), _child] : _child;
  }.bind(this)));
}.bind(void 0);

Combine.propTypes = {
  children: _propTypes.default.node.isRequired,
  sharedProps: _propTypes.default.shape({
    size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
    className: _propTypes.default.string
  }),
  spacing: _propTypes.default.oneOfType([_propTypes.default.oneOf(['compact']), _propTypes.default.oneOf(['smart']), _propTypes.default.oneOf(['sm']), _propTypes.default.oneOf(['md']), _propTypes.default.oneOf(['lg']), _propTypes.default.string]),
  separator: _propTypes.default.node
};

var _default = /*#__PURE__*/_react.default.memo(Combine);

exports.default = _default;