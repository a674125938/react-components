"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _CollapseContext = _interopRequireDefault(require("./CollapseContext"));

var _hooks = require("./hooks");

var _excluded = ["openKeys", "defaultOpenKeys", "onChange", "multiple", "component", "children"];

var _this = void 0;

var Collapse = function Collapse(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var openKeys = _ref.openKeys,
      defaultOpenKeys = _ref.defaultOpenKeys,
      onChange = _ref.onChange,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? true : _ref$multiple,
      component = _ref.component,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useCollapse = (0, _hooks.useCollapse)({
    openKeys: openKeys,
    defaultOpenKeys: defaultOpenKeys,
    onChange: onChange,
    multiple: multiple
  }),
      _useCollapse2 = (0, _slicedToArray2.default)(_useCollapse, 1),
      collapseContext = _useCollapse2[0];

  return /*#__PURE__*/_react.default.createElement(_CollapseContext.default.Provider, {
    value: collapseContext
  }, /*#__PURE__*/_react.default.createElement(component || 'div', rest, children));
}.bind(void 0);

Collapse.propTypes = {
  openKeys: _propTypes.default.array,
  defaultOpenKeys: _propTypes.default.array,
  onChange: _propTypes.default.func,
  multiple: _propTypes.default.bool,
  component: _propTypes.default.node
};

var _default = /*#__PURE__*/_react.default.memo(Collapse);

exports.default = _default;