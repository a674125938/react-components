"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioContext = exports.StoreContext = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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

var _createReactContext = _interopRequireDefault(require("create-react-context"));

var _classnames = _interopRequireDefault(require("classnames"));

var _item = _interopRequireDefault(require("../../decorators/selectableWithStore/item"));

var _uncontrolled = _interopRequireDefault(require("../../decorators/uncontrolled"));

var _style = require("./style");

var _Card = _interopRequireDefault(require("./Card"));

var _RadioIcon = _interopRequireDefault(require("./RadioIcon"));

var _excluded = ["children", "checked", "defaultChecked", "value", "onChange", "onClick", "multiple", "disabled", "title"],
    _excluded2 = ["children", "checked", "defaultChecked", "value", "onChange", "onClick", "multiple", "disabled", "title", "extra"],
    _excluded3 = ["title", "disabledLabel", "onChange"],
    _excluded4 = ["title", "disabledLabel", "onChange"],
    _excluded5 = ["onChange", "className"],
    _excluded6 = ["title", "disabledLabel", "children", "onChange"],
    _excluded7 = ["defaultChecked", "value", "multiple"];

var _dec,
    _dec2,
    _class,
    _class2,
    _temp,
    _this10 = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StoreContext = (0, _createReactContext.default)();
exports.StoreContext = StoreContext;
var RadioContext = (0, _createReactContext.default)();
exports.RadioContext = RadioContext;
var Size = ['sm', 'md', 'lg'];
var StyleType = ['default', 'button', 'tag', 'card', 'text', 'list'];
var Radio = (_dec = (0, _uncontrolled.default)({
  valueName: 'checked'
}), _dec2 = (0, _item.default)({
  StoreContext: StoreContext
}), _dec(_class = _dec2(_class = (_temp = _class2 = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Radio, _PureComponent);

  var _super = _createSuper(Radio);

  function Radio() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onClick = function (props, e) {
      (0, _newArrowCheck2.default)(this, _this2);
      var onChange = props.onChange,
          onClick = props.onClick,
          disabled = props.disabled,
          checked = props.checked;
      if (disabled) return;
      onClick(e);
      if (!checked) onChange(true);
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(Radio, [{
    key: "renderRadio",
    value: function renderRadio(props) {
      var _this3 = this;

      /* eslint-disable no-unused-vars */
      var children = props.children,
          checked = props.checked,
          defaultChecked = props.defaultChecked,
          value = props.value,
          onChange = props.onChange,
          onClick = props.onClick,
          multiple = props.multiple,
          disabled = props.disabled,
          title = props.title,
          rest = (0, _objectWithoutProperties2.default)(props, _excluded);
      /* eslint-enable no-unused-vars */

      return /*#__PURE__*/_react.default.createElement(_style.RadioWrap, (0, _extends2.default)({
        checked: checked,
        disabled: disabled
      }, rest, {
        onClick: function onClick() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _this3.onClick.apply(_this3, [props].concat(args));
        }
      }), /*#__PURE__*/_react.default.createElement(_RadioIcon.default, {
        checked: checked,
        disabled: disabled
      }), children != null && /*#__PURE__*/_react.default.createElement("span", {
        className: _style.contentCls
      }, children));
    }
  }, {
    key: "renderRadioList",
    value: function renderRadioList(props) {
      var _this4 = this;

      /* eslint-disable no-unused-vars */
      var children = props.children,
          checked = props.checked,
          defaultChecked = props.defaultChecked,
          value = props.value,
          onChange = props.onChange,
          onClick = props.onClick,
          multiple = props.multiple,
          disabled = props.disabled,
          title = props.title,
          extra = props.extra,
          rest = (0, _objectWithoutProperties2.default)(props, _excluded2);
      /* eslint-enable no-unused-vars */

      return /*#__PURE__*/_react.default.createElement(_style.RadioListWrap, (0, _extends2.default)({
        checked: checked,
        disabled: disabled
      }, rest, {
        onClick: function onClick() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return _this4.onClick.apply(_this4, [props].concat(args));
        }
      }), /*#__PURE__*/_react.default.createElement(_RadioIcon.default, {
        checked: checked,
        disabled: disabled
      }), children != null && /*#__PURE__*/_react.default.createElement("span", {
        className: _style.contentCls
      }, children), extra && /*#__PURE__*/_react.default.createElement("span", {
        className: _style.extraCls
      }, extra));
    }
  }, {
    key: "renderRadioButton",
    value: function renderRadioButton(props) {
      var _this5 = this;

      /* eslint-disable no-unused-vars */
      var title = props.title,
          disabledLabel = props.disabledLabel,
          onChange = props.onChange,
          rest = (0, _objectWithoutProperties2.default)(props, _excluded3);
      /* eslint-enable no-unused-vars */

      return /*#__PURE__*/_react.default.createElement(_style.RadioButtonWrap, (0, _extends2.default)({}, rest, {
        onClick: function onClick() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return _this5.onClick.apply(_this5, [props].concat(args));
        }
      }));
    }
  }, {
    key: "renderRadioTag",
    value: function renderRadioTag(props) {
      var _this6 = this;

      /* eslint-disable no-unused-vars */
      var title = props.title,
          disabledLabel = props.disabledLabel,
          onChange = props.onChange,
          rest = (0, _objectWithoutProperties2.default)(props, _excluded4);
      /* eslint-enable no-unused-vars */

      return /*#__PURE__*/_react.default.createElement(_style.RadioTagWrap, (0, _extends2.default)({}, rest, {
        onClick: function onClick() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          return _this6.onClick.apply(_this6, [props].concat(args));
        }
      }));
    }
  }, {
    key: "renderRadioCard",
    value: function renderRadioCard(props) {
      var _this7 = this;

      /* eslint-disable no-unused-vars */
      var onChange = props.onChange,
          className = props.className,
          rest = (0, _objectWithoutProperties2.default)(props, _excluded5);
      /* eslint-enable no-unused-vars */

      return /*#__PURE__*/_react.default.createElement(_Card.default, (0, _extends2.default)({}, rest, {
        className: (0, _classnames.default)((0, _style.sharedClassName)(rest), className),
        onClick: function onClick() {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          return _this7.onClick.apply(_this7, [props].concat(args));
        }
      }));
    }
  }, {
    key: "renderRadioText",
    value: function renderRadioText(props) {
      var _this8 = this;

      /* eslint-disable no-unused-vars */
      var title = props.title,
          disabledLabel = props.disabledLabel,
          children = props.children,
          onChange = props.onChange,
          rest = (0, _objectWithoutProperties2.default)(props, _excluded6);
      /* eslint-enable no-unused-vars */

      return /*#__PURE__*/_react.default.createElement(_style.RadioTextWrap, (0, _extends2.default)({}, rest, {
        onClick: function onClick() {
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          return _this8.onClick.apply(_this8, [props].concat(args));
        }
      }), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("span", null, children)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      return /*#__PURE__*/_react.default.createElement(RadioContext.Consumer, null, function (context) {
        (0, _newArrowCheck2.default)(this, _this9);

        /* eslint-disable no-unused-vars */
        var _this$props = this.props,
            defaultChecked = _this$props.defaultChecked,
            value = _this$props.value,
            multiple = _this$props.multiple,
            restProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded7);
        /* eslint-enable no-unused-vars */

        var props = _objectSpread(_objectSpread({
          size: 'md',
          styleType: 'default'
        }, context), restProps);

        var styleType = props.styleType;

        switch (styleType) {
          case 'button':
            return this.renderRadioButton(props);

          case 'tag':
            return this.renderRadioTag(props);

          case 'card':
            return this.renderRadioCard(props);

          case 'text':
            return this.renderRadioText(props);

          case 'list':
            return this.renderRadioList(props);

          default:
            return this.renderRadio(props);
        }
      }.bind(this));
    }
  }]);
  return Radio;
}(_react.PureComponent), _class2.propTypes = {
  /** @ignore */
  children: _propTypes.default.node,

  /** 是否选中 */
  checked: _propTypes.default.bool,

  /** 默认是否选中 */
  defaultChecked: _propTypes.default.bool,

  /** 是否禁用 */
  disabled: _propTypes.default.bool,

  /** 点选时的回调 */
  onChange: _propTypes.default.func,

  /** @ignore */
  onClick: _propTypes.default.func,

  /** radio的值 */
  value: _propTypes.default.any,

  /** 样式风格 */
  styleType: _propTypes.default.oneOf(StyleType),

  /** 尺寸，styleType 为 card、list 时无效 */
  size: _propTypes.default.oneOf(Size),

  /** 标题，styleType 为 card 时使用 */
  title: _propTypes.default.node,

  /** 附加内容，styleType 为 list 时使用 */
  extra: _propTypes.default.node,

  /**
   * @ignore
   * @deprecated 弃用
   */
  disabledLabel: _propTypes.default.node,

  /** @ignore */
  multiple: _propTypes.default.bool
}, _class2.defaultProps = {
  onChange: function onChange() {
    (0, _newArrowCheck2.default)(this, _this10);
  }.bind(void 0),
  onClick: function onClick() {
    (0, _newArrowCheck2.default)(this, _this10);
  }.bind(void 0)
}, _temp)) || _class) || _class);
Radio.Size = Size;
Radio.StyleType = StyleType;
var _default = Radio;
exports.default = _default;