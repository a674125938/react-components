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

var _react = _interopRequireWildcard(require("react"));

var _style = require("./style");

var _SelectContext = _interopRequireDefault(require("./SelectContext"));

var _excluded = ["autoHidePopup", "children", "onClick"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Extra = function Extra(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var autoHidePopup = _ref.autoHidePopup,
      children = _ref.children,
      onClick = _ref.onClick,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_SelectContext.default),
      hidePopup = _useContext.hidePopup;

  var handleClick = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    if (autoHidePopup) hidePopup();
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  }.bind(this), [autoHidePopup, hidePopup, onClick]);
  return /*#__PURE__*/_react.default.createElement(_style.ExtraWrap, (0, _extends2.default)({
    onClick: handleClick
  }, rest), children);
}.bind(void 0);

Extra.isMenuItem = false;
var _default = Extra;
exports.default = _default;