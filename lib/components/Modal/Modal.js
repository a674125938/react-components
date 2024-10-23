"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _Notice = _interopRequireDefault(require("../../components/Notice"));

var _globalAnimation = require("../../style/globalAnimation");

var _localeConsumerDecorator = _interopRequireDefault(require("../../components/LocaleProvider/localeConsumerDecorator"));

var _ContainerContext = require("../../components/Popover/ContainerContext");

var _style = require("./style");

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _excluded = ["title", "footer", "maskAnimation", "animation", "style", "size", "closable", "className", "onClose", "locale", "children", "notice"];

var _this = void 0,
    _dec,
    _class,
    _class2,
    _temp;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Size = ['sm', 'md', 'lg'];

var ModalNotice = function ModalNotice(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var notice = _ref.notice;
  return notice ? /*#__PURE__*/_react.default.isValidElement(notice) ? /*#__PURE__*/_react.default.createElement(_Notice.default, {
    className: _style.noticeCls
  }, notice) : /*#__PURE__*/_react.default.createElement(_Notice.default, (0, _extends2.default)({}, notice, {
    className: (0, _classnames.default)(_style.noticeCls, notice.className)
  })) : null;
}.bind(void 0);

var Modal = (_dec = (0, _localeConsumerDecorator.default)({
  defaultLocale: _zh_CN.default,
  localeName: 'Modal',
  requireRuntimeLocale: true
}), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal() {
    var _this3 = this;

    var _this2;

    (0, _classCallCheck2.default)(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    _this2.getDefaultFooter = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props = _this2.props,
          onOk = _this2$props.onOk,
          onClose = _this2$props.onClose,
          locale = _this2$props.locale,
          okButtonProps = _this2$props.okButtonProps,
          cancelButtonProps = _this2$props.cancelButtonProps;
      return [/*#__PURE__*/_react.default.createElement(_Button.default, (0, _extends2.default)({
        size: "lg",
        key: "cancel",
        onClick: onClose,
        style: {
          marginRight: 8
        }
      }, cancelButtonProps), locale.cancel), /*#__PURE__*/_react.default.createElement(_Button.default, (0, _extends2.default)({
        size: "lg",
        key: "confirm",
        onClick: onOk,
        styleType: "primary"
      }, okButtonProps), locale.confirm)];
    }.bind(this);

    _this2.savePopupContainer = function (ref) {
      (0, _newArrowCheck2.default)(this, _this3);
      _this2.popupContainer = ref;
    }.bind(this);

    _this2.getPopupContainer = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      return _this2.popupContainer && _this2.popupContainer;
    }.bind(this);

    return _this2;
  }

  (0, _createClass2.default)(Modal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          _this$props$footer = _this$props.footer,
          footer = _this$props$footer === void 0 ? this.getDefaultFooter() : _this$props$footer,
          maskAnimation = _this$props.maskAnimation,
          animation = _this$props.animation,
          style = _this$props.style,
          size = _this$props.size,
          closable = _this$props.closable,
          className = _this$props.className,
          onClose = _this$props.onClose,
          locale = _this$props.locale,
          children = _this$props.children,
          notice = _this$props.notice,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var width = {
        sm: 400,
        md: 700,
        lg: 800
      }[size];
      return /*#__PURE__*/_react.default.createElement(_ContainerContext.Provider, {
        value: {}
      }, /*#__PURE__*/_react.default.createElement(_style.ModalWrap, (0, _extends2.default)({}, rest, {
        trueClassName: className,
        style: _objectSpread({
          width: width
        }, style),
        prefixCls: _style.prefixCls,
        closable: false,
        maskTransitionName: "".concat(_globalAnimation.animationPrefixCls, "-").concat(maskAnimation),
        transitionName: "".concat(_globalAnimation.animationPrefixCls, "-").concat(animation),
        onClose: onClose,
        title: [/*#__PURE__*/_react.default.createElement("div", {
          key: "content",
          className: "".concat(_style.prefixCls, "-title-content")
        }, title), closable && /*#__PURE__*/_react.default.createElement("span", {
          key: "close",
          className: "".concat(_style.prefixCls, "-close"),
          onClick: onClose
        }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
          type: "cross-circle",
          className: "".concat(_style.prefixCls, "-close-svg")
        }))],
        footer: (0, _isFunction2.default)(footer) ? footer({
          locale: locale
        }) : footer
      }), /*#__PURE__*/_react.default.createElement("div", {
        ref: this.savePopupContainer
      }), /*#__PURE__*/_react.default.createElement(ModalNotice, {
        notice: notice
      }), children));
    }
  }]);
  return Modal;
}(_react.Component), _class2.propTypes = {
  /** @ignore */
  children: _propTypes.default.node.isRequired,

  /** 头部内容 */
  title: _propTypes.default.node,

  /** 底部内容 */
  footer: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),

  /** 显示与否 */
  visible: _propTypes.default.bool,

  /** 弹窗尺寸 */
  size: _propTypes.default.oneOf(Size),

  /** 弹窗的z-index */
  zIndex: _propTypes.default.number,

  /** 是否有关闭按钮 */
  closable: _propTypes.default.bool,

  /** 是否有遮罩 */
  mask: _propTypes.default.bool,

  /** 是否可以点击遮罩关闭 */
  maskClosable: _propTypes.default.bool,

  /** 是否可以esc关闭 */
  keyboard: _propTypes.default.bool,

  /** 点击关闭按钮、默认取消按钮、遮罩进行关闭时的回调 */
  onClose: _propTypes.default.func,

  /** 点击默认的确认按钮时的回调 */
  onOk: _propTypes.default.func,

  /** 默认展示的确定按钮的自定义 props */
  okButtonProps: _propTypes.default.object,

  /** 默认展示的取消按钮的自定义 props */
  cancelButtonProps: _propTypes.default.object,

  /** 关闭后的回调 */
  afterClose: _propTypes.default.func,

  /** 关闭后是否自动销毁 */
  destroyOnClose: _propTypes.default.bool,

  /** 遮罩层的动画 */
  maskAnimation: _propTypes.default.string,

  /** 弹窗的动画 */
  animation: _propTypes.default.string,

  /** 弹窗部分的类名 */
  className: _propTypes.default.string,

  /** 弹窗包裹容器的类名 */
  wrapClassName: _propTypes.default.string,

  /** 自定义预设部分样式 */
  customStyle: _propTypes.default.shape({}),

  /** 弹窗的样式 */
  style: _propTypes.default.object,

  /** 弹窗的内容部分的样式 */
  bodyStyle: _propTypes.default.object,

  /** 遮罩层的样式 */
  maskStyle: _propTypes.default.object,

  /** @ignore */
  locale: _propTypes.default.object,

  /** 传入 node 显示提示框或使用 Notice 组件的 props 来自定义提示 */
  notice: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.object])
}, _class2.defaultProps = {
  maskAnimation: 'fade',
  animation: 'fade',
  size: 'md',
  zIndex: 1010,
  closable: true,
  mask: true
}, _temp)) || _class);
var _default = Modal;
exports.default = _default;
Modal.Size = Size;