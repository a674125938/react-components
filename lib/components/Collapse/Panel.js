"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _isFunction = _interopRequireDefault(require("../../utils/isFunction"));

var _style = require("./style");

var _hooks = require("./hooks");

var _excluded = ["open", "defaultOpen", "onChange", "disabled", "panelKey", "titlePosition", "title", "ignoreUpdateWhenClose", "forceRender", "children"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Panel = function Panel(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _open = _ref.open,
      defaultOpen = _ref.defaultOpen,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      _ref$panelKey = _ref.panelKey,
      panelKey = _ref$panelKey === void 0 ? '' : _ref$panelKey,
      _ref$titlePosition = _ref.titlePosition,
      titlePosition = _ref$titlePosition === void 0 ? 'top' : _ref$titlePosition,
      title = _ref.title,
      ignoreUpdateWhenClose = _ref.ignoreUpdateWhenClose,
      forceRender = _ref.forceRender,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _usePanel = (0, _hooks.usePanel)({
    open: _open,
    defaultOpen: defaultOpen,
    onChange: onChange,
    disabled: disabled,
    panelKey: panelKey,
    forceRender: forceRender,
    ignoreUpdateWhenClose: ignoreUpdateWhenClose
  }),
      _usePanel2 = (0, _slicedToArray2.default)(_usePanel, 3),
      shouldRender = _usePanel2[0],
      open = _usePanel2[1],
      handleToggle = _usePanel2[2];

  var finalTitle = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return /*#__PURE__*/_react.default.createElement("div", {
      onClick: handleToggle
    }, (0, _isFunction.default)(title) ? title({
      open: open,
      disabled: disabled,
      toggle: handleToggle
    }) : title);
  }.bind(this), [disabled, handleToggle, open, title]);
  return /*#__PURE__*/_react.default.createElement("div", rest, titlePosition === 'top' && finalTitle, /*#__PURE__*/_react.default.createElement(_style.PanelWrap, {
    open: open
  }, shouldRender ? children : null), titlePosition === 'bottom' && finalTitle);
}.bind(void 0);

Panel.propTypes = {
  title: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  onChange: _propTypes.default.func,
  open: _propTypes.default.bool,
  defaultOpen: _propTypes.default.bool,
  forceRender: _propTypes.default.bool,
  ignoreUpdateWhenClose: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  titlePosition: _propTypes.default.oneOf(['top', 'bottom'])
};

var MemoPanel = /*#__PURE__*/_react.default.memo(Panel);

MemoPanel.isCollapsePanel = true;
var _default = MemoPanel;
exports.default = _default;