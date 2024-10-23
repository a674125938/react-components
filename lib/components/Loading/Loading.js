"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.animationName = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _style = require("./style");

var _excluded = ["loading", "children", "indicator", "tip", "maskStyle", "maskClassName"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var animationName = 'uc-fe-animation-fade';
exports.animationName = animationName;

var Loading = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Loading, _Component);

  var _super = _createSuper(Loading);

  function Loading() {
    (0, _classCallCheck2.default)(this, Loading);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Loading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loading = _this$props.loading,
          children = _this$props.children,
          indicator = _this$props.indicator,
          tip = _this$props.tip,
          maskStyle = _this$props.maskStyle,
          maskClassName = _this$props.maskClassName,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement(_style.LoadingWrap, rest, children, /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
        in: loading,
        unmountOnExit: true,
        classNames: animationName,
        timeout: _style.animationDuration
      }, /*#__PURE__*/_react.default.createElement(_style.Mask, {
        style: maskStyle,
        maskClassName: maskClassName
      }, /*#__PURE__*/_react.default.createElement(_style.IndicatorWrap, null, /*#__PURE__*/_react.default.createElement("div", null, indicator, tip && /*#__PURE__*/_react.default.createElement(_style.TipWrap, null, tip))))));
    }
  }]);
  return Loading;
}(_react.Component);

Loading.propTypes = {
  /** 是否加载 */
  loading: _propTypes.default.bool,

  /** 加载指示符 */
  indicator: _propTypes.default.node,

  /** 文字提示 */
  tip: _propTypes.default.node,

  /** 遮罩层样式 */
  maskStyle: _propTypes.default.object,

  /** 遮罩层类名 */
  maskClassName: _propTypes.default.string,

  /** @ignore */
  children: _propTypes.default.node
};
Loading.defaultProps = {
  loading: false,
  indicator: /*#__PURE__*/_react.default.createElement(_style.LoadingIcon, {
    size: "14px",
    type: "ring-loading",
    spin: true
  })
};
var _default = Loading;
exports.default = _default;