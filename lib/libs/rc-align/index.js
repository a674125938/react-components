"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _domAlign = require("../dom-align");

var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _isSafari = _interopRequireDefault(require("../../utils/isSafari"));

var _util = require("./util");

var _this4 = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function getElement(func) {
  if (typeof func !== 'function' || !func) return null;
  return func();
}

function getPoint(point) {
  if ((0, _typeof2.default)(point) !== 'object' || !point) return null;
  return point;
}

var Align = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Align, _Component);

  var _super = _createSuper(Align);

  function Align() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Align);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.forceAlign = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          target = _this$props.target,
          align = _this$props.align,
          onAlign = _this$props.onAlign;

      if (!disabled && target) {
        // eslint-disable-next-line react/no-find-dom-node
        var source = _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)(_this));

        var result;
        var element = getElement(target);
        var point = getPoint(target); // IE lose focus after element realign
        // We should record activeElement and restore later

        var activeElement = document.activeElement;

        if (element) {
          result = (0, _domAlign.alignElement)(source, element, _isSafari.default ? _objectSpread(_objectSpread({}, align), {}, {
            useCssTransform: true
          }) : align);
        } else if (point) {
          result = (0, _domAlign.alignPoint)(source, point, _isSafari.default ? _objectSpread(_objectSpread({}, align), {}, {
            useCssTransform: true
          }) : align);
        }

        (0, _util.restoreFocus)(activeElement, source);

        if (onAlign) {
          onAlign(source, result);
        }
      }
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(Align, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props; // if parent ref not attached .... use document.getElementById

      this.forceAlign();

      if (!props.disabled && props.monitorWindowResize) {
        this.startMonitorWindowResize();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var reAlign = false;
      var props = this.props;

      if (!props.disabled) {
        // eslint-disable-next-line react/no-find-dom-node
        var source = _reactDom.default.findDOMNode(this);

        var sourceRect = source ? source.getBoundingClientRect() : null;

        if (prevProps.disabled) {
          reAlign = true;
        } else {
          var lastElement = getElement(prevProps.target);
          var currentElement = getElement(props.target);
          var lastPoint = getPoint(prevProps.target);
          var currentPoint = getPoint(props.target);

          if ((0, _util.isWindow)(lastElement) && (0, _util.isWindow)(currentElement)) {
            // Skip if is window
            reAlign = false;
          } else if (lastElement !== currentElement || lastElement && !currentElement && currentPoint || lastPoint && currentPoint && currentElement || currentPoint && !(0, _util.isSamePoint)(lastPoint, currentPoint)) {
            reAlign = true;
          } // If source element size changed


          var preRect = this.sourceRect || {};

          if (!reAlign && source && (!(0, _util.isSimilarValue)(preRect.width, sourceRect.width) || !(0, _util.isSimilarValue)(preRect.height, sourceRect.height))) {
            reAlign = true;
          }

          if (!(0, _shallowequal.default)(prevProps.align, props.align)) {
            reAlign = true;
          }
        }

        this.sourceRect = sourceRect;
      }

      if (reAlign) {
        this.forceAlign();
      }

      if (props.monitorWindowResize && !props.disabled) {
        this.startMonitorWindowResize();
      } else {
        this.stopMonitorWindowResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopMonitorWindowResize();
    }
  }, {
    key: "startMonitorWindowResize",
    value: function startMonitorWindowResize() {
      if (!this.resizeHandler) {
        this.bufferMonitor = (0, _util.buffer)(this.forceAlign, this.props.monitorBufferTime);
        this.resizeHandler = (0, _addEventListener.default)(window, 'resize', this.bufferMonitor);
      }
    }
  }, {
    key: "stopMonitorWindowResize",
    value: function stopMonitorWindowResize() {
      if (this.resizeHandler) {
        this.bufferMonitor.clear();
        this.resizeHandler.remove();
        this.resizeHandler = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          childrenProps = _this$props2.childrenProps,
          children = _this$props2.children,
          container = _this$props2.container;

      var child = _react.default.Children.only(children);

      if (childrenProps) {
        var newProps = {};
        var propList = Object.keys(childrenProps);
        propList.forEach(function (prop) {
          (0, _newArrowCheck2.default)(this, _this3);
          newProps[prop] = this.props[childrenProps[prop]];
        }.bind(this));
        child = /*#__PURE__*/_react.default.cloneElement(child, newProps);
      }

      if (container) {
        if (typeof container === 'function') {
          return /*#__PURE__*/_reactDom.default.createPortal(child, container());
        } else {
          return /*#__PURE__*/_reactDom.default.createPortal(child, container);
        }
      }

      return child;
    }
  }]);
  return Align;
}(_react.Component);

Align.propTypes = {
  childrenProps: _propTypes.default.object,
  align: _propTypes.default.object.isRequired,
  target: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    clientX: _propTypes.default.number,
    clientY: _propTypes.default.number,
    pageX: _propTypes.default.number,
    pageY: _propTypes.default.number
  })]),
  onAlign: _propTypes.default.func,
  monitorBufferTime: _propTypes.default.number,
  monitorWindowResize: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  children: _propTypes.default.any,
  container: _propTypes.default.func
};
Align.defaultProps = {
  target: function target() {
    (0, _newArrowCheck2.default)(this, _this4);
    return window;
  }.bind(void 0),
  monitorBufferTime: 50,
  monitorWindowResize: false,
  disabled: false
};
var _default = Align;
exports.default = _default;