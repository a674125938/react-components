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

var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _style = require("./style");

var _excluded = ["top"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MessageContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(MessageContainer, _Component);

  var _super = _createSuper(MessageContainer);

  function MessageContainer() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, MessageContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      messages: [],
      top: _this.props.top
    };

    _this.appendMessage = function (message) {
      (0, _newArrowCheck2.default)(this, _this2);
      var uid = (0, _uniqueId2.default)('uc_message_');

      _this.setState({
        messages: _this.state.messages.concat({
          message: message,
          uid: uid
        })
      });

      return uid;
    }.bind(this);

    _this.removeMessage = function (uid) {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var messages = _this.state.messages;
      var newMessages = messages.filter(function (info) {
        (0, _newArrowCheck2.default)(this, _this3);
        return info.uid !== uid;
      }.bind(this));
      var removed = newMessages.length !== messages.length;
      removed && _this.setState({
        messages: newMessages
      });
      return removed;
    }.bind(this);

    _this.setTop = function (top) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.setState({
        top: top
      });
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(MessageContainer, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          messages = _this$state.messages,
          top = _this$state.top; // eslint-disable-next-line no-unused-vars

      var _this$props = this.props,
          _top = _this$props.top,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement(_style.MessageContentWrap, (0, _extends2.default)({
        style: {
          marginTop: top
        }
      }, rest), messages.map(function (info) {
        (0, _newArrowCheck2.default)(this, _this4);
        return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
          key: info.uid,
          timeout: _style.animationDuration,
          classNames: _style.animationName
        }, info.message);
      }.bind(this)));
    }
  }]);
  return MessageContainer;
}(_react.Component);

MessageContainer.propTypes = {
  /** 顶部的间距 */
  top: _propTypes.default.number
};
var _default = MessageContainer;
exports.default = _default;