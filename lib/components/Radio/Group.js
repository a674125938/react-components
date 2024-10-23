"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _store = _interopRequireDefault(require("../../decorators/selectableWithStore/store"));

var _uncontrolled = _interopRequireDefault(require("../../decorators/uncontrolled"));

var _Radio = _interopRequireWildcard(require("./Radio"));

var _style = require("./style");

var _excluded = ["label"],
    _excluded2 = ["value", "defaultValue", "onChange", "options", "children", "disabled", "size", "styleType", "selectable", "multiple"];

var _dec,
    _dec2,
    _this = void 0,
    _class,
    _class2,
    _temp;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Group = (_dec = (0, _uncontrolled.default)({}), _dec2 = (0, _store.default)({
  StoreContext: _Radio.StoreContext,
  getValue: function getValue(v) {
    (0, _newArrowCheck2.default)(this, _this);
    return v === undefined ? [] : [v];
  }.bind(void 0),
  setValue: function setValue(v) {
    (0, _newArrowCheck2.default)(this, _this);
    return v[0];
  }.bind(void 0)
}), _dec(_class = _dec2(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Group, _Component);

  var _super = _createSuper(Group);

  function Group() {
    var _this3 = this;

    var _this2;

    (0, _classCallCheck2.default)(this, Group);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    _this2.renderOptions = function () {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props = _this2.props,
          options = _this2$props.options,
          children = _this2$props.children;

      if (options) {
        return options.map(function (option) {
          (0, _newArrowCheck2.default)(this, _this4);
          var label = option.label,
              restOptionProps = (0, _objectWithoutProperties2.default)(option, _excluded);
          return /*#__PURE__*/_react.default.createElement(_Radio.default, (0, _extends2.default)({
            key: option.value
          }, restOptionProps), label !== undefined ? label : option.value);
        }.bind(this));
      } else {
        return children;
      }
    }.bind(this);

    return _this2;
  }

  (0, _createClass2.default)(Group, [{
    key: "render",
    value: function render() {
      /* eslint-disable no-unused-vars */
      var _this$props = this.props,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange,
          options = _this$props.options,
          children = _this$props.children,
          disabled = _this$props.disabled,
          size = _this$props.size,
          styleType = _this$props.styleType,
          selectable = _this$props.selectable,
          multiple = _this$props.multiple,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded2);
      /* eslint-enable no-unused-vars */

      return /*#__PURE__*/_react.default.createElement(_Radio.RadioContext.Provider, {
        value: _objectSpread({}, (0, _pick2.default)(this.props, ['disabled', 'size', 'styleType']))
      }, /*#__PURE__*/_react.default.createElement(_style.RadioGroupWrap, rest, this.renderOptions()));
    }
  }]);
  return Group;
}(_react.Component), _class2.propTypes = {
  /** @ignore */
  children: _propTypes.default.node,

  /** 当前值，controlled */
  value: _propTypes.default.any,

  /** 默认值，uncontrolled */
  defaultValue: _propTypes.default.any,

  /** 修改时的回调 */
  onChange: _propTypes.default.func,

  /** 快速选项 */
  options: _propTypes.default.array,

  /** 禁用 */
  disabled: _propTypes.default.bool,

  /** 尺寸 */
  size: _propTypes.default.oneOf(_Radio.default.Size),

  /** 样式风格 */
  styleType: _propTypes.default.oneOf(_Radio.default.StyleType),

  /** @ignore */
  selectable: _propTypes.default.bool,

  /** @ignore */
  multiple: _propTypes.default.bool
}, _class2.defaultProps = {
  onChange: function onChange() {
    (0, _newArrowCheck2.default)(this, _this);
  }.bind(void 0),
  multiple: false,
  selectable: true
}, _temp)) || _class) || _class);
var _default = Group;
exports.default = _default;