"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _hoistStatics = _interopRequireDefault(require("../../utils/hoistStatics"));

var _runtime = require("./runtime");

var _LocaleContext = _interopRequireDefault(require("./LocaleContext"));

var _excluded = ["locale"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var localeConsumerDecorator = function localeConsumerDecorator(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref$defaultLocale = _ref.defaultLocale,
      defaultLocale = _ref$defaultLocale === void 0 ? {} : _ref$defaultLocale,
      localeName = _ref.localeName,
      requireRuntimeLocale = _ref.requireRuntimeLocale;
  return function (Child) {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);

    // eslint-disable-next-line react/display-name
    var LocalConsumerWrappedComponent = /*#__PURE__*/_react.default.forwardRef(function (_ref2, ref) {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var locale = _ref2.locale,
          rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
      var localeContext = (0, _react.useContext)(_LocaleContext.default);
      var componentLocaleContent = localeContext[localeName];
      var finalLocale = (0, _react.useMemo)(function () {
        (0, _newArrowCheck2.default)(this, _this4);
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultLocale), componentLocaleContent), requireRuntimeLocale ? (0, _runtime.getRuntimeLocale)()[localeName] : {}), locale);
      }.bind(this), [locale, componentLocaleContent]);
      return /*#__PURE__*/_react.default.createElement(Child, (0, _extends2.default)({}, rest, {
        locale: finalLocale,
        ref: ref
      }));
    }.bind(this));

    (0, _hoistStatics.default)(LocalConsumerWrappedComponent, Child);
    return LocalConsumerWrappedComponent;
  }.bind(this);
}.bind(void 0);

var _default = localeConsumerDecorator;
exports.default = _default;