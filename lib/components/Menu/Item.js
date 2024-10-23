"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Checkbox = _interopRequireDefault(require("../../components/Checkbox"));

var _Tooltip = _interopRequireDefault(require("../../components/Tooltip"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _group = require("../../hooks/group");

var _noop = _interopRequireDefault(require("../../utils/noop"));

var _MenuContext = _interopRequireDefault(require("./MenuContext"));

var _style = require("./style");

var _excluded = ["itemKey", "disabled", "tooltip", "className", "children", "isFirst", "isLast"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Item = function Item(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref$itemKey = _ref.itemKey,
      itemKey = _ref$itemKey === void 0 ? '' : _ref$itemKey,
      disabled = _ref.disabled,
      tooltip = _ref.tooltip,
      className = _ref.className,
      children = _ref.children,
      isFirst = _ref.isFirst,
      isLast = _ref.isLast,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var groupContext = (0, _react.useContext)(_MenuContext.default);

  var _useItem = (0, _group.useItem)(itemKey, groupContext),
      _useItem2 = (0, _slicedToArray2.default)(_useItem, 2),
      selected = _useItem2[0],
      _toggle = _useItem2[1];

  var toggle = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return _toggle();
  }.bind(this), [_toggle]);

  var item = /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(_style.itemCls, selected && _style.selectedCls, disabled && _style.disabledCls, className, isFirst && _style.firstCls, isLast && _style.lastCls, groupContext.selectStyle && _style.selectStyleCls),
    onClick: disabled ? _noop.default : toggle
  }, rest), groupContext.multiple ? groupContext.selectStyle ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: _style.contentCls
  }, children), selected && /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
    type: "tick-small",
    className: _style.iconCls
  })) : /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    className: _style.checkboxCls,
    checked: selected,
    disabled: disabled,
    size: "lg"
  }, children) : children);

  return tooltip ? typeof tooltip === 'string' || /*#__PURE__*/_react.default.isValidElement(tooltip) ? /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    popup: tooltip,
    placement: "left"
  }, item) : /*#__PURE__*/_react.default.createElement(_Tooltip.default, (0, _extends2.default)({
    placement: "left"
  }, tooltip), item) : item;
}.bind(void 0);

Item.propTypes = {
  disabled: _propTypes.default.bool,
  tooltip: _propTypes.default.any,
  isFirst: _propTypes.default.bool,
  isLast: _propTypes.default.bool
};

var MemoItem = /*#__PURE__*/_react.default.memo(Item);

MemoItem.isMenuItem = true;
var _default = MemoItem;
exports.default = _default;