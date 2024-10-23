"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _Popover = _interopRequireDefault(require("../../components/Popover"));

var _placements = require("../../components/Popover/placements");

var _usePopoverConfig = _interopRequireDefault(require("../../hooks/usePopoverConfig"));

var _style = require("./style");

var _excluded = ["popup", "theme", "popupClassName", "arrow", "placement", "customStyle"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _ref = _Popover.default,
    Animation = _ref.Animation,
    Trigger = _ref.Trigger,
    Placement = _ref.Placement;
var arrowPlacements = (0, _placements.getPlacements)(10);
var placements = (0, _placements.getPlacements)();
var Theme = ['light', 'dark'];

var Tooltip = function Tooltip(_ref2) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _popup = _ref2.popup,
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'light' : _ref2$theme,
      popupClassName = _ref2.popupClassName,
      _ref2$arrow = _ref2.arrow,
      arrow = _ref2$arrow === void 0 ? true : _ref2$arrow,
      _ref2$placement = _ref2.placement,
      placement = _ref2$placement === void 0 ? 'topLeft' : _ref2$placement,
      _ref2$customStyle = _ref2.customStyle,
      customStyle = _ref2$customStyle === void 0 ? {} : _ref2$customStyle,
      rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
  var popup = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return _popup == null ? _popup : /*#__PURE__*/_react.default.createElement(_style.TooltipWrap, {
      themeType: theme
    }, arrow && /*#__PURE__*/_react.default.createElement(_style.Arrow, null, /*#__PURE__*/_react.default.createElement(_style.ArrowInner, null)), /*#__PURE__*/_react.default.createElement(_style.ContentWrap, {
      themeType: theme,
      customStyle: customStyle
    }, _popup));
  }.bind(this), [_popup, arrow, customStyle, theme]);
  var popoverConfigProps = (0, _usePopoverConfig.default)();
  return /*#__PURE__*/_react.default.createElement(_Popover.default, (0, _extends2.default)({}, popoverConfigProps, rest, {
    placement: placement,
    popupClassName: (0, _classnames.default)(_style.tooltipPopupClassName, popupClassName),
    builtinPlacements: arrow ? arrowPlacements : placements,
    popup: popup
  }));
}.bind(void 0);

Tooltip.propTypes = {
  arrow: _propTypes.default.bool,
  theme: _propTypes.default.oneOf(['light', 'dark']),
  customStyle: _propTypes.default.shape({
    popupWrapperPadding: _propTypes.default.string
  })
};
Object.assign(Tooltip, {
  Animation: Animation,
  Trigger: Trigger,
  Placement: Placement,
  Theme: Theme,
  defaultProps: {}
});
var _default = Tooltip;
exports.default = _default;