"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = _interopRequireDefault(require("../../components/ThemeProvider"));

var _LocaleProvider = _interopRequireDefault(require("../../components/LocaleProvider"));

var _ConfigContext = _interopRequireWildcard(require("./ConfigContext"));

var _excluded = ["children", "theme", "locale"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ConfigProvider = function ConfigProvider(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var children = _ref.children,
      theme = _ref.theme,
      locale = _ref.locale,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var provider = /*#__PURE__*/_react.default.createElement(_ConfigContext.default.Provider, {
    value: _objectSpread(_objectSpread({}, _ConfigContext.defaultConfig), rest)
  }, children);

  if (theme) provider = /*#__PURE__*/_react.default.createElement(_ThemeProvider.default, {
    theme: theme
  }, provider);
  if (locale) provider = /*#__PURE__*/_react.default.createElement(_LocaleProvider.default, {
    locale: locale
  }, provider);
  return provider;
}.bind(void 0);

ConfigProvider.propTypes = {
  children: _propTypes.default.node.isRequired,
  forwardPopupContainer: _propTypes.default.bool,
  popover: _propTypes.default.shape({
    getPopupContainer: _propTypes.default.func,
    forceAlignWhenScroll: _propTypes.default.bool,
    forwardPopupContainer: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),
    ignorePopover: _propTypes.default.bool
  }),
  preventFormDefaultAction: _propTypes.default.bool,
  iconDefaultPrefix: _propTypes.default.string,
  theme: _propTypes.default.any,
  actionListAutoAdjustment: _propTypes.default.bool
};
var _default = ConfigProvider;
exports.default = _default;