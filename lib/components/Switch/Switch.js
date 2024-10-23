"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _style = require("./style");

var _excluded = ["checked", "defaultChecked", "onChange", "disabled", "size", "onText", "offText"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line react/display-name
var Switch = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      _onChange = _ref.onChange,
      disabled = _ref.disabled,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      _ref$onText = _ref.onText,
      onText = _ref$onText === void 0 ? 'ON' : _ref$onText,
      _ref$offText = _ref.offText,
      offText = _ref$offText === void 0 ? 'OFF' : _ref$offText,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useUncontrolled = (0, _useUncontrolled3.default)(_checked, defaultChecked || false, _onChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      checked = _useUncontrolled2[0],
      onChange = _useUncontrolled2[1];

  var handleClick = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    if (disabled) return;
    onChange(!checked);
  }.bind(this), [checked, disabled, onChange]);
  return /*#__PURE__*/_react.default.createElement(_style.SwitchWrap, (0, _extends2.default)({}, rest, {
    checked: checked,
    disabled: disabled,
    size: size,
    onClick: handleClick
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _style.innerCls
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _style.onTipCls
  }, onText), /*#__PURE__*/_react.default.createElement("span", {
    className: _style.offTipCls
  }, offText)), /*#__PURE__*/_react.default.createElement("span", {
    className: _style.buttonCls
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("span", {
    className: _style.dotCls
  }))));
}.bind(void 0));

Switch.propTypes = {
  checked: _propTypes.default.bool,
  defaultChecked: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  onText: _propTypes.default.node,
  offText: _propTypes.default.node
};

var _default = /*#__PURE__*/_react.default.memo(Switch);

exports.default = _default;