"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyleTypes = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../../components/Icon"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _deprecatedLog = _interopRequireDefault(require("../../utils/deprecatedLog"));

var _style = require("./style");

var _noop = _interopRequireDefault(require("../../utils/noop"));

var _style2 = require("../../style");

var _excluded = ["closable", "icon", "children", "onClose", "styleType", "action"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var deprecatedLogForStyleTypeInfo = (0, _deprecatedLog.default)('Notice styleType "info"', '"success"');
var StyleTypes = (0, _style2.tuple)('default', 'success', 'warning', 'error', 'disabled');
exports.StyleTypes = StyleTypes;

var Notice = function Notice(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref$closable = _ref.closable,
      closable = _ref$closable === void 0 ? true : _ref$closable,
      _icon = _ref.icon,
      children = _ref.children,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? _noop.default : _ref$onClose,
      _ref$styleType = _ref.styleType,
      styleType = _ref$styleType === void 0 ? 'default' : _ref$styleType,
      action = _ref.action,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      closed = _useState2[0],
      setClosed = _useState2[1];

  var handleClose = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    setClosed(true);
    onClose(e);
  }.bind(this), [onClose]);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this2);

    if (styleType === 'info') {
      deprecatedLogForStyleTypeInfo();
    }
  }.bind(this), [styleType]);
  var icon;

  if (_icon === null || _icon === false) {
    icon = null;
  } else if (typeof _icon === 'string') {
    icon = /*#__PURE__*/_react.default.createElement(_Icon.default, {
      className: _style.iconCls,
      type: _icon
    });
  } else if ( /*#__PURE__*/_react.default.isValidElement(_icon)) {
    icon = _icon;
  } else {
    icon = /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      size: "15px",
      className: _style.iconCls,
      type: "exclamation-circle-filled"
    });
  }

  return closed ? null : /*#__PURE__*/_react.default.createElement(_style.NoticeWrap, (0, _extends2.default)({}, rest, {
    styleType: styleType
  }), icon && /*#__PURE__*/_react.default.createElement("span", {
    className: _style.iconWrapCls
  }, icon), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.contentCls
  }, children), action && /*#__PURE__*/_react.default.createElement("span", {
    className: _style.actionCls
  }, action), closable && /*#__PURE__*/_react.default.createElement("span", {
    className: _style.closeCls
  }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
    type: "cross",
    className: _style.iconCls,
    onClick: handleClose
  })));
}.bind(void 0);

Notice.propTypes = {
  closable: _propTypes.default.bool,
  icon: _propTypes.default.oneOfType([_propTypes.default.oneOf([null]), _propTypes.default.oneOf([false]), _propTypes.default.string, _propTypes.default.node]),
  onClose: _propTypes.default.func,
  styleType: _propTypes.default.oneOf(['default', 'success', 'warning', 'error', 'disabled', 'info']),
  action: _propTypes.default.node
};

var _default = /*#__PURE__*/_react.default.memo(Notice);

exports.default = _default;