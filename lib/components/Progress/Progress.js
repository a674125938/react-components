"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

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

var _CircleProgress = _interopRequireDefault(require("./CircleProgress"));

var _this = void 0;

var _excluded = ["styleType", "percent", "format", "color", "strokeWidth"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Progress = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Progress, _Component);

  var _super = _createSuper(Progress);

  function Progress() {
    (0, _classCallCheck2.default)(this, Progress);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Progress, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          styleType = _this$props.styleType,
          percent = _this$props.percent,
          format = _this$props.format,
          color = _this$props.color,
          strokeWidth = _this$props.strokeWidth,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      percent = (percent < 0 ? 0 : percent > 100 ? 100 : percent) >> 0;

      if (styleType === 'circle') {
        return /*#__PURE__*/_react.default.createElement(_CircleProgress.default, (0, _extends2.default)({
          percent: percent,
          format: format,
          color: color,
          strokeWidth: strokeWidth
        }, rest));
      }

      return /*#__PURE__*/_react.default.createElement("div", rest, format !== null && /*#__PURE__*/_react.default.createElement(_style.TextWrap, null, /*#__PURE__*/_react.default.createElement(_style.CurrentText, {
        percent: percent
      }, format(percent))), /*#__PURE__*/_react.default.createElement(_style.Outer, {
        strokeWidth: strokeWidth
      }, /*#__PURE__*/_react.default.createElement(_style.Inner, {
        color: color,
        percent: percent
      })), format !== null && /*#__PURE__*/_react.default.createElement(_style.TextWrap, null, /*#__PURE__*/_react.default.createElement("span", null, format(0)), /*#__PURE__*/_react.default.createElement(_style.EndText, null, format(100))));
    }
  }]);
  return Progress;
}(_react.Component);

Progress.propTypes = {
  /**
   * 进度条类型，可选 line、circle
   */
  styleType: _propTypes.default.oneOf(['line', 'circle']),

  /** 当前百分比 */
  percent: _propTypes.default.number,

  /** 进度条颜色，内置 success、warn、error */
  color: _propTypes.default.oneOfType([_propTypes.default.oneOf(['success', 'warn', 'error']), _propTypes.default.string]),

  /**
   * 展示文字的格式化，为 null 时隐藏文字
   * @argument percent - 格式化的百分比
   */
  format: _propTypes.default.func,

  /**
   * 进度条粗度
   */
  strokeWidth: _propTypes.default.number
};
Progress.defaultProps = {
  styleType: 'line',
  percent: 0,
  strokeWidth: 10,
  format: function format(percent) {
    (0, _newArrowCheck2.default)(this, _this);
    return "".concat(percent, "%");
  }.bind(void 0)
};
var _default = Progress;
exports.default = _default;