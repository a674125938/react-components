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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _style = require("./style");

var _excluded = ["disabled", "onClick", "href"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Item = function Item(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var disabled = _ref.disabled,
      onClick = _ref.onClick,
      href = _ref.href,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var handleClick = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    if (disabled) return;
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  }.bind(this), [disabled, onClick]);
  var Component = href ? _style.ItemA : _style.ItemSpan;
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    disabled: disabled,
    href: href
  }, rest, {
    onClick: handleClick
  }));
}.bind(void 0);

Item.propTypes = {
  disabled: _propTypes.default.bool,
  current: _propTypes.default.bool,
  noAction: _propTypes.default.bool,
  href: _propTypes.default.string
};
Item.__IS_BREADCRUMB_ITEM = true;
var _default = Item;
exports.default = _default;