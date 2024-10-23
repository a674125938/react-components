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

var _classnames = _interopRequireDefault(require("classnames"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _KeyCode = _interopRequireDefault(require("../../utils/KeyCode"));

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _TabBar = _interopRequireDefault(require("./TabBar"));

var _TabContent = _interopRequireDefault(require("./TabContent"));

var _style = require("./style");

var _excluded = ["activeKey", "defaultActiveKey", "onChange", "destroyInactiveTabPane", "children", "className", "tabBarPosition", "direction", "styleType", "size", "extra"];

var _this2 = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getDefaultActiveKey(panes) {
  var activeKey = null;

  for (var i = 0; i < panes.length; i++) {
    var pane = panes[i];

    if (!pane.pane.props.disabled) {
      activeKey = pane.key;
      break;
    }
  }

  return activeKey;
}

function getNextActiveKey(panes, currentKey, next) {
  var _this = this;

  var keys = [];
  panes.forEach(function (pane) {
    (0, _newArrowCheck2.default)(this, _this);
    if (!pane.pane.props.disabled) keys.push(pane.key);
  }.bind(this));
  var currentIndex = keys.findIndex(function (_key) {
    (0, _newArrowCheck2.default)(this, _this);
    return _key === currentKey;
  }.bind(this));

  if (currentIndex >= 0) {
    var index = next ? currentIndex + 1 : currentIndex + keys.length - 1;
    return keys[index % keys.length];
  } else {
    return keys[0];
  }
}

var getPanesFromChildren = function getPanesFromChildren(children) {
  var _this3 = this;

  (0, _newArrowCheck2.default)(this, _this2);
  var panes = [];

  _react.default.Children.forEach(children, function (pane, index) {
    (0, _newArrowCheck2.default)(this, _this3);

    if ( /*#__PURE__*/_react.default.isValidElement(pane)) {
      var _pane$props;

      var tabKey = (_pane$props = pane.props) === null || _pane$props === void 0 ? void 0 : _pane$props.tabKey;
      var key = pane.key == null ? tabKey == null ? "__default_tab_key_".concat(index) : tabKey + '' : pane.key + '';
      panes.push({
        pane: pane,
        // to string
        key: tabKey == null ? key : tabKey + ''
      });
    }
  }.bind(this));

  return panes;
}.bind(void 0);

var getNextPrevActiveKey = function getNextPrevActiveKey(e, activeKey, panes) {
  (0, _newArrowCheck2.default)(this, _this2);
  if (activeKey == null) return;
  var eventKeyCode = e.keyCode;

  if (eventKeyCode === _KeyCode.default.ARROW_RIGHT || eventKeyCode === _KeyCode.default.ARROW_DOWN) {
    e.preventDefault();
    var nextKey = getNextActiveKey(panes, activeKey, true);
    return nextKey;
  } else if (eventKeyCode === _KeyCode.default.ARROW_LEFT || eventKeyCode === _KeyCode.default.ARROW_UP) {
    e.preventDefault();
    var previousKey = getNextActiveKey(panes, activeKey);
    return previousKey;
  }
}.bind(void 0);

var Tabs = function Tabs(_ref) {
  var _this4 = this;

  (0, _newArrowCheck2.default)(this, _this2);
  var _activeKey = _ref.activeKey,
      defaultActiveKey = _ref.defaultActiveKey,
      _onChange = _ref.onChange,
      _ref$destroyInactiveT = _ref.destroyInactiveTabPane,
      destroyInactiveTabPane = _ref$destroyInactiveT === void 0 ? false : _ref$destroyInactiveT,
      children = _ref.children,
      className = _ref.className,
      _ref$tabBarPosition = _ref.tabBarPosition,
      tabBarPosition = _ref$tabBarPosition === void 0 ? 'top' : _ref$tabBarPosition,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'ltr' : _ref$direction,
      _ref$styleType = _ref.styleType,
      styleType = _ref$styleType === void 0 ? 'default' : _ref$styleType,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'sm' : _ref$size,
      extra = _ref.extra,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var panes = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this4);
    return getPanesFromChildren(children);
  }.bind(this), [children]); // eslint-disable-next-line react-hooks/exhaustive-deps

  var _defaultActiveKey = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this4);
    return getDefaultActiveKey(panes);
  }.bind(this), []);

  var _useUncontrolled = (0, _useUncontrolled3.default)(_activeKey, defaultActiveKey == null ? _defaultActiveKey : defaultActiveKey, _onChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      activeKey = _useUncontrolled2[0],
      _setActiveKey = _useUncontrolled2[1];

  var setActiveKey = (0, _react.useCallback)(function (key) {
    (0, _newArrowCheck2.default)(this, _this4);
    return _setActiveKey(key + '');
  }.bind(this), [_setActiveKey]);
  var onNavKeyDown = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this4);
    var nextPrevKey = getNextPrevActiveKey(e, activeKey, panes);
    if (nextPrevKey != null) setActiveKey(nextPrevKey);
  }.bind(this), [activeKey, panes, setActiveKey]);
  var onScroll = (0, _react.useCallback)(function (_ref2) {
    (0, _newArrowCheck2.default)(this, _this4);
    var target = _ref2.target,
        currentTarget = _ref2.currentTarget;

    if (target === currentTarget && target.scrollLeft > 0) {
      target.scrollLeft = 0;
    }
  }.bind(this), []);
  var cls = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this4);
    return (0, _classnames.default)(_style.prefixCls, "".concat(_style.prefixCls, "-").concat(tabBarPosition), direction === 'rtl' && "".concat(_style.prefixCls, "-rtl"), className);
  }.bind(this), [className, direction, tabBarPosition]);

  var tabBar = /*#__PURE__*/_react.default.createElement(_TabBar.default, {
    key: "tabBar",
    onKeyDown: onNavKeyDown,
    tabBarPosition: tabBarPosition,
    onTabClick: setActiveKey,
    panes: panes,
    activeKey: activeKey,
    direction: direction,
    styleType: styleType,
    prevIcon: /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      type: "triangle-left"
    }),
    nextIcon: /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      type: "triangle-right"
    }),
    extra: extra
  });

  var tabContent = /*#__PURE__*/_react.default.createElement(_TabContent.default, {
    key: "tabContent",
    tabBarPosition: tabBarPosition,
    activeKey: activeKey,
    destroyInactiveTabPane: destroyInactiveTabPane,
    panes: panes,
    onChange: setActiveKey,
    direction: direction,
    styleType: styleType
  });

  var contents;

  if (tabBarPosition === 'bottom') {
    contents = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, tabContent, tabBar);
  } else {
    contents = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, tabBar, tabContent);
  }

  return /*#__PURE__*/_react.default.createElement(_style.SWrap, (0, _extends2.default)({}, restProps, {
    size: size,
    styleType: styleType,
    tabBarPosition: tabBarPosition,
    className: cls,
    onScroll: onScroll
  }), contents);
}.bind(void 0);

Tabs.propTypes = {
  activeKey: _propTypes.default.string,
  defaultActiveKey: _propTypes.default.string,
  onChange: _propTypes.default.func,
  destroyInactiveTabPane: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.node]).isRequired,
  className: _propTypes.default.string,
  direction: _propTypes.default.string,
  extra: _propTypes.default.node
};

var _default = /*#__PURE__*/(0, _react.memo)(Tabs);

exports.default = _default;