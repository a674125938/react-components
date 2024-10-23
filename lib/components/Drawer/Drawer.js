"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var _reactTransitionGroup = require("react-transition-group");

var _ContainerContext = require("../../components/Popover/ContainerContext");

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _style = require("./style");

var _this3 = void 0;

var _excluded = ["children", "visible", "mask", "maskClosable", "onClose", "destroyOnClose", "closeHandler"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Placement = ['left', 'right', 'top', 'bottom'];

var CloseHandler = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(CloseHandler, _PureComponent);

  var _super = _createSuper(CloseHandler);

  function CloseHandler() {
    (0, _classCallCheck2.default)(this, CloseHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CloseHandler, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          onClose = _this$props.onClose;
      return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
        in: visible,
        unmountOnExit: false,
        classNames: "uc-fe-animation-fade",
        timeout: 100
      }, /*#__PURE__*/_react.default.createElement(_style.CloseHandlerWrapper, {
        onClick: onClose
      }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        type: "cross"
      })));
    }
  }]);
  return CloseHandler;
}(_react.PureComponent);

CloseHandler.propTypes = {
  visible: _propTypes.default.bool,
  onClose: _propTypes.default.func.isRequired
};

var Drawer = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Drawer, _Component);

  var _super2 = _createSuper(Drawer);

  function Drawer() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Drawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));
    _this.state = {
      visible: _this.props.visible
    };

    _this.onMaskClick = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          maskClosable = _this$props2.maskClosable;
      maskClosable && onClose();
    }.bind(this);

    _this.afterVisibleChange = function (visible) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.setState({
        visible: visible
      });
    }.bind(this);

    _this.getDestroy = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props3 = _this.props,
          destroyOnClose = _this$props3.destroyOnClose,
          visible = _this$props3.visible;
      var visibleState = _this.state.visible;
      return destroyOnClose && !visible && !visibleState;
    }.bind(this);

    _this.getShow = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var visible = _this.props.visible;
      var visibleState = _this.state.visible;
      return visible || visibleState;
    }.bind(this);

    _this.renderCloseHandler = function (_ref) {
      (0, _newArrowCheck2.default)(this, _this2);
      var closeHandler = _ref.closeHandler,
          onClose = _ref.onClose,
          show = _ref.show,
          visible = _ref.visible;
      if (!show) return null;
      return closeHandler === undefined ? /*#__PURE__*/_react.default.createElement(CloseHandler, {
        visible: visible,
        onClose: onClose
      }) : closeHandler;
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(Drawer, [{
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props4 = this.props,
          children = _this$props4.children,
          visible = _this$props4.visible,
          mask = _this$props4.mask,
          maskClosable = _this$props4.maskClosable,
          onClose = _this$props4.onClose,
          destroyOnClose = _this$props4.destroyOnClose,
          closeHandler = _this$props4.closeHandler,
          rest = (0, _objectWithoutProperties2.default)(_this$props4, _excluded);
      var destroy = this.getDestroy();
      var show = this.getShow();
      return !destroy && /*#__PURE__*/_react.default.createElement(_ContainerContext.Provider, {
        value: {}
      }, /*#__PURE__*/_react.default.createElement(_style.DrawerWrap, (0, _extends2.default)({}, rest, {
        open: visible,
        onMaskClick: this.onMaskClick,
        showMask: mask,
        handler: false,
        afterVisibleChange: this.afterVisibleChange,
        show: show,
        closeHandler: this.renderCloseHandler({
          closeHandler: closeHandler,
          onClose: onClose,
          show: show,
          visible: visible
        })
      }), children));
    }
  }]);
  return Drawer;
}(_react.Component);

Drawer.propTypes = {
  /** @ignore */
  children: _propTypes.default.node.isRequired,

  /** 是否显示，controlled */
  visible: _propTypes.default.bool,

  /** 是否有遮罩 */
  mask: _propTypes.default.bool,

  /** 是否可以点击遮罩关闭 */
  maskClosable: _propTypes.default.bool,

  /** 是否可以esc关闭 */
  keyboard: _propTypes.default.bool,

  /** 点击关闭按钮、遮罩进行关闭时的回调 */
  onClose: _propTypes.default.func,

  /** 关闭后是否自动销毁 */
  destroyOnClose: _propTypes.default.bool,

  /** 弹出位置 */
  placement: _propTypes.default.oneOf(Placement),

  /** 抽屉的宽度，left right可用 */
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /** 抽屉的高度，top bottom可用 */
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /** 设置抽屉容器 */
  getContainer: _propTypes.default.func,

  /** 弹出层的z-index */
  zIndex: _propTypes.default.number,

  /** 传入 false/null 隐藏关闭控件，或自定义控件 */
  closeHandler: _propTypes.default.oneOfType([_propTypes.default.oneOf([null, false]), _propTypes.default.node]),

  /** @ignore */
  level: _propTypes.default.any
};
Drawer.defaultProps = {
  visible: false,
  mask: true,
  maskClosable: true,
  keyboard: false,
  onClose: function onClose() {
    (0, _newArrowCheck2.default)(this, _this3);
  }.bind(void 0),
  level: null,
  placement: 'right',
  zIndex: 1010
};
Drawer.Placement = Placement;
var _default = Drawer;
exports.default = _default;