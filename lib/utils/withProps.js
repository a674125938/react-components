"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _emotionTheming = require("emotion-theming");

var _theme = _interopRequireDefault(require("../components/ThemeProvider/theme"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var withProps = function withProps() {
  var _this = this;

  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Comp) {
    var _this2 = this;

    (0, _newArrowCheck2.default)(this, _this);
    var cleanProps = option.cleanProps;

    var ComponentWithProps = function ComponentWithProps(props, ref) {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      input = typeof input === 'function' ? input(props) : input;
      var _input = input,
          className = _input.className;

      if (className) {
        className = typeof className === 'function' ? className(props) : className;
      } // eslint-disable-next-line react/prop-types


      className = (0, _classnames.default)(className, props.className);

      var result = _objectSpread(_objectSpread(_objectSpread({}, input), props), {}, {
        className: className
      });

      if (cleanProps) {
        cleanProps.each(function (prop) {
          (0, _newArrowCheck2.default)(this, _this3);
          return delete result[prop];
        }.bind(this));
      }

      if ((0, _isEmpty2.default)(result.theme)) {
        result.theme = _theme.default;
      }

      if (result._innerRef) {
        result.ref = result._innerRef;
        delete result._innerRef;
      }

      return /*#__PURE__*/_react.default.createElement(Comp, (0, _extends2.default)({}, result, {
        ref: ref
      }));
    }.bind(this);

    return (0, _emotionTheming.withTheme)( /*#__PURE__*/_react.default.forwardRef(ComponentWithProps));
  }.bind(this);
};

var _default = withProps;
exports.default = _default;