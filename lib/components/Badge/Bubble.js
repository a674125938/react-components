"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Bubble = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcAlign = _interopRequireDefault(require("../../libs/rc-align"));

var _style = require("./style");

var _placements = require("./placements");

var _excluded = ["children", "bubble", "styleType", "customStyle", "offset", "getBubbleTarget", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyleType = Object.keys(_style.bubbleStyleMap);
var Size = ['sm', 'md'];
/**
 * @deprecated
 * 后续会移除，请使用 Badge 替代
 */

var Bubble = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Bubble, _PureComponent);

  var _super = _createSuper(Bubble);

  function Bubble() {
    (0, _classCallCheck2.default)(this, Bubble);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Bubble, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var styleType = this.props.styleType;

      if (!styleType) {
        console.error('Must provide styleType for Tag');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          bubble = _this$props.bubble,
          _this$props$styleType = _this$props.styleType,
          styleType = _this$props$styleType === void 0 ? 'yellow' : _this$props$styleType,
          customStyle = _this$props.customStyle,
          offset = _this$props.offset,
          getBubbleTarget = _this$props.getBubbleTarget,
          size = _this$props.size,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement(_style.SWrap, rest, children, bubble && /*#__PURE__*/_react.default.createElement(_rcAlign.default, {
        target: getBubbleTarget || function () {
          (0, _newArrowCheck2.default)(this, _this);
          return _reactDom.default.findDOMNode(this);
        }.bind(this),
        align: _objectSpread(_objectSpread({}, _placements.bubblePlacement), {}, {
          targetOffset: offset
        })
      }, /*#__PURE__*/_react.default.createElement(_style.SBubbleWrap, {
        styleType: styleType,
        customStyle: customStyle,
        size: size
      }, bubble)));
    }
  }]);
  return Bubble;
}(_react.PureComponent);

exports.Bubble = Bubble;
Bubble.propTypes = {
  /** @ignore */
  children: _propTypes.default.node,

  /** 泡泡内容 */
  bubble: _propTypes.default.node,

  /** 内置样式风格 */
  styleType: _propTypes.default.oneOf(StyleType).isRequired,

  /** 尺寸 */
  size: _propTypes.default.oneOf(Size),

  /** 自定义样式 */
  customStyle: _propTypes.default.shape({
    /** 泡泡字色 */
    bubbleColor: _propTypes.default.string,

    /** 泡泡的背景色 */
    bubbleBackground: _propTypes.default.string
  }),

  /**
   * @ignore
   * 自定义冒泡层定位的目标元素
   */
  getBubbleTarget: _propTypes.default.func,

  /** 自定义偏移量 */
  offset: _propTypes.default.array
};
Bubble.defaultProps = {
  offset: [12, -4],
  size: 'md'
};
Bubble.StyleType = StyleType;
Bubble.Size = Size;
var _default = Bubble;
exports.default = _default;