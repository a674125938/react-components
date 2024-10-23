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

var _Tooltip = _interopRequireDefault(require("../../components/Tooltip"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _Combine = _interopRequireDefault(require("../../components/Combine"));

var _noop = _interopRequireDefault(require("../../utils/noop"));

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _style = require("./style");

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _excluded = ["locale", "onConfirm", "onCancel", "popup", "defaultVisible", "visible", "onVisibleChange"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PopConfirm = function PopConfirm(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);

  var _locale = _ref.locale,
      _ref$onConfirm = _ref.onConfirm,
      _onConfirm = _ref$onConfirm === void 0 ? _noop.default : _ref$onConfirm,
      _ref$onCancel = _ref.onCancel,
      _onCancel = _ref$onCancel === void 0 ? _noop.default : _ref$onCancel,
      _popup = _ref.popup,
      _ref$defaultVisible = _ref.defaultVisible,
      defaultVisible = _ref$defaultVisible === void 0 ? false : _ref$defaultVisible,
      _visible = _ref.visible,
      _onVisibleChange = _ref.onVisibleChange,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useUncontrolled = (0, _useUncontrolled3.default)(_visible, defaultVisible, _onVisibleChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      visible = _useUncontrolled2[0],
      onVisibleChange = _useUncontrolled2[1];

  var onConfirm = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    onVisibleChange(false);

    _onConfirm();
  }.bind(this), [_onConfirm, onVisibleChange]);
  var onCancel = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    onVisibleChange(false);

    _onCancel();
  }.bind(this), [_onCancel, onVisibleChange]);
  var locale = (0, _useLocale.default)(_zh_CN.default, 'PopConfirm', _locale);
  var popup = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return /*#__PURE__*/_react.default.createElement(_style.PopupWrap, null, /*#__PURE__*/_react.default.createElement(_style.IconWrap, null, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      size: "20px",
      type: "exclamation-circle-filled"
    })), /*#__PURE__*/_react.default.createElement(_style.ContentWrap, null, _popup), /*#__PURE__*/_react.default.createElement(_style.FooterWrap, null, /*#__PURE__*/_react.default.createElement(_Combine.default, {
      sharedProps: {
        size: 'sm'
      }
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: onCancel
    }, locale.cancel), /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: onConfirm,
      styleType: "primary"
    }, locale.confirm))));
  }.bind(this), [_popup, locale.cancel, locale.confirm, onCancel, onConfirm]);
  return /*#__PURE__*/_react.default.createElement(_Tooltip.default, (0, _extends2.default)({
    trigger: ['click'],
    popup: popup,
    customStyle: {
      popupWrapperPadding: '0px'
    },
    onVisibleChange: onVisibleChange
  }, rest, {
    visible: visible
  }));
}.bind(void 0);

PopConfirm.propTypes = {
  locale: _propTypes.default.any,
  onConfirm: _propTypes.default.func,
  onCancel: _propTypes.default.func
};
var _default = PopConfirm;
exports.default = _default;