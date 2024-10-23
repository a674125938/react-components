"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VerticalContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcMenu = _interopRequireDefault(require("rc-menu"));

var _NavContext = _interopRequireDefault(require("./NavContext"));

var _NavItem = require("./NavItem");

var _style = require("./style");

var _excluded = ["className", "items", "inlineCollapsed", "mode", "inlineIndent", "subMenuItemRender", "menuItemRender"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var VerticalContext = /*#__PURE__*/_react.default.createContext({
  openKeys: [],
  selectedKeys: []
});

exports.VerticalContext = VerticalContext;

var Nav = function Nav(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var className = _ref.className,
      items = _ref.items,
      inlineCollapsed = _ref.inlineCollapsed,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'inline' : _ref$mode,
      _ref$inlineIndent = _ref.inlineIndent,
      inlineIndent = _ref$inlineIndent === void 0 ? 32 : _ref$inlineIndent,
      subMenuItemRender = _ref.subMenuItemRender,
      menuItemRender = _ref.menuItemRender,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var newMode = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return inlineCollapsed ? 'vertical' : mode;
  }.bind(this), [inlineCollapsed, mode]);
  var mergedChildren = (0, _NavItem.useItems)(items, inlineIndent, inlineCollapsed, mode);

  var _React$useState = _react.default.useState(rest.defaultSelectedKeys || []),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      selectedKeys = _React$useState2[0],
      setSelectedKeys = _React$useState2[1];

  var contextValue = _react.default.useMemo(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return {
      inlineCollapsed: inlineCollapsed || false,
      inlineIndent: inlineIndent,
      mode: newMode,
      openKeys: rest.defaultOpenKeys,
      selectedKeys: selectedKeys,
      setSelectedKeys: setSelectedKeys,
      subMenuItemRender: subMenuItemRender,
      menuItemRender: menuItemRender
    };
  }.bind(this), [inlineCollapsed, selectedKeys, setSelectedKeys, newMode, inlineIndent, rest.defaultOpenKeys, subMenuItemRender, menuItemRender]);

  return /*#__PURE__*/_react.default.createElement(_style.NavWarp, {
    className: (0, _classnames.default)(_style.prefixClsNavWarp, className)
  }, /*#__PURE__*/_react.default.createElement(_NavContext.default.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(_rcMenu.default, (0, _extends2.default)({
    inlineIndent: 0,
    selectedKeys: selectedKeys,
    onSelect: function (_ref2) {
      (0, _newArrowCheck2.default)(this, _this2);
      var key = _ref2.key;
      setSelectedKeys([key]);
    }.bind(this)
  }, rest, {
    mode: 'inline',
    prefixCls: _style.prefixClsMenu,
    className: (0, _classnames.default)(className, _style.prefixClsMenu, inlineCollapsed ? "".concat(_style.prefixClsMenu, "-collapsed") : "".concat(_style.prefixClsMenu, "-expand"))
  }), mergedChildren)));
}.bind(void 0);

Nav.propTypes = {
  mode: _propTypes.default.oneOf(['vertical', 'inline']),
  items: _propTypes.default.array,
  inlineCollapsed: _propTypes.default.bool,
  inlineIndent: _propTypes.default.number,
  defaultOpenKeys: _propTypes.default.arrayOf(_propTypes.default.string),
  defaultSelectedKeys: _propTypes.default.arrayOf(_propTypes.default.string),
  onOpenChange: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  subMenuItemRender: _propTypes.default.func,
  menuItemRender: _propTypes.default.func
};
var _default = Nav;
exports.default = _default;