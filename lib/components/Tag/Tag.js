"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleType = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _excluded = ["children", "styleType", "closable", "icon", "disabled", "onClose"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyleType = Object.keys(_style.styleMap);
exports.StyleType = StyleType;

var Tag = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Tag, _PureComponent);

  var _super = _createSuper(Tag);

  function Tag() {
    (0, _classCallCheck2.default)(this, Tag);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          styleType = _this$props.styleType,
          closable = _this$props.closable,
          icon = _this$props.icon,
          disabled = _this$props.disabled,
          onClose = _this$props.onClose,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement(_style.TagWrapper, (0, _extends2.default)({
        styleType: styleType,
        disabled: disabled
      }, rest), icon && /*#__PURE__*/_react.default.createElement(_style.PrefixIconWrapper, null, typeof icon === 'string' ? /*#__PURE__*/_react.default.createElement(_style.PrefixIcon, {
        type: icon
      }) : icon), /*#__PURE__*/_react.default.createElement(_style.ContentWrapper, null, children), closable && /*#__PURE__*/_react.default.createElement(_style.CloseIconWrapper, {
        onClick: disabled ? undefined : onClose
      }, /*#__PURE__*/_react.default.createElement(_style.CloseIcon, {
        type: "cross"
      })));
    }
  }]);
  return Tag;
}(_react.PureComponent);

Tag.propTypes = {
  /** @ignore */
  children: _propTypes.default.node,

  /**
   * 样式风格
   */
  styleType: _propTypes.default.oneOf(StyleType),

  /**
   * 是否显示关闭按钮
   */
  closable: _propTypes.default.bool,

  /**
   * 关闭回调
   */
  onClose: _propTypes.default.func,

  /**
   * 自定义前置 icon
   */
  icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * 是否禁用
   */
  disabled: _propTypes.default.bool,

  /**
   * 自定义样式
   */
  customStyle: _propTypes.default.shape({
    /** 字色/图标色 */
    color: _propTypes.default.string,

    /** 边框色 */
    borderColor: _propTypes.default.string,

    /** 背景色 */
    background: _propTypes.default.string,

    /** 关闭按钮 hover 背景色 */
    closeIconHoverBackground: _propTypes.default.string
  })
};
Tag.defaultProps = {
  styleType: 'default'
};
var _default = Tag;
exports.default = _default;
Tag.StyleType = StyleType;