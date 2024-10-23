"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _keys2 = _interopRequireDefault(require("lodash/keys"));

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _string = require("../../utils/string");

var _SvgIconWrap = _interopRequireDefault(require("./SvgIconWrap"));

var _Tick = _interopRequireDefault(require("./icons/Tick"));

var _TickSmall = _interopRequireDefault(require("./icons/TickSmall"));

var _Cross = _interopRequireDefault(require("./icons/Cross"));

var _CrossBold = _interopRequireDefault(require("./icons/CrossBold"));

var _RingLoading = _interopRequireDefault(require("./icons/RingLoading"));

var _DottedLineArrowRight = _interopRequireDefault(require("./icons/DottedLineArrowRight"));

var _Plus = _interopRequireDefault(require("./icons/Plus"));

var _Minus = _interopRequireDefault(require("./icons/Minus"));

var _Circle = _interopRequireDefault(require("./icons/Circle"));

var _Horz = _interopRequireDefault(require("./icons/Horz"));

var _ArrowUp = _interopRequireDefault(require("./icons/ArrowUp"));

var _ArrowDown = _interopRequireDefault(require("./icons/ArrowDown"));

var _ArrowLeft = _interopRequireDefault(require("./icons/ArrowLeft"));

var _ArrowRight = _interopRequireDefault(require("./icons/ArrowRight"));

var _TriangleUp = _interopRequireDefault(require("./icons/TriangleUp"));

var _TriangleDown = _interopRequireDefault(require("./icons/TriangleDown"));

var _TriangleLeft = _interopRequireDefault(require("./icons/TriangleLeft"));

var _TriangleRight = _interopRequireDefault(require("./icons/TriangleRight"));

var _LineArrowUp = _interopRequireDefault(require("./icons/LineArrowUp"));

var _LineArrowDown = _interopRequireDefault(require("./icons/LineArrowDown"));

var _Search = _interopRequireDefault(require("./icons/Search"));

var _Ellipsis = _interopRequireDefault(require("./icons/Ellipsis"));

var _Refresh = _interopRequireDefault(require("./icons/Refresh"));

var _Trash = _interopRequireDefault(require("./icons/Trash"));

var _Eye = _interopRequireDefault(require("./icons/Eye"));

var _Calendar = _interopRequireDefault(require("./icons/Calendar"));

var _Clock = _interopRequireDefault(require("./icons/Clock"));

var _Sort = _interopRequireDefault(require("./icons/Sort"));

var _Filter = _interopRequireDefault(require("./icons/Filter"));

var _Cog = _interopRequireDefault(require("./icons/Cog"));

var _Dragger = _interopRequireDefault(require("./icons/Dragger"));

var _DoubleArrowRight = _interopRequireDefault(require("./icons/DoubleArrowRight"));

var _DoubleArrowLeft = _interopRequireDefault(require("./icons/DoubleArrowLeft"));

var _CircleMarkFill = _interopRequireDefault(require("./icons/CircleMarkFill"));

var _CircleCrossFill = _interopRequireDefault(require("./icons/CircleCrossFill"));

var _CircleYesMdFill = _interopRequireDefault(require("./icons/CircleYesMdFill"));

var _LoadingLine = _interopRequireDefault(require("./icons/LoadingLine"));

var _QuestionCircle = _interopRequireDefault(require("./icons/QuestionCircle"));

var _CrossCircle = _interopRequireDefault(require("./icons/CrossCircle"));

var _ExclamationCircleFilled = _interopRequireDefault(require("./icons/ExclamationCircleFilled"));

var _InfoCircleFilled = _interopRequireDefault(require("./icons/InfoCircleFilled"));

var _TickCircleFilled = _interopRequireDefault(require("./icons/TickCircleFilled"));

var _CrossCircleFilled = _interopRequireDefault(require("./icons/CrossCircleFilled"));

var _excluded = ["type"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IconMap = {
  tick: _Tick.default,
  'tick-small': _TickSmall.default,
  cross: _Cross.default,
  'cross-bold': _CrossBold.default,
  'ring-loading': _RingLoading.default,
  'dotted-line-arrow-right': _DottedLineArrowRight.default,
  plus: _Plus.default,
  minus: _Minus.default,
  circle: _Circle.default,
  horz: _Horz.default,
  'arrow-up': _ArrowUp.default,
  'arrow-down': _ArrowDown.default,
  'arrow-left': _ArrowLeft.default,
  'arrow-right': _ArrowRight.default,
  'double-arrow-left': _DoubleArrowLeft.default,
  'double-arrow-right': _DoubleArrowRight.default,
  'triangle-up': _TriangleUp.default,
  'triangle-down': _TriangleDown.default,
  'triangle-left': _TriangleLeft.default,
  'triangle-right': _TriangleRight.default,
  'line-arrow-up': _LineArrowUp.default,
  'line-arrow-down': _LineArrowDown.default,
  search: _Search.default,
  ellipsis: _Ellipsis.default,
  refresh: _Refresh.default,
  trash: _Trash.default,
  eye: _Eye.default,
  calendar: _Calendar.default,
  clock: _Clock.default,
  sort: _Sort.default,
  filter: _Filter.default,
  cog: _Cog.default,
  dragger: _Dragger.default,
  'circle-mark-fill': _CircleMarkFill.default,
  'circle-cross-fill': _CircleCrossFill.default,
  'circle-yes-md-fill': _CircleYesMdFill.default,
  'loading-line': _LoadingLine.default
}; // circle

(0, _forEach2.default)({
  question: _QuestionCircle.default,
  cross: _CrossCircle.default
}, function (Icon, key) {
  (0, _newArrowCheck2.default)(this, _this);
  IconMap[key + '-circle'] = Icon;
}.bind(void 0)); // circle filled

(0, _forEach2.default)({
  exclamation: _ExclamationCircleFilled.default,
  info: _InfoCircleFilled.default,
  tick: _TickCircleFilled.default,
  cross: _CrossCircleFilled.default
}, function (Icon, key) {
  (0, _newArrowCheck2.default)(this, _this);
  IconMap[key + '-circle-filled'] = Icon;
}.bind(void 0)); // fix old

var oldMap = {
  'small-tick': 'tick-small',
  'bold-cross': 'cross-bold',
  'left-arrow': 'arrow-left',
  'right-arrow': 'arrow-right'
};
var IconType = (0, _keys2.default)(IconMap);
/**
 * @private
 * 内部使用的一些图标，后续可能会变更，不建议直接使用
 */

var SvgIcon = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(SvgIcon, _PureComponent);

  var _super = _createSuper(SvgIcon);

  function SvgIcon() {
    (0, _classCallCheck2.default)(this, SvgIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SvgIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      type = (0, _string.camel2Kebab)(type);
      var Icon = IconMap[type] || IconMap[oldMap[type]];
      return /*#__PURE__*/_react.default.createElement(_SvgIconWrap.default, rest, Icon && /*#__PURE__*/_react.default.createElement(Icon, null));
    }
  }]);
  return SvgIcon;
}(_react.PureComponent);

SvgIcon.propTypes = {
  /** 图标类型 */
  type: _propTypes.default.oneOf(IconType).isRequired,

  /** 图标颜色，值为 css color 支持属性值 */
  color: _propTypes.default.string,

  /** 是否旋转 */
  spin: _propTypes.default.bool,

  /** 图标的尺寸大小 */
  size: _propTypes.default.string
};
SvgIcon.defaultProps = {
  size: '12px'
};
var _default = SvgIcon;
exports.default = _default;
SvgIcon.Type = IconType;