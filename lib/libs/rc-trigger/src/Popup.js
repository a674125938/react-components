"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _rcAnimate = _interopRequireDefault(require("rc-animate"));

var _rcAlign = _interopRequireDefault(require("../../../libs/rc-align"));

var _PopupInner = _interopRequireDefault(require("./PopupInner"));

var _LazyRenderBox = _interopRequireDefault(require("./LazyRenderBox"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Popup = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Popup, _Component);

  var _super = _createSuper(Popup);

  function Popup(_props) {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Popup);
    _this = _super.call(this, _props);

    _this.onAlign = function (popupDomNode, align) {
      (0, _newArrowCheck2.default)(this, _this2);
      var props = _this.props;
      var currentAlignClassName = props.getClassNameFromAlign(align); // FIX: https://github.com/react-component/trigger/issues/56
      // FIX: https://github.com/react-component/tooltip/issues/79

      if (_this.currentAlignClassName !== currentAlignClassName) {
        _this.currentAlignClassName = currentAlignClassName;
        popupDomNode.className = _this.getClassName(currentAlignClassName);
      }

      props.onAlign(popupDomNode, align);
    }.bind(this);

    _this.setStretchSize = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props = _this.props,
          stretch = _this$props.stretch,
          getRootDomNode = _this$props.getRootDomNode,
          visible = _this$props.visible;
      var _this$state = _this.state,
          stretchChecked = _this$state.stretchChecked,
          targetHeight = _this$state.targetHeight,
          targetWidth = _this$state.targetWidth;

      if (!stretch || !visible) {
        if (stretchChecked) {
          _this.setState({
            stretchChecked: false
          });
        }

        return;
      }

      var $ele = getRootDomNode();
      if (!$ele) return;
      var height = $ele.offsetHeight;
      var width = $ele.offsetWidth;

      if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
        _this.setState({
          stretchChecked: true,
          targetHeight: height,
          targetWidth: width
        });
      }
    }.bind(this);

    _this.getTargetElement = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      return _this.props.getRootDomNode();
    }.bind(this);

    _this.getAlignTarget = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var point = _this.props.point;

      if (point) {
        return point;
      }

      return _this.getTargetElement;
    }.bind(this);

    _this.state = {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined
    };
    _this.savePopupRef = _utils.saveRef.bind((0, _assertThisInitialized2.default)(_this), 'popupInstance');
    _this.saveAlignRef = _utils.saveRef.bind((0, _assertThisInitialized2.default)(_this), 'alignInstance');
    return _this;
  }

  (0, _createClass2.default)(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.rootNode = this.getPopupDomNode();
      this.setStretchSize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setStretchSize();
    }
  }, {
    key: "getPopupDomNode",
    value: function getPopupDomNode() {
      return _reactDom.default.findDOMNode(this.popupInstance);
    }
  }, {
    key: "getMaskTransitionName",
    value: function getMaskTransitionName() {
      var props = this.props;
      var transitionName = props.maskTransitionName;
      var animation = props.maskAnimation;

      if (!transitionName && animation) {
        transitionName = "".concat(props.prefixCls, "-").concat(animation);
      }

      return transitionName;
    }
  }, {
    key: "getTransitionName",
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;

      if (!transitionName && props.animation) {
        transitionName = "".concat(props.prefixCls, "-").concat(props.animation);
      }

      return transitionName;
    }
  }, {
    key: "getClassName",
    value: function getClassName(currentAlignClassName) {
      return "".concat(this.props.prefixCls, " ").concat(this.props.className, " ").concat(currentAlignClassName);
    }
  }, {
    key: "getPopupElement",
    value: function getPopupElement() {
      var _this3 = this;

      var savePopupRef = this.savePopupRef;
      var _this$state2 = this.state,
          stretchChecked = _this$state2.stretchChecked,
          targetHeight = _this$state2.targetHeight,
          targetWidth = _this$state2.targetWidth;
      var _this$props2 = this.props,
          align = _this$props2.align,
          visible = _this$props2.visible,
          prefixCls = _this$props2.prefixCls,
          style = _this$props2.style,
          getClassNameFromAlign = _this$props2.getClassNameFromAlign,
          destroyPopupOnHide = _this$props2.destroyPopupOnHide,
          stretch = _this$props2.stretch,
          children = _this$props2.children,
          onMouseEnter = _this$props2.onMouseEnter,
          onMouseLeave = _this$props2.onMouseLeave,
          onMouseDown = _this$props2.onMouseDown,
          onTouchStart = _this$props2.onTouchStart;
      var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
      var hiddenClassName = "".concat(prefixCls, "-hidden");

      if (!visible) {
        this.currentAlignClassName = null;
      }

      var sizeStyle = {};

      if (stretch) {
        // Stretch with target
        if (stretch.indexOf('height') !== -1) {
          sizeStyle.height = targetHeight;
        } else if (stretch.indexOf('minHeight') !== -1) {
          sizeStyle.minHeight = targetHeight;
        }

        if (stretch.indexOf('width') !== -1) {
          sizeStyle.width = targetWidth;
        } else if (stretch.indexOf('minWidth') !== -1) {
          sizeStyle.minWidth = targetWidth;
        } // Delay force align to makes ui smooth


        if (!stretchChecked) {
          sizeStyle.visibility = 'hidden';
          setTimeout(function () {
            (0, _newArrowCheck2.default)(this, _this3);

            if (this.alignInstance) {
              this.alignInstance.forceAlign();
            }
          }.bind(this), 0);
        }
      }

      var newStyle = _objectSpread(_objectSpread(_objectSpread({}, sizeStyle), style), this.getZIndexStyle());

      var popupInnerProps = {
        className: className,
        prefixCls: prefixCls,
        ref: savePopupRef,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onMouseDown: onMouseDown,
        onTouchStart: onTouchStart,
        style: newStyle
      };

      if (destroyPopupOnHide) {
        return /*#__PURE__*/_react.default.createElement(_rcAnimate.default, {
          component: "",
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        }, visible ? /*#__PURE__*/_react.default.createElement(_rcAlign.default, {
          target: this.getAlignTarget(),
          key: "popup",
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          align: align,
          onAlign: this.onAlign
        }, /*#__PURE__*/_react.default.createElement(_PopupInner.default, (0, _extends2.default)({
          visible: true
        }, popupInnerProps), children)) : null);
      }

      return /*#__PURE__*/_react.default.createElement(_rcAnimate.default, {
        component: "",
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: "xVisible"
      }, /*#__PURE__*/_react.default.createElement(_rcAlign.default, {
        target: this.getAlignTarget(),
        key: "popup",
        ref: this.saveAlignRef,
        monitorWindowResize: true,
        xVisible: visible,
        childrenProps: {
          visible: 'xVisible'
        },
        disabled: !visible,
        align: align,
        onAlign: this.onAlign
      }, /*#__PURE__*/_react.default.createElement(_PopupInner.default, (0, _extends2.default)({
        hiddenClassName: hiddenClassName
      }, popupInnerProps), children)));
    }
  }, {
    key: "getZIndexStyle",
    value: function getZIndexStyle() {
      var style = {};
      var props = this.props;

      if (props.zIndex !== undefined) {
        style.zIndex = props.zIndex;
      }

      return style;
    }
  }, {
    key: "getMaskElement",
    value: function getMaskElement() {
      var props = this.props;
      var maskElement;

      if (props.mask) {
        var maskTransition = this.getMaskTransitionName();
        maskElement = /*#__PURE__*/_react.default.createElement(_LazyRenderBox.default, {
          style: this.getZIndexStyle(),
          key: "mask",
          className: "".concat(props.prefixCls, "-mask"),
          hiddenClassName: "".concat(props.prefixCls, "-mask-hidden"),
          visible: props.visible
        });

        if (maskTransition) {
          maskElement = /*#__PURE__*/_react.default.createElement(_rcAnimate.default, {
            key: "mask",
            showProp: "visible",
            transitionAppear: true,
            component: "",
            transitionName: maskTransition
          }, maskElement);
        }
      }

      return maskElement;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, this.getMaskElement(), this.getPopupElement());
    }
  }]);
  return Popup;
}(_react.Component);

Popup.propTypes = {
  visible: _propTypes.default.bool,
  style: _propTypes.default.object,
  getClassNameFromAlign: _propTypes.default.func,
  onAlign: _propTypes.default.func,
  getRootDomNode: _propTypes.default.func,
  align: _propTypes.default.any,
  destroyPopupOnHide: _propTypes.default.bool,
  className: _propTypes.default.string,
  prefixCls: _propTypes.default.string,
  onMouseEnter: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  onMouseDown: _propTypes.default.func,
  onTouchStart: _propTypes.default.func,
  stretch: _propTypes.default.string,
  children: _propTypes.default.node,
  point: _propTypes.default.shape({
    pageX: _propTypes.default.number,
    pageY: _propTypes.default.number
  }),
  transitionName: _propTypes.default.string,
  maskTransitionName: _propTypes.default.string,
  maskAnimation: _propTypes.default.string,
  animation: _propTypes.default.string,
  zIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  mask: _propTypes.default.bool
};
var _default = Popup;
exports.default = _default;