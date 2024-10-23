"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactResizable = require("react-resizable");

var _core = require("@emotion/core");

var _withProps = _interopRequireDefault(require("../../utils/withProps"));

var _excluded = ["resizing", "theme"],
    _excluded2 = ["column", "width", "resizeAble", "resizable", "onResize", "minWidth", "maxWidth", "children"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// eslint-disable-next-line no-unused-vars
var FilteredResizable = function FilteredResizable(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var resizing = _ref.resizing,
      theme = _ref.theme,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_reactResizable.Resizable, rest);
}.bind(void 0);

FilteredResizable.propTypes = {
  resizing: _propTypes.default.bool,
  theme: _propTypes.default.any
};
var ResizableTHWrap = (0, _withProps.default)()(( /*#__PURE__*/0, _styledBase.default)(FilteredResizable, {
  target: "e1jcetud0",
  label: "ResizableTHWrap"
})(function (props) {
  (0, _newArrowCheck2.default)(this, _this);
  var resizing = props.resizing,
      DT = props.theme.designTokens;
  return /*#__PURE__*/(0, _core.css)("position:relative;box-sizing:border-box;.react-resizable-handle{position:absolute;width:13px;height:100%;bottom:0;right:0;cursor:col-resize;::after{content:' ';position:absolute;left:6px;top:14px;bottom:14px;z-index:1;will-change:width,background;transition:width 0.2s,background ease-in-out 0.2s;display:block;width:1px;background:", DT.T_COLOR_LINE_DEFAULT_LIGHT, ";}:hover::after{width:2px;background:", DT.T_COLOR_LINE_DEFAULT_DARK, ";}}", resizing && /*#__PURE__*/(0, _core.css)(".react-resizable-handle.react-resizable-handle{::after{width:2px;background:", DT.T_COLOR_LINE_PRIMARY_HOVER, ";}};label:ResizableTHWrap;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlL1Jlc2l6YWJsZVRILmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGUiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVGFibGUvUmVzaXphYmxlVEguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUmVzaXphYmxlIH0gZnJvbSAncmVhY3QtcmVzaXphYmxlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgd2l0aFByb3BzIGZyb20gJ3NyYy91dGlscy93aXRoUHJvcHMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmNvbnN0IEZpbHRlcmVkUmVzaXphYmxlID0gKHsgcmVzaXppbmcsIHRoZW1lLCAuLi5yZXN0IH0pID0+IDxSZXNpemFibGUgey4uLnJlc3R9IC8+O1xuRmlsdGVyZWRSZXNpemFibGUucHJvcFR5cGVzID0geyByZXNpemluZzogUHJvcFR5cGVzLmJvb2wsIHRoZW1lOiBQcm9wVHlwZXMuYW55IH07XG5cbmNvbnN0IFJlc2l6YWJsZVRIV3JhcCA9IHdpdGhQcm9wcygpKFxuICAgIHN0eWxlZChGaWx0ZXJlZFJlc2l6YWJsZSkocHJvcHMgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICByZXNpemluZyxcbiAgICAgICAgICAgIHRoZW1lOiB7IGRlc2lnblRva2VuczogRFQgfVxuICAgICAgICB9ID0gcHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgICAgIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gICAgICAgICAgICAgICAgOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICB3aWxsLWNoYW5nZTogd2lkdGgsIGJhY2tncm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnMsIGJhY2tncm91bmQgZWFzZS1pbi1vdXQgMC4ycztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7RFQuVF9DT0xPUl9MSU5FX0RFRkFVTFRfTElHSFR9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtEVC5UX0NPTE9SX0xJTkVfREVGQVVMVF9EQVJLfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICR7cmVzaXppbmcgJiZcbiAgICAgICAgICAgIGNzc2BcbiAgICAgICAgICAgICAgICAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS5yZWFjdC1yZXNpemFibGUtaGFuZGxlIHtcbiAgICAgICAgICAgICAgICAgICAgOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtEVC5UX0NPTE9SX0xJTkVfUFJJTUFSWV9IT1ZFUn07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTtcbiAgICAgICAgYDtcbiAgICB9KVxuKTtcblxubGV0IF91aWQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNpemFibGVUSCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgLyoqIOW9k+WJjeWuveW6piAqL1xuICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgLyoqIOacgOWwj+WuveW6piAqL1xuICAgICAgICBtaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgLyoqIOacgOWkp+WuveW6piAqL1xuICAgICAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAqIOaYr+WQpuWPr+iwg+aVtOWkp+Wwj1xuICAgICAgICAgKi9cbiAgICAgICAgcmVzaXplQWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKiDmmK/lkKblj6/osIPmlbTlpKflsI8gKi9cbiAgICAgICAgcmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqIOiwg+aVtOaXtueahOWbnuiwgyAqL1xuICAgICAgICBvblJlc2l6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKiBAaWdub3JlICovXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAgICAgY29sdW1uOiBQcm9wVHlwZXMuYW55XG4gICAgfTtcbiAgICB1aWQgPSAncmMtcmVzaXphYmxlLXRoLScgKyBfdWlkKys7XG4gICAgc3RhdGUgPSB7fTtcbiAgICBvblJlc2l6ZSA9IChlLCB7IHNpemUgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IG9uUmVzaXplID0gKCkgPT4ge30gfSA9IHRoaXMuc3BsaXRQcm9wcygpLnJlc2l6YWJsZVByb3BzO1xuICAgICAgICBvblJlc2l6ZShzaXplLndpZHRoKTtcbiAgICB9O1xuICAgIG9uUmVzaXplU3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXNpemluZzogdHJ1ZSB9KTtcbiAgICB9O1xuICAgIG9uUmVzaXplU3RvcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc2l6aW5nOiBmYWxzZSB9KTtcbiAgICB9O1xuICAgIHNwbGl0UHJvcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgcmVzaXplQWJsZSxcbiAgICAgICAgICAgIHJlc2l6YWJsZSxcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgb25SZXNpemUsXG4gICAgICAgICAgICBtaW5XaWR0aCxcbiAgICAgICAgICAgIG1heFdpZHRoLFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICAuLi5odG1sUHJvcHNcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXNpemFibGVQcm9wczoge1xuICAgICAgICAgICAgICAgIC4uLmNvbHVtbixcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaHRtbFByb3BzLFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgcmVzaXphYmxlUHJvcHMsIGh0bWxQcm9wcyB9ID0gdGhpcy5zcGxpdFByb3BzKCk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIHJlc2l6YWJsZSwgcmVzaXplQWJsZSwgbWluV2lkdGggPSAyMCwgbWF4V2lkdGggPSBJbmZpbml0eSB9ID0gcmVzaXphYmxlUHJvcHM7XG4gICAgICAgIGNvbnN0IHsgcmVzaXppbmcgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIHJlc2l6ZUFibGUgfHwgcmVzaXphYmxlID8gKFxuICAgICAgICAgICAgPFJlc2l6YWJsZVRIV3JhcFxuICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezB9XG4gICAgICAgICAgICAgICAgb25SZXNpemU9e3RoaXMub25SZXNpemV9XG4gICAgICAgICAgICAgICAgb25SZXNpemVTdGFydD17dGhpcy5vblJlc2l6ZVN0YXJ0fVxuICAgICAgICAgICAgICAgIG9uUmVzaXplU3RvcD17dGhpcy5vblJlc2l6ZVN0b3B9XG4gICAgICAgICAgICAgICAgbWluQ29uc3RyYWludHM9e1ttaW5XaWR0aCwgMF19XG4gICAgICAgICAgICAgICAgbWF4Q29uc3RyYWludHM9e1ttYXhXaWR0aCwgMF19XG4gICAgICAgICAgICAgICAgcmVzaXppbmc9e3Jlc2l6aW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0aCB7Li4uaHRtbFByb3BzfSBkYXRhLXVpZD17dGhpcy51aWR9PlxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+e2NoaWxkcmVufTwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvUmVzaXphYmxlVEhXcmFwPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPHRoIHsuLi5odG1sUHJvcHN9PntjaGlsZHJlbn08L3RoPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ== */")), ";;label:ResizableTHWrap;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlL1Jlc2l6YWJsZVRILmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmtCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlL1Jlc2l6YWJsZVRILmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJlc2l6YWJsZSB9IGZyb20gJ3JlYWN0LXJlc2l6YWJsZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW1wb3J0IHdpdGhQcm9wcyBmcm9tICdzcmMvdXRpbHMvd2l0aFByb3BzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jb25zdCBGaWx0ZXJlZFJlc2l6YWJsZSA9ICh7IHJlc2l6aW5nLCB0aGVtZSwgLi4ucmVzdCB9KSA9PiA8UmVzaXphYmxlIHsuLi5yZXN0fSAvPjtcbkZpbHRlcmVkUmVzaXphYmxlLnByb3BUeXBlcyA9IHsgcmVzaXppbmc6IFByb3BUeXBlcy5ib29sLCB0aGVtZTogUHJvcFR5cGVzLmFueSB9O1xuXG5jb25zdCBSZXNpemFibGVUSFdyYXAgPSB3aXRoUHJvcHMoKShcbiAgICBzdHlsZWQoRmlsdGVyZWRSZXNpemFibGUpKHByb3BzID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcmVzaXppbmcsXG4gICAgICAgICAgICB0aGVtZTogeyBkZXNpZ25Ub2tlbnM6IERUIH1cbiAgICAgICAgfSA9IHByb3BzO1xuXG4gICAgICAgIHJldHVybiBjc3NgXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgICAgICAucmVhY3QtcmVzaXphYmxlLWhhbmRsZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgICAgICAgICAgICAgIDo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNnB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IHdpZHRoLCBiYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzLCBiYWNrZ3JvdW5kIGVhc2UtaW4tb3V0IDAuMnM7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke0RULlRfQ09MT1JfTElORV9ERUZBVUxUX0xJR0hUfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOmhvdmVyOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7RFQuVF9DT0xPUl9MSU5FX0RFRkFVTFRfREFSS307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAke3Jlc2l6aW5nICYmXG4gICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUucmVhY3QtcmVzaXphYmxlLWhhbmRsZSB7XG4gICAgICAgICAgICAgICAgICAgIDo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7RFQuVF9DT0xPUl9MSU5FX1BSSU1BUllfSE9WRVJ9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH07XG4gICAgICAgIGA7XG4gICAgfSlcbik7XG5cbmxldCBfdWlkID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzaXphYmxlVEggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIC8qKiDlvZPliY3lrr3luqYgKi9cbiAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIC8qKiDmnIDlsI/lrr3luqYgKi9cbiAgICAgICAgbWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIC8qKiDmnIDlpKflrr3luqYgKi9cbiAgICAgICAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICAgKiDmmK/lkKblj6/osIPmlbTlpKflsI9cbiAgICAgICAgICovXG4gICAgICAgIHJlc2l6ZUFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKiog5piv5ZCm5Y+v6LCD5pW05aSn5bCPICovXG4gICAgICAgIHJlc2l6YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKiDosIPmlbTml7bnmoTlm57osIMgKi9cbiAgICAgICAgb25SZXNpemU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKiogQGlnbm9yZSAqL1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIGNvbHVtbjogUHJvcFR5cGVzLmFueVxuICAgIH07XG4gICAgdWlkID0gJ3JjLXJlc2l6YWJsZS10aC0nICsgX3VpZCsrO1xuICAgIHN0YXRlID0ge307XG4gICAgb25SZXNpemUgPSAoZSwgeyBzaXplIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBvblJlc2l6ZSA9ICgpID0+IHt9IH0gPSB0aGlzLnNwbGl0UHJvcHMoKS5yZXNpemFibGVQcm9wcztcbiAgICAgICAgb25SZXNpemUoc2l6ZS53aWR0aCk7XG4gICAgfTtcbiAgICBvblJlc2l6ZVN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVzaXppbmc6IHRydWUgfSk7XG4gICAgfTtcbiAgICBvblJlc2l6ZVN0b3AgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXNpemluZzogZmFsc2UgfSk7XG4gICAgfTtcbiAgICBzcGxpdFByb3BzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHJlc2l6ZUFibGUsXG4gICAgICAgICAgICByZXNpemFibGUsXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgIG9uUmVzaXplLFxuICAgICAgICAgICAgbWluV2lkdGgsXG4gICAgICAgICAgICBtYXhXaWR0aCxcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgLi4uaHRtbFByb3BzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzaXphYmxlUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAuLi5jb2x1bW4sXG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGh0bWxQcm9wcyxcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIHJlc2l6YWJsZVByb3BzLCBodG1sUHJvcHMgfSA9IHRoaXMuc3BsaXRQcm9wcygpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCByZXNpemFibGUsIHJlc2l6ZUFibGUsIG1pbldpZHRoID0gMjAsIG1heFdpZHRoID0gSW5maW5pdHkgfSA9IHJlc2l6YWJsZVByb3BzO1xuICAgICAgICBjb25zdCB7IHJlc2l6aW5nIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiByZXNpemVBYmxlIHx8IHJlc2l6YWJsZSA/IChcbiAgICAgICAgICAgIDxSZXNpemFibGVUSFdyYXBcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXswfVxuICAgICAgICAgICAgICAgIG9uUmVzaXplPXt0aGlzLm9uUmVzaXplfVxuICAgICAgICAgICAgICAgIG9uUmVzaXplU3RhcnQ9e3RoaXMub25SZXNpemVTdGFydH1cbiAgICAgICAgICAgICAgICBvblJlc2l6ZVN0b3A9e3RoaXMub25SZXNpemVTdG9wfVxuICAgICAgICAgICAgICAgIG1pbkNvbnN0cmFpbnRzPXtbbWluV2lkdGgsIDBdfVxuICAgICAgICAgICAgICAgIG1heENvbnN0cmFpbnRzPXtbbWF4V2lkdGgsIDBdfVxuICAgICAgICAgICAgICAgIHJlc2l6aW5nPXtyZXNpemluZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGggey4uLmh0bWxQcm9wc30gZGF0YS11aWQ9e3RoaXMudWlkfT5cbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PntjaGlsZHJlbn08L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8L1Jlc2l6YWJsZVRIV3JhcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDx0aCB7Li4uaHRtbFByb3BzfT57Y2hpbGRyZW59PC90aD5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0= */"));
}.bind(void 0), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlL1Jlc2l6YWJsZVRILmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhSSIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UYWJsZS9SZXNpemFibGVUSC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSZXNpemFibGUgfSBmcm9tICdyZWFjdC1yZXNpemFibGUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmltcG9ydCB3aXRoUHJvcHMgZnJvbSAnc3JjL3V0aWxzL3dpdGhQcm9wcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuY29uc3QgRmlsdGVyZWRSZXNpemFibGUgPSAoeyByZXNpemluZywgdGhlbWUsIC4uLnJlc3QgfSkgPT4gPFJlc2l6YWJsZSB7Li4ucmVzdH0gLz47XG5GaWx0ZXJlZFJlc2l6YWJsZS5wcm9wVHlwZXMgPSB7IHJlc2l6aW5nOiBQcm9wVHlwZXMuYm9vbCwgdGhlbWU6IFByb3BUeXBlcy5hbnkgfTtcblxuY29uc3QgUmVzaXphYmxlVEhXcmFwID0gd2l0aFByb3BzKCkoXG4gICAgc3R5bGVkKEZpbHRlcmVkUmVzaXphYmxlKShwcm9wcyA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHJlc2l6aW5nLFxuICAgICAgICAgICAgdGhlbWU6IHsgZGVzaWduVG9rZW5zOiBEVCB9XG4gICAgICAgIH0gPSBwcm9wcztcblxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICAgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgICAgICAgICAgICAgICA6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB3aWR0aCwgYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycywgYmFja2dyb3VuZCBlYXNlLWluLW91dCAwLjJzO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtEVC5UX0NPTE9SX0xJTkVfREVGQVVMVF9MSUdIVH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke0RULlRfQ09MT1JfTElORV9ERUZBVUxUX0RBUkt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHtyZXNpemluZyAmJlxuICAgICAgICAgICAgY3NzYFxuICAgICAgICAgICAgICAgIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUge1xuICAgICAgICAgICAgICAgICAgICA6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke0RULlRfQ09MT1JfTElORV9QUklNQVJZX0hPVkVSfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9O1xuICAgICAgICBgO1xuICAgIH0pXG4pO1xuXG5sZXQgX3VpZCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc2l6YWJsZVRIIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAvKiog5b2T5YmN5a695bqmICovXG4gICAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAvKiog5pyA5bCP5a695bqmICovXG4gICAgICAgIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAvKiog5pyA5aSn5a695bqmICovXG4gICAgICAgIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQGRlcHJlY2F0ZWRcbiAgICAgICAgICog5piv5ZCm5Y+v6LCD5pW05aSn5bCPXG4gICAgICAgICAqL1xuICAgICAgICByZXNpemVBYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqIOaYr+WQpuWPr+iwg+aVtOWkp+WwjyAqL1xuICAgICAgICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKiog6LCD5pW05pe255qE5Zue6LCDICovXG4gICAgICAgIG9uUmVzaXplOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqIEBpZ25vcmUgKi9cbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICBjb2x1bW46IFByb3BUeXBlcy5hbnlcbiAgICB9O1xuICAgIHVpZCA9ICdyYy1yZXNpemFibGUtdGgtJyArIF91aWQrKztcbiAgICBzdGF0ZSA9IHt9O1xuICAgIG9uUmVzaXplID0gKGUsIHsgc2l6ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgb25SZXNpemUgPSAoKSA9PiB7fSB9ID0gdGhpcy5zcGxpdFByb3BzKCkucmVzaXphYmxlUHJvcHM7XG4gICAgICAgIG9uUmVzaXplKHNpemUud2lkdGgpO1xuICAgIH07XG4gICAgb25SZXNpemVTdGFydCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc2l6aW5nOiB0cnVlIH0pO1xuICAgIH07XG4gICAgb25SZXNpemVTdG9wID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVzaXppbmc6IGZhbHNlIH0pO1xuICAgIH07XG4gICAgc3BsaXRQcm9wcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICByZXNpemVBYmxlLFxuICAgICAgICAgICAgcmVzaXphYmxlLFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgICAgICBvblJlc2l6ZSxcbiAgICAgICAgICAgIG1pbldpZHRoLFxuICAgICAgICAgICAgbWF4V2lkdGgsXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIC4uLmh0bWxQcm9wc1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc2l6YWJsZVByb3BzOiB7XG4gICAgICAgICAgICAgICAgLi4uY29sdW1uLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBodG1sUHJvcHMsXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCByZXNpemFibGVQcm9wcywgaHRtbFByb3BzIH0gPSB0aGlzLnNwbGl0UHJvcHMoKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgcmVzaXphYmxlLCByZXNpemVBYmxlLCBtaW5XaWR0aCA9IDIwLCBtYXhXaWR0aCA9IEluZmluaXR5IH0gPSByZXNpemFibGVQcm9wcztcbiAgICAgICAgY29uc3QgeyByZXNpemluZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gcmVzaXplQWJsZSB8fCByZXNpemFibGUgPyAoXG4gICAgICAgICAgICA8UmVzaXphYmxlVEhXcmFwXG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgIGhlaWdodD17MH1cbiAgICAgICAgICAgICAgICBvblJlc2l6ZT17dGhpcy5vblJlc2l6ZX1cbiAgICAgICAgICAgICAgICBvblJlc2l6ZVN0YXJ0PXt0aGlzLm9uUmVzaXplU3RhcnR9XG4gICAgICAgICAgICAgICAgb25SZXNpemVTdG9wPXt0aGlzLm9uUmVzaXplU3RvcH1cbiAgICAgICAgICAgICAgICBtaW5Db25zdHJhaW50cz17W21pbldpZHRoLCAwXX1cbiAgICAgICAgICAgICAgICBtYXhDb25zdHJhaW50cz17W21heFdpZHRoLCAwXX1cbiAgICAgICAgICAgICAgICByZXNpemluZz17cmVzaXppbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRoIHsuLi5odG1sUHJvcHN9IGRhdGEtdWlkPXt0aGlzLnVpZH0+XG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD57Y2hpbGRyZW59PC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPC9SZXNpemFibGVUSFdyYXA+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8dGggey4uLmh0bWxQcm9wc30+e2NoaWxkcmVufTwvdGg+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19 */"));
var _uid = 0;

var ResizableTH = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ResizableTH, _Component);

  var _super = _createSuper(ResizableTH);

  function ResizableTH() {
    var _this3 = this;

    var _this2;

    (0, _classCallCheck2.default)(this, ResizableTH);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));
    _this2.uid = 'rc-resizable-th-' + _uid++;
    _this2.state = {};

    _this2.onResize = function (e, _ref2) {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var size = _ref2.size;

      var _this2$splitProps$res = _this2.splitProps().resizableProps.onResize,
          onResize = _this2$splitProps$res === void 0 ? function () {
        (0, _newArrowCheck2.default)(this, _this4);
      }.bind(this) : _this2$splitProps$res;

      onResize(size.width);
    }.bind(this);

    _this2.onResizeStart = function () {
      (0, _newArrowCheck2.default)(this, _this3);

      _this2.setState({
        resizing: true
      });
    }.bind(this);

    _this2.onResizeStop = function () {
      (0, _newArrowCheck2.default)(this, _this3);

      _this2.setState({
        resizing: false
      });
    }.bind(this);

    _this2.splitProps = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props = _this2.props,
          column = _this2$props.column,
          width = _this2$props.width,
          resizeAble = _this2$props.resizeAble,
          resizable = _this2$props.resizable,
          onResize = _this2$props.onResize,
          minWidth = _this2$props.minWidth,
          maxWidth = _this2$props.maxWidth,
          children = _this2$props.children,
          htmlProps = (0, _objectWithoutProperties2.default)(_this2$props, _excluded2);
      return {
        resizableProps: _objectSpread(_objectSpread({}, column), _this2.props),
        htmlProps: htmlProps,
        children: children
      };
    }.bind(this);

    return _this2;
  }

  (0, _createClass2.default)(ResizableTH, [{
    key: "render",
    value: function render() {
      var _this$splitProps = this.splitProps(),
          children = _this$splitProps.children,
          resizableProps = _this$splitProps.resizableProps,
          htmlProps = _this$splitProps.htmlProps;

      var width = resizableProps.width,
          resizable = resizableProps.resizable,
          resizeAble = resizableProps.resizeAble,
          _resizableProps$minWi = resizableProps.minWidth,
          minWidth = _resizableProps$minWi === void 0 ? 20 : _resizableProps$minWi,
          _resizableProps$maxWi = resizableProps.maxWidth,
          maxWidth = _resizableProps$maxWi === void 0 ? Infinity : _resizableProps$maxWi;
      var resizing = this.state.resizing;
      return resizeAble || resizable ? /*#__PURE__*/_react.default.createElement(ResizableTHWrap, {
        width: width,
        height: 0,
        onResize: this.onResize,
        onResizeStart: this.onResizeStart,
        onResizeStop: this.onResizeStop,
        minConstraints: [minWidth, 0],
        maxConstraints: [maxWidth, 0],
        resizing: resizing
      }, /*#__PURE__*/_react.default.createElement("th", (0, _extends2.default)({}, htmlProps, {
        "data-uid": this.uid
      }), /*#__PURE__*/_react.default.createElement(_react.Fragment, null, children))) : /*#__PURE__*/_react.default.createElement("th", htmlProps, children);
    }
  }]);
  return ResizableTH;
}(_react.Component);

exports.default = ResizableTH;
ResizableTH.propTypes = {
  /** 当前宽度 */
  width: _propTypes.default.number,

  /** 最小宽度 */
  minWidth: _propTypes.default.number,

  /** 最大宽度 */
  maxWidth: _propTypes.default.number,

  /**
   * @deprecated
   * 是否可调整大小
   */
  resizeAble: _propTypes.default.bool,

  /** 是否可调整大小 */
  resizable: _propTypes.default.bool,

  /** 调整时的回调 */
  onResize: _propTypes.default.func,

  /** @ignore */
  children: _propTypes.default.node,
  column: _propTypes.default.any
};