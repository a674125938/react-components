"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcProgress = require("rc-progress");

var _useDesignTokens = _interopRequireDefault(require("../../components/ThemeProvider/useDesignTokens"));

var _Tooltip = _interopRequireDefault(require("../../components/Tooltip"));

var _style = require("./style");

var _excluded = ["format", "percent", "strokeWidth", "color", "style"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CircleProgress = function CircleProgress(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var format = _ref.format,
      percent = _ref.percent,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 10 : _ref$strokeWidth,
      color = _ref.color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var DT = (0, _useDesignTokens.default)();
  var circleWrapperRef = (0, _react.useRef)(null);

  var _React$useState = _react.default.useState(),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      width = _React$useState2[0],
      setWidth = _React$useState2[1];

  var getStrokeColor = (0, _react.useCallback)(function (color) {
    (0, _newArrowCheck2.default)(this, _this2);

    switch (color) {
      case 'success':
        return DT.T_COLOR_BG_SUCCESS_DARK;

      case 'warn':
        return DT.T_COLOR_BG_WARNING_DARK;

      case 'error':
        return DT.T_COLOR_BG_ERROR_DARK;

      case 'default':
        return DT.T_COLOR_BG_PRIMARY_1;

      default:
        return color || DT.T_COLOR_BG_PRIMARY_1;
    }
  }.bind(this), [DT]);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    var circleWrapper = circleWrapperRef.current;

    if (circleWrapper) {
      setWidth(circleWrapper.clientWidth);
    }
  }.bind(this), [circleWrapperRef]);

  var _strokeWidth = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    // rc-progress 环形进度条的 strokeWidth 是相对于环形的宽度的，想要任意 width 的环形进度条都是同样的粗细，需要计算出相对于 100px 宽度的 strokeWidth
    return width ? strokeWidth * (100 / width) : strokeWidth;
  }.bind(this), [strokeWidth, width]);

  var circleContent = /*#__PURE__*/_react.default.createElement(_rcProgress.Circle, {
    percent: percent,
    strokeWidth: _strokeWidth,
    trailWidth: _strokeWidth,
    strokeColor: getStrokeColor(color),
    trailColor: DT.T_PROGRESS_COLOR_BG_DEFAULT
  });

  var FormatInfo = function FormatInfo() {
    (0, _newArrowCheck2.default)(this, _this2);
    return format !== null && /*#__PURE__*/_react.default.createElement(_style.CircleText, null, format(percent));
  }.bind(this);

  return /*#__PURE__*/_react.default.createElement(_style.CircleWrapper, (0, _extends2.default)({
    ref: circleWrapperRef,
    style: _objectSpread(_objectSpread({}, style), {}, {
      height: width
    })
  }, rest), width <= 36 ? format ? /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    popup: /*#__PURE__*/_react.default.createElement(FormatInfo, null)
  }, /*#__PURE__*/_react.default.createElement("span", null, circleContent)) : circleContent : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, circleContent, /*#__PURE__*/_react.default.createElement(FormatInfo, null)));
}.bind(void 0);

CircleProgress.propTypes = {
  /** 当前百分比 */
  percent: _propTypes.default.number,

  /** 进度条颜色，内置 success、warn、error */
  color: _propTypes.default.oneOfType([_propTypes.default.oneOf(['success', 'warn', 'error']), _propTypes.default.string]),

  /**
   * 展示文字的格式化，为 null 时隐藏文字
   * @argument percent - 格式化的百分比
   */
  format: _propTypes.default.func,

  /**
   * 进度条粗度
   */
  strokeWidth: _propTypes.default.number,

  /**
   * @ignore 样式
   */
  style: _propTypes.default.object
};
var _default = CircleProgress;
exports.default = _default;