"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShouldUsePopoverConfig = exports.default = exports.getPopoverConfigFromContext = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _ConfigContext = _interopRequireDefault(require("../components/ConfigProvider/ConfigContext"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var oldDefaultPopupContainer = function oldDefaultPopupContainer(triggerNode) {
  (0, _newArrowCheck2.default)(this, _this);
  return triggerNode.parentNode;
}.bind(void 0);

var getPopoverConfigFromContext = function getPopoverConfigFromContext(configContext) {
  (0, _newArrowCheck2.default)(this, _this);

  if (configContext.popover) {
    var clone = _objectSpread({}, configContext.popover);

    delete clone.ignorePopover;
    return clone;
  }

  return configContext.forwardPopupContainer === true ? {
    forwardPopupContainer: oldDefaultPopupContainer
  } : {
    getPopupContainer: oldDefaultPopupContainer
  };
}.bind(void 0);

exports.getPopoverConfigFromContext = getPopoverConfigFromContext;

var usePopoverConfig = function usePopoverConfig() {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var configContext = (0, _react.useContext)(_ConfigContext.default);
  var popoverConfigProps = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return getPopoverConfigFromContext({
      forwardPopupContainer: configContext.forwardPopupContainer,
      popover: configContext.popover
    });
  }.bind(this), [configContext.forwardPopupContainer, configContext.popover]);
  return popoverConfigProps;
}.bind(void 0);

var _default = usePopoverConfig;
exports.default = _default;

var useShouldUsePopoverConfig = function useShouldUsePopoverConfig() {
  (0, _newArrowCheck2.default)(this, _this);
  var configContext = (0, _react.useContext)(_ConfigContext.default);
  return configContext.popover && configContext.popover.ignorePopover !== false;
}.bind(void 0);

exports.useShouldUsePopoverConfig = useShouldUsePopoverConfig;