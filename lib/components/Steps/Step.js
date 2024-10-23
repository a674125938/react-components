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

var _StepIcon = _interopRequireDefault(require("./StepIcon"));

var _style = require("./style");

var _excluded = ["status", "step", "remark", "title", "isLast", "showTitle"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Step = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Step, _PureComponent);

  var _super = _createSuper(Step);

  function Step() {
    (0, _classCallCheck2.default)(this, Step);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Step, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          status = _this$props.status,
          step = _this$props.step,
          remark = _this$props.remark,
          title = _this$props.title,
          isLast = _this$props.isLast,
          showTitle = _this$props.showTitle,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var showRemark = remark ? true : false;
      return /*#__PURE__*/_react.default.createElement(_style.StepWrapper, (0, _extends2.default)({
        status: status,
        isLast: isLast,
        showTitle: showTitle,
        showRemark: showRemark
      }, rest, {
        className: "".concat(_style.stepWrapperCls, " ").concat(rest.className ? rest.className : '')
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: _style.itemTailCls
      }), /*#__PURE__*/_react.default.createElement(_StepIcon.default, {
        status: status,
        step: step || 0
      }), /*#__PURE__*/_react.default.createElement(_style.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_style.TitleWrapper, null, title), remark && /*#__PURE__*/_react.default.createElement(_style.RemarkWrapper, null, remark)));
    }
  }]);
  return Step;
}(_react.PureComponent);

exports.default = Step;
Step.propTypes = {
  status: _propTypes.default.string,
  step: _propTypes.default.node,
  remark: _propTypes.default.node,
  title: _propTypes.default.node,
  isLast: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  showTitle: _propTypes.default.bool
};