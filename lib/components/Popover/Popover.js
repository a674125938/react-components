"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "prefixCls", {
  enumerable: true,
  get: function get() {
    return _style.prefixCls;
  }
});
exports.default = exports.Placement = exports.Trigger = exports.Animation = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _throttle2 = _interopRequireDefault(require("lodash/throttle"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _placements = _interopRequireDefault(require("./placements"));

var _style = require("./style");

var _ContainerContext = require("./ContainerContext");

var _excluded = ["children", "transitionName", "animation", "align", "placement", "trigger", "stretch", "className", "getPopupContainer", "forwardPopupContainer"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Animation = ['fade', 'zoom', 'bounce', 'slide-up'];
exports.Animation = Animation;
var Trigger = ['hover', 'focus', 'click', 'contextMenu'];
exports.Trigger = Trigger;
var Placement = Object.keys(_placements.default);
exports.Placement = Placement;

var Popover = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Popover, _Component);

  var _super = _createSuper(Popover);

  function Popover(_props) {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Popover);
    _this = _super.call(this, _props);
    _this.__scroll_lock = false;
    _this.__scroll_bind = false;

    _this.bindPopupWrap = function (_ref) {
      (0, _newArrowCheck2.default)(this, _this2);
      if (_this.popupWrap === _ref) return;

      if (_this.popupWrap) {
        _this.popupWrap.removeEventListener('scroll', _this.onPopupWrapScroll, true);
      }

      _this.popupWrap = _ref;

      if (_this.popupWrap) {
        _this.popupWrap.addEventListener('scroll', _this.onPopupWrapScroll, true);
      }
    }.bind(this);

    _this.onPopupWrapScroll = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      _this.__scroll_lock = true;

      _this.unlockScroll();
    }.bind(this);

    _this.unlockScroll = (0, _debounce2.default)(function () {
      (0, _newArrowCheck2.default)(this, _this2);
      _this.__scroll_lock = false;
    }.bind(this), 200);

    _this.onScroll = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      if (_this.__scroll_lock) return;

      _this.forceAlign();
    }.bind(this);

    _this.forceAlign = (0, _throttle2.default)(function () {
      (0, _newArrowCheck2.default)(this, _this2);
      if (!_this.state.visible) return;
      if (_this.__scroll_lock) return;
      _this.trigger && _this.trigger.forcePopupAlign();
    }.bind(this), 33, {
      leading: false
    });

    _this.bindScroll = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      if (!_this.__scroll_bind) {
        document.addEventListener('scroll', _this.onScroll, true);
        _this.__scroll_bind = true;
      }
    }.bind(this);

    _this.unbindScroll = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      if (_this.__scroll_bind) {
        document.removeEventListener('scroll', _this.onScroll, true);
        _this.__scroll_bind = false;
      }
    }.bind(this);

    _this.updateScroll = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      if (_this.props.forceAlignWhenScroll) {
        _this.bindScroll();
      } else {
        _this.unbindScroll();
      }
    }.bind(this);

    _this.componentDidMount = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.updateScroll();
    }.bind(this);

    _this.componentWillUnmount = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.unbindScroll();
    }.bind(this);

    _this.componentDidUpdate = function (prevProps) {
      (0, _newArrowCheck2.default)(this, _this2);

      if (prevProps.forceAlignWhenScroll !== _this.props.forceAlignWhenScroll) {
        _this.updateScroll();
      }

      _this.props.forceAlignWhenUpdate && _this.forceAlign();
    }.bind(this);

    _this.onVisibleChange = function (visible) {
      (0, _newArrowCheck2.default)(this, _this2);
      var props = _this.props;

      if (!('visible' in props)) {
        _this.setState({
          visible: visible
        });
      }

      props.onVisibleChange(visible);
    }.bind(this);

    _this.saveTrigger = function (node) {
      (0, _newArrowCheck2.default)(this, _this2);
      _this.trigger = node;
    }.bind(this);

    if ('visible' in _props) {
      _this.state = {
        visible: _props.visible
      };
    } else {
      _this.state = {
        visible: _props.defaultVisible
      };
    }

    return _this;
  } // 滚动锁


  (0, _createClass2.default)(Popover, [{
    key: "getPopup",
    value: function getPopup() {
      var popup = this.props.popup;
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.bindPopupWrap
      }, popup);
    }
  }, {
    key: "getPopupDomNode",
    value: function getPopupDomNode() {
      return this.trigger.getPopupDomNode();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          transitionName = _this$props.transitionName,
          animation = _this$props.animation,
          align = _this$props.align,
          placement = _this$props.placement,
          trigger = _this$props.trigger,
          _this$props$stretch = _this$props.stretch,
          stretch = _this$props$stretch === void 0 ? [] : _this$props$stretch,
          className = _this$props.className,
          getPopupContainer = _this$props.getPopupContainer,
          forwardPopupContainer = _this$props.forwardPopupContainer,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var popup = this.getPopup();

      var renderPopover = function renderPopover(getPopupContainer) {
        (0, _newArrowCheck2.default)(this, _this3);
        return /*#__PURE__*/_react.default.createElement(_style.PopoverWrap, (0, _extends2.default)({}, rest, {
          triggerRef: this.saveTrigger,
          action: trigger,
          popupPlacement: placement,
          popupAlign: align,
          popupTransitionName: transitionName || animation ? _style.animationPrefixCls + '-' + animation : null,
          popupVisible: popup == null ? false : this.state.visible,
          popup: popup,
          onPopupVisibleChange: this.onVisibleChange,
          stretch: stretch.join(''),
          trueClassName: className,
          getPopupContainer: getPopupContainer
        }), children);
      }.bind(this);

      return !getPopupContainer && forwardPopupContainer ? /*#__PURE__*/_react.default.createElement(_ContainerContext.Consumer, null, function () {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            getPopupContainerFromContext = _ref2.getPopupContainer;

        return renderPopover(getPopupContainerFromContext || (typeof forwardPopupContainer === 'function' ? forwardPopupContainer : undefined));
      }) : renderPopover(getPopupContainer);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('visible' in nextProps) {
        return {
          visible: nextProps.visible
        };
      }

      return null;
    }
  }]);
  return Popover;
}(_react.Component);

Popover.propTypes = {
  /** 受控，控制弹出层展示 */
  visible: _propTypes.default.bool,

  /** 非受控，是否默认展示弹出层 */
  defaultVisible: _propTypes.default.bool,

  /** 弹出层显示隐藏时触发 */
  onVisibleChange: _propTypes.default.func,

  /** 如何触发弹出层，focus 需要注意被包裹元素必须能触发 focus 事件，如链接、按钮、input 等 */
  trigger: _propTypes.default.arrayOf(_propTypes.default.oneOf(Trigger)),

  /** 根据鼠标位置定位 */
  alignPoint: _propTypes.default.bool,

  /** @ignore */
  showAction: _propTypes.default.array,

  /** @ignore */
  hideAction: _propTypes.default.array,

  /** 位置 */
  placement: _propTypes.default.oneOf(Placement),

  /**
   * @ignore
   * 自定义定位配置
   */
  builtinPlacements: _propTypes.default.object,

  /** 自定义定位 */
  align: _propTypes.default.object,

  /** 尺寸自适应，'width', 'minWidth', 'height', 'minHeight' 或混合使用 */
  stretch: _propTypes.default.arrayOf(_propTypes.default.oneOf(['width', 'minWidth', 'height', 'minHeight'])),

  /** 弹出层内容 */
  popup: _propTypes.default.node,

  /** 弹出层的类名 */
  popupClassName: _propTypes.default.string,

  /** 弹出层的样式 */
  popupStyle: _propTypes.default.object,

  /** 弹出层的 z-index */
  zIndex: _propTypes.default.number,

  /** 自定义弹出层容器 */
  getPopupContainer: _propTypes.default.func,

  /** 是否使用最上层传入的安全容器，如果为 function，在没有找到安全容器时将会使用该 function 作为 getPopupContainer 的值 */
  forwardPopupContainer: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),

  /**
   * @ignore
   * 自定义类名前缀
   */
  prefixCls: _propTypes.default.string,

  /** 需要对子元素进行定位，所以只接收一个有效 react 元素（不接收文本节点） */
  children: _propTypes.default.element.isRequired,

  /** 动画名称，slide-up 只支持上下方向的弹窗 */
  animation: _propTypes.default.oneOf(Animation),

  /**
   * @ignore
   * 自定义动画
   */
  transitionName: _propTypes.default.string,

  /**
   * @ignore
   * 更新时强制重新定位
   */
  forceAlignWhenUpdate: _propTypes.default.bool,

  /** 滚动时强制重新定位 */
  forceAlignWhenScroll: _propTypes.default.bool,

  /** @ignore */
  className: _propTypes.default.string
};
Popover.defaultProps = {
  trigger: ['hover'],
  showAction: [],
  hideAction: [],
  popupClassName: '',
  animation: 'fade',
  popupStyle: {},
  defaultVisible: false,
  onVisibleChange: function onVisibleChange() {},
  placement: 'bottomLeft',
  builtinPlacements: _placements.default,
  forceAlignWhenScroll: true,
  prefixCls: _style.prefixCls
};
(0, _reactLifecyclesCompat.polyfill)(Popover);
var _default = Popover;
exports.default = _default;