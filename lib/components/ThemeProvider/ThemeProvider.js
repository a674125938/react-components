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

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotionTheming = require("emotion-theming");

var _theme3 = require("./theme");

var _runtime = require("./runtime");

var _excluded = ["theme"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var themeStack = [];
var themeMap = {};

var updateRuntimeTheme = function updateRuntimeTheme() {
  (0, _newArrowCheck2.default)(this, _this);
  (0, _runtime.setRuntimeTheme)(themeMap[themeStack[themeStack.length - 1]]);
}.bind(void 0);

var ThemeProvider = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ThemeProvider, _Component);

  var _super = _createSuper(ThemeProvider);

  function ThemeProvider(props) {
    var _this3 = this;

    var _this2;

    (0, _classCallCheck2.default)(this, ThemeProvider);
    _this2 = _super.call(this, props);

    _this2.getMergedTheme = function (theme) {
      (0, _newArrowCheck2.default)(this, _this3);
      return (0, _theme3.generateTheme)(theme);
    }.bind(this);

    _this2.componentWillUnmount = function () {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      delete themeMap[_this2.uid];
      themeStack = themeStack.filter(function (uid) {
        (0, _newArrowCheck2.default)(this, _this4);
        return uid !== _this2.uid;
      }.bind(this));
      updateRuntimeTheme();
    }.bind(this);

    var _theme2 = _this2.getMergedTheme(props.theme);

    _this2.cache = JSON.stringify(_theme2);
    _this2.state = {
      theme: _theme2
    };
    _this2.uid = (0, _uniqueId2.default)('_theme_provider_');
    themeStack.push(_this2.uid);
    themeMap[_this2.uid] = _theme2;
    updateRuntimeTheme();
    return _this2;
  }

  (0, _createClass2.default)(ThemeProvider, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this5 = this;

      var theme = nextProps.theme;

      if (JSON.stringify(theme) !== this.cache) {
        var mergedTheme = this.getMergedTheme(theme);
        this.cache = JSON.stringify(theme);
        this.setState({
          theme: mergedTheme
        }, function () {
          (0, _newArrowCheck2.default)(this, _this5);
          themeMap[this.uid] = mergedTheme;
          updateRuntimeTheme();
        }.bind(this));
      }
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          _theme = _this$props.theme,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var theme = this.state.theme;
      return /*#__PURE__*/_react.default.createElement(_emotionTheming.ThemeProvider, (0, _extends2.default)({
        theme: theme
      }, rest));
    }
  }]);
  return ThemeProvider;
}(_react.Component);

ThemeProvider.propTypes = {
  /**
   * 自定义主题
   */
  theme: _propTypes.default.object.isRequired
};
var _default = ThemeProvider;
exports.default = _default;