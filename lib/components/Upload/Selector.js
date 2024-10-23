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

var _Button = _interopRequireDefault(require("../../components/Button"));

var _style = require("./style");

var _excluded = ["disabled", "multiple", "accept", "selector", "locale", "onSelect"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * 文件选择控件
 */
var Selector = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Selector, _PureComponent);

  var _super = _createSuper(Selector);

  function Selector() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Selector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.trigger = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      _this._trigger && _this._trigger.click();
    }.bind(this);

    _this.cleanTrigger = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      _this._trigger && (_this._trigger.value = '');
    }.bind(this);

    _this.onChange = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);
      var onSelect = _this.props.onSelect;
      onSelect === null || onSelect === void 0 ? void 0 : onSelect(e.target.files);

      _this.cleanTrigger();
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(Selector, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          disabled = _this$props.disabled,
          multiple = _this$props.multiple,
          accept = _this$props.accept,
          selector = _this$props.selector,
          locale = _this$props.locale,
          onSelect = _this$props.onSelect,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return selector === null ? null : /*#__PURE__*/_react.default.createElement(_style.SelectorWrap, (0, _extends2.default)({
        onClick: this.trigger,
        disabled: disabled
      }, rest), /*#__PURE__*/_react.default.createElement("input", {
        type: "file",
        hidden: true,
        ref: function (ref) {
          (0, _newArrowCheck2.default)(this, _this3);
          return this._trigger = ref;
        }.bind(this),
        onChange: this.onChange,
        disabled: disabled,
        multiple: multiple,
        accept: accept
      }), selector ? selector : [/*#__PURE__*/_react.default.createElement(_Button.default, {
        size: "md",
        styleType: "primary",
        disabled: disabled,
        key: "button"
      }, locale.selectFile), /*#__PURE__*/_react.default.createElement("span", {
        className: _style.tipCls,
        key: "tip"
      }, locale.selectFileTip)]);
    }
  }]);
  return Selector;
}(_react.PureComponent);

exports.default = Selector;
Selector.propTypes = {
  /** 选取文件回调函数 */
  onSelect: _propTypes.default.func,

  /** 自定义触发图片选择的选择控件 */
  selector: _propTypes.default.node,

  /** 是否禁用 */
  disabled: _propTypes.default.bool,

  /** 是否可以多选 */
  multiple: _propTypes.default.bool,

  /** 可接受的文件类型，MIME，见Upload */
  accept: _propTypes.default.string,

  /** 文件大小限制 */
  maxSize: _propTypes.default.number,

  /** @ignore */
  locale: _propTypes.default.object
};