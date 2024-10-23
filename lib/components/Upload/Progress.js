"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Progress = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Progress = _interopRequireDefault(require("../../components/Progress"));

var _style = require("./style");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Progress = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Progress, _Component);

  var _super = _createSuper(Progress);

  function Progress(props) {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Progress);
    _this = _super.call(this, props);
    _this.state = {
      percent: 0
    };

    _this.simulatePercent = function () {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      _this.timer = setTimeout(function () {
        var _this4 = this;

        (0, _newArrowCheck2.default)(this, _this3);

        var newPercent = _this.state.percent + Math.random() * _this.seed;

        if (newPercent > 99) newPercent = 99;

        _this.setState({
          percent: newPercent
        }, function () {
          (0, _newArrowCheck2.default)(this, _this4);
          newPercent < 99 && _this.simulatePercent();
        }.bind(this));
      }.bind(this), Math.random() * 1000 + 100);
    }.bind(this);

    if (!('percent' in props)) {
      _this.seed = Math.random() * 10 + 1;

      _this.simulatePercent();
    }

    return _this;
  }

  (0, _createClass2.default)(Progress, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.timer && clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var propsPercent = this.props.percent;
      var percent = this.state.percent;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _style.progressWrapCls
      }, /*#__PURE__*/_react.default.createElement(_Progress.default, {
        className: _style.progressCls,
        percent: 'percent' in this.props ? propsPercent : percent,
        format: null
      }));
    }
  }]);
  return Progress;
}(_react.Component);

exports.Progress = Progress;
Progress.propTypes = {
  file: _propTypes.default.object,
  percent: _propTypes.default.number
};
var _default = Progress;
exports.default = _default;