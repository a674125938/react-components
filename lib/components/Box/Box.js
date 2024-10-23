"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var _excluded = ["cleanMargin", "container"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Spacing = ['xs', 'sm', 'md', 'lg', 'xlg', 'xxlg'];

var SizeType = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(Spacing)]);

var SizeTypeWithString = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.oneOf(Spacing)]);

var Box = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Box, _PureComponent);

  var _super = _createSuper(Box);

  function Box() {
    (0, _classCallCheck2.default)(this, Box);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Box, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cleanMargin = _this$props.cleanMargin,
          container = _this$props.container,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);

      var box = /*#__PURE__*/_react.default.createElement(_style.BoxWrap, (0, _extends2.default)({}, rest, {
        container: container
      }));

      if (cleanMargin) {
        return /*#__PURE__*/_react.default.createElement("div", {
          style: {
            overflow: 'hidden'
          }
        }, box);
      }

      return box;
    }
  }]);
  return Box;
}(_react.PureComponent);

Box.propTypes = {
  /** @ignore */
  children: _propTypes.default.node,

  /** 是否为容器，为容器时容器属性才能生效，并且被包裹的子组件中的一些属性（如 flex，order 等才能生效） */
  container: _propTypes.default.bool,

  /**
   * 子组件间的间距，预设 sm md lg 等内置尺寸，或自定义间距大小(传入 number，单位为 px)，间距方向跟随布局方向
   * 可传入数组同时定义横向和纵向间距 [横向间距, 纵向间距]
   */
  spacing: _propTypes.default.oneOfType([SizeType, _propTypes.default.arrayOf(SizeType)]),

  /** 布局方向，默认为 row 横向布局，column 为纵向布局，加上 -reverse 为单行（单列）子元素顺序反转 */
  direction: _propTypes.default.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /** 容器定义，默认为 nowrap，超出不会换行/列，使用 wrap 可让其超出换行/列，-reverse 为多行（多列）顺序反转 */
  wrap: _propTypes.default.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /** 项目定位 */
  alignItems: _propTypes.default.oneOf(['center', 'flex-start', 'flex-end', 'stretch']),

  /** 内容整体定位，center 为居中（按照布局方向），start 和 end 为首尾对其（按照布局方向）*/
  alignContent: _propTypes.default.oneOf(['center', 'flex-start', 'flex-end', 'space-between', 'space-around']),

  /** 内容定位 */
  justifyContent: _propTypes.default.oneOf(['center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'stretch']),

  /** 间距，可以为 sm md lg 等内置尺寸，或者为自定义字符串，或传入数组 [横向 padding, 纵向 padding]，或有效的 padding 字符串 */
  padding: _propTypes.default.oneOfType([SizeTypeWithString, _propTypes.default.arrayOf(SizeTypeWithString)]),

  /** 宽度, 同 css 宽度 */
  width: _propTypes.default.string,

  /** 高度，同 css 高度 */
  height: _propTypes.default.string,

  /** 栅格宽度，12栅格，支持小数点，12栅格不够用的情况下可使用小数点 */
  span: _propTypes.default.number,

  /** 排序，同 css 的 order */
  order: _propTypes.default.number,

  /** flex 属性，同 css 的 flex */
  flex: _propTypes.default.string,

  /** 是否创建外层容器来清除外间距，正常情况下不需要关注，但是如果有滚动需求，又使用了 spacing，外边距会对滚动容器造成影响，此时可以通过这个参数来自动创建一个清理容器来修复 */
  cleanMargin: _propTypes.default.bool
};
var _default = Box;
exports.default = _default;
Box.Spacing = Spacing;