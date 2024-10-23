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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _emotionTheming = require("emotion-theming");

var _theme = _interopRequireDefault(require("../components/ThemeProvider/theme"));

var _excluded = ["className"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 包裹组件，注入默认主题，添加默认的 props
 * @param input {object} 需要注入组件的 props
 */
var sWrap = function sWrap(input, options) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  return function (Comp) {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);

    var WithThemeComponent = function WithThemeComponent(props, ref) {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this3);

      var _ref = input || {},
          className = _ref.className,
          rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

      var memoClassName = (0, _react.useMemo)(function () {
        (0, _newArrowCheck2.default)(this, _this4);
        var cn;

        if (className) {
          cn = typeof className === 'function' ? className(props) : className;
        }

        if (props.className) {
          cn = (0, _classnames.default)(cn, props.className);
        }

        return cn;
      }.bind(this), [className, props]);
      var theme = (0, _emotionTheming.useTheme)();
      var memoTheme = (0, _react.useMemo)(function () {
        var _Object$keys;

        (0, _newArrowCheck2.default)(this, _this4);
        return !theme || !((_Object$keys = Object.keys(theme)) !== null && _Object$keys !== void 0 && _Object$keys.length) ? _theme.default : theme;
      }.bind(this), [theme]);

      var result = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, rest), props), memoClassName ? {
        className: memoClassName
      } : {}), {}, {
        theme: memoTheme
      });

      if (options !== null && options !== void 0 && options.ignoreProps) {
        options === null || options === void 0 ? void 0 : options.ignoreProps.forEach(function (prop) {
          (0, _newArrowCheck2.default)(this, _this4);
          delete result[prop];
        }.bind(this));
      }

      var Com = Comp;
      return /*#__PURE__*/_react.default.createElement(Com, (0, _extends2.default)({}, result, {
        ref: ref
      }));
    }.bind(this);

    return /*#__PURE__*/(0, _react.forwardRef)(WithThemeComponent);
  }.bind(this);
}.bind(void 0);

var _default = sWrap;
exports.default = _default;