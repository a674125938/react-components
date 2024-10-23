"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LazyRenderBox = _interopRequireDefault(require("./LazyRenderBox"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PopupInner = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(PopupInner, _Component);

  var _super = _createSuper(PopupInner);

  function PopupInner() {
    (0, _classCallCheck2.default)(this, PopupInner);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PopupInner, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var className = props.className;

      if (!props.visible) {
        className += " ".concat(props.hiddenClassName);
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onMouseDown: props.onMouseDown,
        onTouchStart: props.onTouchStart,
        style: props.style
      }, /*#__PURE__*/_react.default.createElement(_LazyRenderBox.default, {
        className: "".concat(props.prefixCls, "-content"),
        visible: props.visible
      }, props.children));
    }
  }]);
  return PopupInner;
}(_react.Component);

PopupInner.propTypes = {
  hiddenClassName: _propTypes.default.string,
  className: _propTypes.default.string,
  prefixCls: _propTypes.default.string,
  onMouseEnter: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  onMouseDown: _propTypes.default.func,
  onTouchStart: _propTypes.default.func,
  children: _propTypes.default.any,
  visible: _propTypes.default.bool,
  style: _propTypes.default.any
};
var _default = PopupInner;
exports.default = _default;