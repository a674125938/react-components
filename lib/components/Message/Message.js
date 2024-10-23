"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.deprecatedLogForStyleTypeInfo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _deprecatedLog = _interopRequireDefault(require("../../utils/deprecatedLog"));

var _style = require("./style");

var _excluded = ["children", "styleType", "closable", "title", "footer"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var deprecatedLogForStyleTypeInfo = (0, _deprecatedLog.default)('Message styleType "info"', '"success"');
exports.deprecatedLogForStyleTypeInfo = deprecatedLogForStyleTypeInfo;
var StyleType = ['default', 'success', 'loading', 'warning', 'error'];
var IconMap = {
  default: 'circle-mark-fill',
  error: 'circle-cross-fill',
  success: 'circle-yes-md-fill',
  warning: 'circle-mark-fill',
  loading: 'loading-line'
};

var Message = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Message, _Component);

  var _super = _createSuper(Message);

  function Message() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Message);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.componentWillMount = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var styleType = _this.props.styleType;

      if (styleType === 'info') {
        deprecatedLogForStyleTypeInfo();
      }
    }.bind(this);

    _this.close = function () {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props$onClose = _this.props.onClose,
          onClose = _this$props$onClose === void 0 ? function () {
        (0, _newArrowCheck2.default)(this, _this3);
      }.bind(this) : _this$props$onClose;
      onClose();
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(Message, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          styleType = _this$props.styleType,
          closable = _this$props.closable,
          title = _this$props.title,
          footer = _this$props.footer,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement(_style.MessageWrap, (0, _extends2.default)({}, rest, {
        styleType: styleType
      }), /*#__PURE__*/_react.default.createElement(_style.LeftPrefix, {
        styleType: styleType
      }), /*#__PURE__*/_react.default.createElement(_style.IconWrap, null, /*#__PURE__*/_react.default.createElement(_style.TipIcon, {
        styleType: styleType,
        spin: styleType === 'loading',
        size: "20px",
        type: IconMap[styleType] || 'exclamation-circle-filled'
      })), closable && /*#__PURE__*/_react.default.createElement(_style.CloseIconWrap, {
        onClick: this.close
      }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        size: "20px",
        type: "cross"
      })), title && (children ? /*#__PURE__*/_react.default.createElement(_style.TitleWrap, null, title) : /*#__PURE__*/_react.default.createElement(_style.ContentWrap, null, title)), children && /*#__PURE__*/_react.default.createElement(_style.ContentWrap, null, children), footer && /*#__PURE__*/_react.default.createElement(_style.FooterWrap, null, footer));
    }
  }]);
  return Message;
}(_react.Component);

Message.propTypes = {
  /** 是否可关闭 */
  closable: _propTypes.default.bool,

  /** 标题 */
  title: _propTypes.default.node,

  /** 底栏 */
  footer: _propTypes.default.node,

  /** 关闭回调 */
  onClose: _propTypes.default.func,

  /** @ignore */
  className: _propTypes.default.string,

  /** @ignore */
  children: _propTypes.default.node,

  /** 样式风格，目前只影响 Icon */
  styleType: _propTypes.default.oneOf(StyleType)
};
Message.defaultProps = {
  styleType: 'default',
  closable: true
};
Message.StyleType = StyleType;
var _default = Message;
exports.default = _default;