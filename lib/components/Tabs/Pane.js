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

var _classnames = _interopRequireDefault(require("classnames"));

var _style = require("./style");

var _excluded = ["className", "active", "destroyInactiveTabPane", "forceRender", "placeholder", "children", "tabKey", "tab"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Pane = function Pane(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var className = _ref.className,
      active = _ref.active,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane,
      forceRender = _ref.forceRender,
      placeholder = _ref.placeholder,
      children = _ref.children,
      tabKey = _ref.tabKey,
      tab = _ref.tab,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var alreadyActiveRef = (0, _react.useRef)(false);
  var panePrefixCls = "".concat(_style.prefixCls, "-tabpane");
  var cls = (0, _classnames.default)(panePrefixCls, active ? "".concat(panePrefixCls, "-active") : "".concat(panePrefixCls, "-inactive"), className);
  var isRender = active || !destroyInactiveTabPane && alreadyActiveRef.current;
  var shouldRender = isRender || forceRender;
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    if (shouldRender) alreadyActiveRef.current = true;
  }.bind(this), [shouldRender]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: cls
  }, rest), shouldRender ? children : placeholder);
}.bind(void 0);

Pane.propTypes = {
  className: _propTypes.default.string,
  active: _propTypes.default.bool,
  destroyInactiveTabPane: _propTypes.default.bool,
  forceRender: _propTypes.default.bool,
  placeholder: _propTypes.default.node,
  children: _propTypes.default.node,
  disabled: _propTypes.default.bool,
  tab: _propTypes.default.node.isRequired,
  tabKey: _propTypes.default.string
};

var _default = /*#__PURE__*/(0, _react.memo)(Pane);

exports.default = _default;