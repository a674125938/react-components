"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TipIcon = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _Box = _interopRequireDefault(require("../../components/Box"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _style = require("./style");

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TipIcon = /*#__PURE__*/_react.default.memo(function TipIcon() {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
    type: "exclamation-circle-filled",
    className: _style.tipIconCls
  });
});

exports.TipIcon = TipIcon;

var Footer = function Footer(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var isError = _ref.isError,
      confirmAble = _ref.confirmAble,
      onConfirm = _ref.onConfirm,
      shortcuts = _ref.shortcuts,
      onShortcut = _ref.onShortcut,
      tip = _ref.tip,
      showConfirm = _ref.showConfirm,
      _locale = _ref.locale;
  var handleConfirm = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return onConfirm();
  }.bind(this), [onConfirm]);
  var locale = (0, _useLocale.default)(_zh_CN.default, 'DatePicker', _locale);
  return !tip && !showConfirm ? null : /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: _style.footerCls,
    container: true,
    justifyContent: "space-between",
    alignItems: "center"
  }, tip ? /*#__PURE__*/_react.default.createElement("span", {
    className: isError ? _style.errorTipCls : _style.tipCls,
    title: typeof tip === 'string' ? tip : ''
  }, /*#__PURE__*/_react.default.createElement(TipIcon, null), /*#__PURE__*/_react.default.createElement("span", null, tip)) : /*#__PURE__*/_react.default.createElement("span", null), showConfirm && /*#__PURE__*/_react.default.createElement(_Button.default, {
    styleType: "primary",
    size: "sm",
    disabled: !confirmAble,
    onClick: handleConfirm
  }, locale.confirm));
}.bind(void 0);

Footer.propTypes = {
  mode: _propTypes.default.oneOf(['date', 'month']).isRequired,
  confirmAble: _propTypes.default.bool.isRequired,
  onConfirm: _propTypes.default.func.isRequired,
  shortcuts: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.shape({
    handle: _propTypes.default.func.isRequired,
    locale: _propTypes.default.any,
    label: _propTypes.default.node
  })), _propTypes.default.oneOf([null])]),
  onShortcut: _propTypes.default.func.isRequired,
  isError: _propTypes.default.bool,
  tip: _propTypes.default.node,
  locale: _propTypes.default.any,
  showConfirm: _propTypes.default.bool
};

var _default = /*#__PURE__*/(0, _react.memo)(Footer);

exports.default = _default;