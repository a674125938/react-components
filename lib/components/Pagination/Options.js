"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Select = _interopRequireDefault(require("../../components/Select"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _NumberInput = _interopRequireDefault(require("../../components/NumberInput"));

var _KeyCode = _interopRequireDefault(require("../../utils/KeyCode"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Options = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Options, _React$Component);

  var _super = _createSuper(Options);

  function Options(props) {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Options);
    _this = _super.call(this, props);

    _this.buildOptionText = function (value) {
      (0, _newArrowCheck2.default)(this, _this2);
      return "".concat(value, " ").concat(_this.props.locale.itemsPerPage);
    }.bind(this);

    _this.changeSize = function (value) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.props.changeSize(Number(value));
    }.bind(this);

    _this.handleChange = function (v) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.setState({
        goInputText: v
      });
    }.bind(this);

    _this.go = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);
      var val = _this.state.goInputText;

      if (val === '') {
        return;
      }

      val = isNaN(val) ? _this.props.current : Number(val);

      if (e.keyCode === _KeyCode.default.ENTER || e.type === 'click') {
        _this.setState({
          goInputText: ''
        });

        _this.props.quickGo(val);
      }
    }.bind(this);

    _this.state = {
      goInputText: ''
    };
    return _this;
  }

  (0, _createClass2.default)(Options, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var props = this.props;
      var state = this.state;
      var locale = props.locale;
      var size = props.size,
          allPages = props.allPages,
          select = props.select;
      var prefixCls = "".concat(props.rootPrefixCls, "-options");
      var changeSize = props.changeSize;
      var quickGo = props.quickGo;
      var goButton = props.goButton;
      var buildOptionText = props.buildOptionText || this.buildOptionText;
      var changeSelect = null;
      var goInput = null;
      var gotoButton = null;

      if (!(changeSize || quickGo)) {
        return null;
      }

      if (changeSize && _Select.default) {
        var Option = _Select.default.Option;
        var pageSize = props.pageSize || props.pageSizeOptions[0];
        var options = props.pageSizeOptions.map(function (opt, i) {
          (0, _newArrowCheck2.default)(this, _this3);
          return /*#__PURE__*/_react.default.createElement(Option, {
            key: i,
            value: opt
          }, buildOptionText(opt));
        }.bind(this));
        changeSelect = /*#__PURE__*/_react.default.createElement(_Select.default, (0, _extends2.default)({
          className: "".concat(prefixCls, "-size-changer"),
          value: pageSize.toString(),
          onChange: this.changeSize,
          size: size
        }, select), options);
      }

      if (quickGo) {
        if (goButton) {
          if (typeof goButton === 'boolean') {
            gotoButton = /*#__PURE__*/_react.default.createElement(_Button.default, {
              onClick: this.go,
              styleType: "primary",
              className: "".concat(prefixCls, "-gobutton"),
              onKeyUp: this.go,
              size: size
            }, locale.jumpToConfirm);
          } else {
            gotoButton = /*#__PURE__*/_react.default.createElement("span", {
              className: "".concat(prefixCls, "-gobutton"),
              onClick: this.go,
              onKeyUp: this.go
            }, goButton);
          }
        }

        goInput = /*#__PURE__*/_react.default.createElement("div", {
          className: "".concat(prefixCls, "-quick-jumper")
        }, /*#__PURE__*/_react.default.createElement(_NumberInput.default, {
          size: size,
          min: 1,
          max: allPages,
          value: state.goInputText,
          onChange: this.handleChange,
          parser: function (input) {
            (0, _newArrowCheck2.default)(this, _this3);
            return input.replace(/[^\d]+/g, '');
          }.bind(this),
          onKeyUp: this.go,
          hideHandler: true,
          styleType: "pagination",
          suffix: /*#__PURE__*/_react.default.createElement("span", {
            className: "".concat(prefixCls, "-quick-jumper-text")
          }, "/".concat(allPages))
        }), gotoButton);
      }

      return /*#__PURE__*/_react.default.createElement("li", {
        className: "".concat(prefixCls)
      }, changeSelect, goInput);
    }
  }]);
  return Options;
}(_react.default.Component);

Options.propTypes = {
  changeSize: _propTypes.default.func,
  quickGo: _propTypes.default.func,
  current: _propTypes.default.number,
  pageSizeOptions: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  pageSize: _propTypes.default.number,
  buildOptionText: _propTypes.default.func,
  locale: _propTypes.default.object,
  size: _propTypes.default.string,
  allPages: _propTypes.default.number,
  select: _propTypes.default.object,
  rootPrefixCls: _propTypes.default.string,
  goButton: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.node])
};
Options.defaultProps = {
  pageSizeOptions: ['10', '20', '30', '40']
};
var _default = Options;
exports.default = _default;