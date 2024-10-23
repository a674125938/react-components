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

var _excluded = ["step", "status"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var STATUS = ['current', 'before', 'after', 'loading', 'error'];

var StepIcon = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(StepIcon, _PureComponent);

  var _super = _createSuper(StepIcon);

  function StepIcon() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, StepIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.renderContent = function (status, content) {
      (0, _newArrowCheck2.default)(this, _this2);

      switch (status) {
        case 'before':
          return /*#__PURE__*/_react.default.createElement(_style.Icon, {
            type: "tick"
          });

        case 'after':
        case 'current':
          return /*#__PURE__*/_react.default.createElement(_style.StepCountWrapper, null, content);

        case 'loading':
          return /*#__PURE__*/_react.default.createElement(_style.Icon, {
            type: "ring-loading",
            spin: true
          });

        case 'error':
          return /*#__PURE__*/_react.default.createElement(_style.Icon, {
            type: "cross"
          });
      }
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(StepIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          step = _this$props.step,
          status = _this$props.status,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement(_style.IconWrapper, (0, _extends2.default)({
        status: status
      }, rest, {
        className: "".concat(_style.iconCls, " ").concat(rest.className ? rest.className : '')
      }), this.renderContent(status, step));
    }
  }]);
  return StepIcon;
}(_react.PureComponent);

exports.default = StepIcon;
StepIcon.propTypes = {
  /** 指定步骤数 */
  step: _propTypes.default.node,

  /** 状态 */
  status: _propTypes.default.oneOf(STATUS)
};