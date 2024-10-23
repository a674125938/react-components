"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _style = require("./style");

var _Layout = require("./Layout");

var _excluded = ["width", "style"];

var _this = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var generateId = function () {
  (0, _newArrowCheck2.default)(this, _this);
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}.bind(void 0)();

var Sider = function Sider(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 200 : _ref$width,
      style = _ref.style,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _React$useContext = _react.default.useContext(_Layout.LayoutContext),
      siderHook = _React$useContext.siderHook;

  _react.default.useEffect(function () {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    var uniqueId = generateId('ant-sider-');
    siderHook.addSider(uniqueId);
    return function () {
      (0, _newArrowCheck2.default)(this, _this3);
      return siderHook.removeSider(uniqueId);
    }.bind(this);
  }.bind(this), []);

  var divStyle = {
    flex: "0 0 ".concat(width),
    width: width
  };
  return /*#__PURE__*/_react.default.createElement(_style.SiderWrap, (0, _extends2.default)({}, rest, {
    style: _objectSpread(_objectSpread({}, style), divStyle),
    className: (0, _classnames.default)(_style.prefixClsSider, rest.className)
  }));
}.bind(void 0);

Sider.propTypes = {
  width: _propTypes.default.number
};

var MemoSider = /*#__PURE__*/_react.default.memo(Sider);

var _default = MemoSider;
exports.default = _default;