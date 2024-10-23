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

var _style = require("./style");

var _Step = _interopRequireDefault(require("./Step"));

var _excluded = ["key", "step", "status"],
    _excluded2 = ["steps", "current", "status", "onChange", "direction", "nowrap"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Status = ['current', 'loading', 'error'];

var Steps = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Steps, _Component);

  var _super = _createSuper(Steps);

  function Steps() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Steps);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.renderSteps = function (_ref) {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var steps = _ref.steps,
          current = _ref.current,
          status = _ref.status,
          direction = _ref.direction,
          onChange = _ref.onChange,
          nowrap = _ref.nowrap;
      var pos = 'before';
      var l = steps.length;
      return steps.map(function (step, i) {
        var _this4 = this;

        (0, _newArrowCheck2.default)(this, _this3);
        var _step$key = step.key,
            key = _step$key === void 0 ? i : _step$key,
            _step$step = step.step,
            stepContent = _step$step === void 0 ? i + 1 : _step$step,
            singleStatus = step.status,
            rest = (0, _objectWithoutProperties2.default)(step, _excluded);
        var isCurrent = current === key;
        var finalStatus;

        if (isCurrent) {
          pos = 'after';
          finalStatus = status;
        } else {
          switch (singleStatus) {
            case 'error':
              pos = 'error';
              break;

            case 'success':
              pos = 'before';
              break;

            case 'normal':
              pos = 'after';
              break;

            default:
          }

          finalStatus = pos;
        }

        var canHover = typeof onChange === 'function' && singleStatus !== 'disabled' ? true : false;
        var showTitle = rest.title ? true : false;
        return /*#__PURE__*/_react.default.createElement(_style.StepsItemWrapper, {
          key: key,
          direction: direction,
          status: finalStatus,
          canHover: canHover,
          showTitle: showTitle,
          nowrap: nowrap,
          onClick: function () {
            (0, _newArrowCheck2.default)(this, _this4);

            if (canHover) {
              onChange(key, finalStatus);
            }
          }.bind(this)
        }, /*#__PURE__*/_react.default.createElement(_Step.default, (0, _extends2.default)({}, rest, {
          key: "step-".concat(key),
          status: finalStatus,
          step: stepContent,
          showTitle: showTitle,
          isLast: i === l - 1 ? true : false
        })));
      }.bind(this));
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(Steps, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          steps = _this$props.steps,
          current = _this$props.current,
          status = _this$props.status,
          onChange = _this$props.onChange,
          direction = _this$props.direction,
          nowrap = _this$props.nowrap,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded2);
      return /*#__PURE__*/_react.default.createElement(_style.StepsWrapper, (0, _extends2.default)({
        direction: direction,
        nowrap: nowrap
      }, rest), this.renderSteps({
        steps: steps,
        current: current,
        status: status,
        direction: direction,
        onChange: onChange,
        nowrap: nowrap
      }));
    }
  }]);
  return Steps;
}(_react.Component);

Steps.propTypes = {
  /** 步骤列表 */
  steps: _propTypes.default.arrayOf(_propTypes.default.shape({
    /** 步骤的 key，不传为数组索引 */
    key: _propTypes.default.string,

    /** 步骤的显示文字，默认为索引 + 1 */
    step: _propTypes.default.node,

    /** 步骤的标题内容 */
    title: _propTypes.default.node,

    /** 步骤的备注 */
    remark: _propTypes.default.node,

    /** 步骤的状态 */
    status: _propTypes.default.oneOf(['disabled', 'error', 'success', 'normal'])
  })).isRequired,

  /** 当前步骤的 key，不传或传 null 时为全部完成 */
  current: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /** 当前步骤的状态 */
  status: _propTypes.default.oneOf(Status),

  /**
   * 步骤状态改变时的回调函数
   * @param {number} current 当前步骤的key
   */
  onChange: _propTypes.default.func,

  /**
   * 指定步骤条方向 , 默认是horizontal
   */
  direction: _propTypes.default.oneOf(['horizontal', 'vertical']),

  /**
   * 横向场景，不换行, 默认是false
   */
  nowrap: _propTypes.default.bool
};
Steps.defaultProps = {
  status: 'current',
  direction: 'horizontal',
  nowrap: false
};
var _default = Steps;
exports.default = _default;
Steps.Status = Status;