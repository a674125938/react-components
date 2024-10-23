"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _style = require("./style");

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getTabPanes = function getTabPanes(panes, activeKey, destroyInactiveTabPane) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var newChildren = [];
  panes.forEach(function (panel) {
    (0, _newArrowCheck2.default)(this, _this2);
    var pane = panel.pane,
        key = panel.key;
    var active = activeKey === key;
    newChildren.push( /*#__PURE__*/_react.default.cloneElement(pane, {
      key: key,
      active: active,
      destroyInactiveTabPane: destroyInactiveTabPane
    }));
  }.bind(this));
  return newChildren;
}.bind(void 0);

var TabContent = function TabContent(_ref) {
  var _this3 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var panes = _ref.panes,
      activeKey = _ref.activeKey,
      tabBarPosition = _ref.tabBarPosition,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane,
      styleType = _ref.styleType,
      className = _ref.className;
  var tabPanes = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return getTabPanes(panes, activeKey, destroyInactiveTabPane);
  }.bind(this), [activeKey, destroyInactiveTabPane, panes]);
  var classes = (0, _classnames.default)("".concat(_style.prefixCls, "-content"), "".concat(_style.prefixCls, "-").concat(tabBarPosition, "-content"), "".concat(_style.prefixCls, "-styletype-").concat(styleType, "-content"), className);
  var style;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes,
    style: style
  }, tabPanes);
}.bind(void 0);

TabContent.propTypes = {
  destroyInactiveTabPane: _propTypes.default.bool,
  styleType: _propTypes.default.string.isRequired,
  className: _propTypes.default.string
};

var _default = /*#__PURE__*/(0, _react.memo)(TabContent);

exports.default = _default;