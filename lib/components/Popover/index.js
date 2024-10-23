"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _usePopoverConfig = _interopRequireWildcard(require("../../hooks/usePopoverConfig"));

var _Popover = _interopRequireWildcard(require("./Popover"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line react/display-name
var FinalPopover = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var shouldUsePopoverConfig = (0, _usePopoverConfig.useShouldUsePopoverConfig)();
  var popoverConfigProps = (0, _usePopoverConfig.default)();

  if (shouldUsePopoverConfig) {
    return /*#__PURE__*/_react.default.createElement(_Popover.default, (0, _extends2.default)({
      ref: ref
    }, popoverConfigProps, props));
  } else {
    return /*#__PURE__*/_react.default.createElement(_Popover.default, (0, _extends2.default)({
      ref: ref
    }, props));
  }
}.bind(void 0));

Object.assign(FinalPopover, {
  Animation: _Popover.Animation,
  Trigger: _Popover.Trigger,
  Placement: _Popover.Placement
});
var _default = FinalPopover;
exports.default = _default;