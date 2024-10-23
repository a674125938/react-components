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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _rcAlign = _interopRequireDefault(require("../../libs/rc-align"));

var _style = require("./style");

var _placements = _interopRequireDefault(require("./placements"));

var _excluded = ["value", "maxValue", "dot", "placement", "hideWhenZero", "children", "badgeStyle", "offset", "color", "zIndex"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var defaultProps = {
  maxValue: 99,
  placement: 'topRight',
  color: 'red',
  zIndex: 9
};
var Placement = Object.keys(_placements.default);
var Color = Object.keys(_style.StyleMap);

var isNumberValue = function isNumberValue(value) {
  (0, _newArrowCheck2.default)(this, _this);
  return typeof value === 'number' ? true : typeof value === 'string' ? /^\d+\.?\d*$/.test(value) : false;
}.bind(void 0);

var Badge = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Badge, _PureComponent);

  var _super = _createSuper(Badge);

  function Badge() {
    var _this3 = this;

    var _this2;

    (0, _classCallCheck2.default)(this, Badge);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    _this2.renderBadge = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props = _this2.props,
          value = _this2$props.value,
          maxValue = _this2$props.maxValue,
          dot = _this2$props.dot,
          badgeStyle = _this2$props.badgeStyle,
          color = _this2$props.color;
      var content;

      if (dot) {
        content = null;
      } else if (isNumberValue(value) && +value > maxValue) {
        content = maxValue + '+';
      } else {
        content = value;
      }

      return /*#__PURE__*/_react.default.createElement(_style.SBadge, {
        dot: dot,
        color: color,
        style: badgeStyle
      }, content);
    }.bind(this);

    _this2.getTarget = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      // eslint-disable-next-line react/no-find-dom-node
      return _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)(_this2));
    }.bind(this);

    return _this2;
  }

  (0, _createClass2.default)(Badge, [{
    key: "render",
    value: function render() {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      var _this$props = this.props,
          value = _this$props.value,
          maxValue = _this$props.maxValue,
          dot = _this$props.dot,
          placement = _this$props.placement,
          hideWhenZero = _this$props.hideWhenZero,
          children = _this$props.children,
          badgeStyle = _this$props.badgeStyle,
          offset = _this$props.offset,
          color = _this$props.color,
          zIndex = _this$props.zIndex,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      /* eslint-enable @typescript-eslint/no-unused-vars */

      var badge = this.renderBadge();

      if (!children) {
        return /*#__PURE__*/_react.default.createElement(_style.SWrap, rest, badge);
      }

      return /*#__PURE__*/_react.default.createElement(_style.SWrap, rest, children, hideWhenZero && (value === 0 || value === '0') ? null : /*#__PURE__*/_react.default.createElement(_rcAlign.default, {
        target: this.getTarget,
        align: _objectSpread(_objectSpread({}, _placements.default[placement]), {}, {
          offset: offset
        })
      }, /*#__PURE__*/_react.default.createElement(_style.SBadgeWrap, {
        zIndex: zIndex
      }, badge)));
    }
  }]);
  return Badge;
}(_react.PureComponent);

Badge.propTypes = {
  value: _propTypes.default.node,
  maxValue: _propTypes.default.number,
  dot: _propTypes.default.bool,
  placement: _propTypes.default.oneOf(['topRight', 'topLeft', 'bottomRight', 'bottomLeft', 'top', 'bottom', 'left', 'right']),
  hideWhenZero: _propTypes.default.bool,
  children: _propTypes.default.node,
  color: _propTypes.default.oneOf(['red', 'green', 'yellow', 'primary']),
  zIndex: _propTypes.default.number
};
Badge.defaultProps = defaultProps;
Badge.Placement = Placement;
Badge.Color = Color;
var _default = Badge;
exports.default = _default;