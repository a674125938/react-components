"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _react = _interopRequireWildcard(require("react"));

var _classnames8 = _interopRequireDefault(require("classnames"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _utils = require("./utils");

var _RefContext = _interopRequireDefault(require("./RefContext"));

var _style2 = require("./style");

var _Box = _interopRequireDefault(require("../Box"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var noop = function noop() {
  (0, _newArrowCheck2.default)(this, _this);
  return undefined;
}.bind(void 0);

var warning = function warning(skip, msg) {
  (0, _newArrowCheck2.default)(this, _this);
  return !skip && console.warn(msg);
}.bind(void 0);

var TabBarTabsNode = function TabBarTabsNode(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var activeKey = _ref.activeKey,
      panes = _ref.panes,
      tabBarGutter = _ref.tabBarGutter,
      tabBarPosition = _ref.tabBarPosition,
      direction = _ref.direction,
      _ref$onTabClick = _ref.onTabClick,
      onTabClick = _ref$onTabClick === void 0 ? noop : _ref$onTabClick;

  var _useContext = (0, _react.useContext)(_RefContext.default),
      saveRef = _useContext.saveRef;

  var rst = [];
  panes.forEach(function (pane, index) {
    var _classnames;

    (0, _newArrowCheck2.default)(this, _this2);
    if (!pane) return;
    var key = pane.key;
    var paneProps = pane.pane.props;
    var className = (0, _classnames8.default)((_classnames = {}, (0, _defineProperty2.default)(_classnames, "".concat(_style2.prefixCls, "-tab"), 1), (0, _defineProperty2.default)(_classnames, "".concat(_style2.prefixCls, "-tab-active"), activeKey === key), (0, _defineProperty2.default)(_classnames, "".concat(_style2.prefixCls, "-tab-disabled"), paneProps.disabled), _classnames));
    var gutter = tabBarGutter && index === panes.length - 1 ? 0 : tabBarGutter;
    var marginProperty = direction === 'rtl' ? 'marginLeft' : 'marginRight';
    var style = (0, _defineProperty2.default)({}, (0, _utils.isVertical)(tabBarPosition) ? 'marginBottom' : marginProperty, gutter);
    warning('tab' in paneProps, 'There must be `tab` property on children of Tabs.');

    var node = /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      className: className,
      key: key,
      style: style
    }, activeKey === key ? {
      ref: saveRef('activeTab')
    } : {}, paneProps.disabled ? {} : {
      onClick: onTabClick.bind(this, key)
    }), paneProps.tab);

    rst.push(node);
  }.bind(this));
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: saveRef('navTabsContainer')
  }, rst);
}.bind(void 0);

TabBarTabsNode.propTypes = {
  tabBarGutter: _propTypes.default.number,
  direction: _propTypes.default.string.isRequired,
  onTabClick: _propTypes.default.func.isRequired
};

var TabBarRootNode = function TabBarRootNode(_ref2) {
  var _this3 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref2$tabBarPosition = _ref2.tabBarPosition,
      tabBarPosition = _ref2$tabBarPosition === void 0 ? 'top' : _ref2$tabBarPosition,
      children = _ref2.children,
      extraContent = _ref2.extraContent,
      _ref2$onKeyDown = _ref2.onKeyDown,
      onKeyDown = _ref2$onKeyDown === void 0 ? noop : _ref2$onKeyDown,
      styleType = _ref2.styleType;

  var _useContext2 = (0, _react.useContext)(_RefContext.default),
      _useContext2$saveRef = _useContext2.saveRef,
      saveRef = _useContext2$saveRef === void 0 ? function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return null;
  }.bind(this) : _useContext2$saveRef;

  var cls = (0, _classnames8.default)("".concat(_style2.prefixCls, "-bar"), "".concat(_style2.prefixCls, "-").concat(tabBarPosition, "-bar"), "".concat(_style2.prefixCls, "-styletype-").concat(styleType, "-bar"));
  var topOrBottom = (0, _utils.isVertical)(tabBarPosition);
  var tabBarExtraContentStyle = topOrBottom ? {
    float: 'right'
  } : {};
  var extraContentStyle = extraContent && /*#__PURE__*/_react.default.isValidElement(extraContent) ? extraContent.props.style : {};
  var newChildren = children;

  if (extraContent) {
    if ( /*#__PURE__*/_react.default.isValidElement(extraContent)) {
      extraContent = /*#__PURE__*/(0, _react.cloneElement)(extraContent, {
        key: 'extra',
        style: _objectSpread(_objectSpread({}, tabBarExtraContentStyle), extraContentStyle)
      });
    }

    newChildren = topOrBottom ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, extraContent, children) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children, extraContent);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    role: "tablist",
    className: cls,
    tabIndex: 0,
    ref: saveRef('root'),
    onKeyDown: onKeyDown
  }, newChildren);
}.bind(void 0);

TabBarRootNode.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  extraContent: _propTypes.default.node,
  onKeyDown: _propTypes.default.func,
  styleType: _propTypes.default.string.isRequired
};

function scrollInkBar(props) {
  var getRef = props.getRef,
      direction = props.direction,
      tabBarPosition = props.tabBarPosition;
  var rootNode = getRef('root');
  var wrapNode = getRef('nav') || rootNode;
  var inkBarNode = getRef('inkBar');
  var activeTab = getRef('activeTab');
  if (!inkBarNode || !wrapNode || !rootNode) return;
  var inkBarNodeStyle = inkBarNode.style;
  var display = !!activeTab;
  inkBarNodeStyle.display = display ? 'block' : 'none';
  if (!display) return;

  if (activeTab) {
    var tabNode = activeTab;
    var transformSupported = (0, _utils.isTransform3dSupported)(inkBarNodeStyle); // Reset current style

    (0, _utils.setTransform)(inkBarNodeStyle, '');
    inkBarNodeStyle.width = '';
    inkBarNodeStyle.height = '';
    inkBarNodeStyle.left = '';
    inkBarNodeStyle.top = '';
    inkBarNodeStyle.bottom = '';
    inkBarNodeStyle.right = '';

    if ((0, _utils.isVertical)(tabBarPosition)) {
      var top = tabNode.offsetTop;
      var height = tabNode.offsetHeight;

      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, "translate3d(0,".concat(top, "px,0)"));
        inkBarNodeStyle.top = '0';
      } else {
        inkBarNodeStyle.top = "".concat(top, "px");
      }

      inkBarNodeStyle.height = "".concat(height, "px");
    } else {
      var left = tabNode.offsetLeft;
      var width = tabNode.offsetWidth; // If tabNode width equal to wrapNode width when tabBarPosition is top or bottom
      // It means no css working, then ink bar should not have width until css is loaded
      // Fix https://github.com/ant-design/ant-design/issues/7564

      if (width === rootNode.offsetWidth) {
        width = 0;
      }

      if (direction === 'rtl') {
        left = (0, _utils.getStyle)(tabNode, 'margin-left') - left;
      } // use 3d gpu to optimize render


      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, "translate3d(".concat(left, "px,0,0)"));
      } else {
        inkBarNodeStyle.left = "".concat(left, "px");
      }

      inkBarNodeStyle.width = "".concat(width, "px");
    }
  }
}

var InkTabBarNode = function InkTabBarNode(_ref3) {
  var _this4 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var panes = _ref3.panes,
      activeKey = _ref3.activeKey,
      tabBarPosition = _ref3.tabBarPosition,
      _ref3$inkBarAnimated = _ref3.inkBarAnimated,
      inkBarAnimated = _ref3$inkBarAnimated === void 0 ? true : _ref3$inkBarAnimated,
      direction = _ref3.direction;

  var _useContext3 = (0, _react.useContext)(_RefContext.default),
      saveRef = _useContext3.saveRef,
      getRef = _useContext3.getRef;

  var onResize = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this4);
    scrollInkBar({
      getRef: getRef,
      tabBarPosition: tabBarPosition,
      direction: direction
    });
  }.bind(this), [direction, getRef, tabBarPosition]);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this4);
    onResize();
  }.bind(this), [panes, activeKey, onResize]);
  (0, _react.useEffect)(function () {
    var _this5 = this;

    (0, _newArrowCheck2.default)(this, _this4);
    var resizeObserver = new _resizeObserverPolyfill.default(onResize);
    var containerNode = getRef('container');
    if (containerNode) resizeObserver.observe(containerNode);
    return function () {
      (0, _newArrowCheck2.default)(this, _this5);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    }.bind(this);
  }.bind(this), [getRef, onResize]);
  var className = "".concat(_style2.prefixCls, "-ink-bar");
  var classes = (0, _classnames8.default)(className, inkBarAnimated ? "".concat(className, "-animated") : "".concat(className, "-no-animated"));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes,
    key: "inkBar",
    ref: saveRef('inkBar')
  });
}.bind(void 0);

InkTabBarNode.propTypes = {
  inkBarAnimated: _propTypes.default.bool,
  direction: _propTypes.default.string.isRequired,
  styles: _propTypes.default.shape({})
};

var getOffsetWH = function getOffsetWH(node, tabBarPosition) {
  (0, _newArrowCheck2.default)(this, _this);
  if (!node) return 0;

  if ((0, _utils.isVertical)(tabBarPosition)) {
    return node.offsetHeight;
  }

  return node.offsetWidth;
}.bind(void 0);

var getScrollWH = function getScrollWH(node, tabBarPosition) {
  (0, _newArrowCheck2.default)(this, _this);
  if (!node) return 0;

  if ((0, _utils.isVertical)(tabBarPosition)) {
    return node.scrollHeight;
  }

  return node.scrollWidth;
}.bind(void 0);

var getOffsetLT = function getOffsetLT(node, tabBarPosition) {
  (0, _newArrowCheck2.default)(this, _this);
  if (!node) return 0;

  if ((0, _utils.isVertical)(tabBarPosition)) {
    return node.offsetTop;
  }

  return node.offsetLeft;
}.bind(void 0);

var setNavOffset = function setNavOffset(offset, context) {
  (0, _newArrowCheck2.default)(this, _this);
  var currentOffset = context.currentOffset,
      getRef = context.getRef,
      tabBarPosition = context.tabBarPosition,
      direction = context.direction;
  var navNode = getRef('nav');
  var navTabsContainer = getRef('navTabsContainer');
  var navNodeWH = getScrollWH(navTabsContainer || navNode, tabBarPosition); // Add 1px to fix `offsetWidth` with decimal in Chrome not correct handle
  // https://github.com/ant-design/ant-design/issues/13423

  var containerWH = getOffsetWH(getRef('container'), tabBarPosition) + 1;
  var navWrapNodeWH = getOffsetWH(getRef('navWrap'), tabBarPosition);
  var minOffset = containerWH - navNodeWH;
  if (offset > 0) offset = 0;

  if (minOffset >= 0) {
    offset = 0;
  } else if (minOffset >= offset) {
    var realOffset = navWrapNodeWH - navNodeWH;
    offset = realOffset;
  }

  if (currentOffset !== offset) {
    var navOffset = {};

    var _navNode = getRef('nav');

    if (!_navNode) return currentOffset;
    var navStyle = _navNode.style;
    var transformSupported = (0, _utils.isTransform3dSupported)(navStyle);

    if ((0, _utils.isVertical)(tabBarPosition)) {
      if (transformSupported) {
        navOffset = {
          value: "translate3d(0,".concat(offset, "px,0)")
        };
      } else {
        navOffset = {
          name: 'top',
          value: "".concat(offset, "px")
        };
      }
    } else {
      if (transformSupported) {
        if (direction === 'rtl') {
          offset = -offset;
        }

        navOffset = {
          value: "translate3d(".concat(offset, "px,0,0)")
        };
      } else {
        navOffset = {
          name: 'left',
          value: "".concat(offset, "px")
        };
      }
    }

    if (navOffset.value) {
      if (transformSupported) {
        (0, _utils.setTransform)(navStyle, navOffset.value);
      } else if (navOffset.name) {
        navStyle[navOffset.name] = navOffset.value;
      }
    }
  }

  return offset;
}.bind(void 0);

var getNextPrev = function getNextPrev(_ref4) {
  (0, _newArrowCheck2.default)(this, _this);
  var getRef = _ref4.getRef,
      tabBarPosition = _ref4.tabBarPosition,
      currentOffset = _ref4.currentOffset;
  var navNode = getRef('nav');
  var navTabsContainer = getRef('navTabsContainer');
  var navNodeWH = getScrollWH(navTabsContainer || navNode, tabBarPosition); // Add 1px to fix `offsetWidth` with decimal in Chrome not correct handle
  // https://github.com/ant-design/ant-design/issues/13423

  var containerWH = getOffsetWH(getRef('container'), tabBarPosition) + 1;
  var minOffset = containerWH - navNodeWH;
  var next, prev;

  if (minOffset >= 0) {
    next = false;
  } else if (minOffset < currentOffset) {
    next = true;
  } else {
    next = false;
  }

  if (currentOffset < 0) {
    prev = true;
  } else {
    prev = false;
  }

  return {
    next: next,
    prev: prev
  };
}.bind(void 0);

var getOffsetOfActive = function getOffsetOfActive(context) {
  (0, _newArrowCheck2.default)(this, _this);
  var getRef = context.getRef,
      next = context.next,
      prev = context.prev,
      tabBarPosition = context.tabBarPosition,
      currentOffset = context.currentOffset;
  var activeTab = getRef('activeTab');
  var navWrap = getRef('navWrap');
  if (!activeTab) return; // when not scrollable or enter scrollable first time, don't emit scrolling

  var needToScroll = next || prev;
  if (!needToScroll) return;
  var activeTabWH = getScrollWH(activeTab, tabBarPosition);
  var wrapWH = getOffsetWH(navWrap, tabBarPosition);
  var activeTabOffset = getOffsetLT(activeTab, tabBarPosition);

  if (-currentOffset < activeTabOffset + activeTabWH - wrapWH) {
    return -(activeTabOffset + activeTabWH - wrapWH);
  } else if (-currentOffset > activeTabOffset) {
    return -activeTabOffset;
  }
}.bind(void 0);

var ScrollableTabBarNode = function ScrollableTabBarNode(_ref5) {
  var _this6 = this,
      _classnames2,
      _classnames3,
      _classnames4;

  (0, _newArrowCheck2.default)(this, _this);
  var tabBarPosition = _ref5.tabBarPosition,
      _ref5$scrollAnimated = _ref5.scrollAnimated,
      scrollAnimated = _ref5$scrollAnimated === void 0 ? true : _ref5$scrollAnimated,
      _ref5$onPrevClick = _ref5.onPrevClick,
      onPrevClick = _ref5$onPrevClick === void 0 ? noop : _ref5$onPrevClick,
      _ref5$onNextClick = _ref5.onNextClick,
      onNextClick = _ref5$onNextClick === void 0 ? noop : _ref5$onNextClick,
      prevIcon = _ref5.prevIcon,
      nextIcon = _ref5.nextIcon,
      children = _ref5.children,
      direction = _ref5.direction,
      activeKey = _ref5.activeKey;
  var offsetRef = (0, _react.useRef)(0);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      next = _useState2[0],
      setNext = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      prev = _useState4[0],
      setPrev = _useState4[1];

  var showNextPrev = prev || next;

  var _useContext4 = (0, _react.useContext)(_RefContext.default),
      saveRef = _useContext4.saveRef,
      getRef = _useContext4.getRef; // update next/prev icon


  var setNextPrev = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this6);

    var _getNextPrev = getNextPrev({
      getRef: getRef,
      currentOffset: offsetRef.current,
      tabBarPosition: tabBarPosition
    }),
        next = _getNextPrev.next,
        prev = _getNextPrev.prev;

    setNext(next);
    setPrev(prev);
  }.bind(this), [getRef, tabBarPosition]); // set nav offset

  var setOffset = (0, _react.useCallback)(function (offset) {
    (0, _newArrowCheck2.default)(this, _this6);
    var newOffset = setNavOffset(offset, {
      currentOffset: offsetRef.current,
      direction: direction,
      tabBarPosition: tabBarPosition,
      getRef: getRef
    });
    offsetRef.current = newOffset;
  }.bind(this), [direction, getRef, tabBarPosition]); // scroll bar to active tab

  var scrollToActiveTab = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    var offset = getOffsetOfActive({
      getRef: getRef,
      next: next,
      prev: prev,
      tabBarPosition: tabBarPosition,
      currentOffset: offsetRef.current
    });
    if (offset != null) setOffset(offset);
  }.bind(this), [getRef, next, prev, setOffset, tabBarPosition]);
  var prevTransitionEnd = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this6);
    if (e.propertyName !== 'opacity') return;
    scrollToActiveTab();
    setNextPrev();
  }.bind(this), [scrollToActiveTab, setNextPrev]);
  var onPrev = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this6);
    onPrevClick === null || onPrevClick === void 0 ? void 0 : onPrevClick(e);
    var navWrapNode = getRef('navWrap');
    var navWrapNodeWH = getOffsetWH(navWrapNode, tabBarPosition);
    setOffset(offsetRef.current + navWrapNodeWH);
    setNextPrev();
  }.bind(this), [getRef, onPrevClick, setNextPrev, setOffset, tabBarPosition]);
  var onNext = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this6);
    onNextClick === null || onNextClick === void 0 ? void 0 : onNextClick(e);
    var navWrapNode = getRef('navWrap');
    var navWrapNodeWH = getOffsetWH(navWrapNode, tabBarPosition);
    setOffset(offsetRef.current - navWrapNodeWH);
    setNextPrev();
  }.bind(this), [getRef, onNextClick, setNextPrev, setOffset, tabBarPosition]); // reset offset when tabBarPosition change

  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    setOffset(0); // eslint-disable-next-line react-hooks/exhaustive-deps
  }.bind(this), [tabBarPosition]); // scroll to active when initial and activeKey changed

  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    scrollToActiveTab(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }.bind(this), [activeKey, tabBarPosition]);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    setNextPrev();
  }.bind(this), [children, setNextPrev, tabBarPosition]); // set next/prev when size change

  (0, _react.useEffect)(function () {
    var _this7 = this;

    (0, _newArrowCheck2.default)(this, _this6);
    var debouncedResize = (0, _debounce2.default)(function () {
      (0, _newArrowCheck2.default)(this, _this7);
      setNextPrev();
    }.bind(this), 200);
    var resizeObserver = new _resizeObserverPolyfill.default(debouncedResize);
    var containerNode = getRef('container');
    if (containerNode) resizeObserver.observe(containerNode);
    return function () {
      (0, _newArrowCheck2.default)(this, _this7);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }

      if (debouncedResize.cancel) {
        debouncedResize.cancel();
      }
    }.bind(this);
  }.bind(this), [getRef, setNextPrev]);

  var prevButton = /*#__PURE__*/_react.default.createElement("span", {
    onClick: onPrev,
    unselectable: "on",
    className: (0, _classnames8.default)((_classnames2 = {}, (0, _defineProperty2.default)(_classnames2, "".concat(_style2.prefixCls, "-tab-prev"), 1), (0, _defineProperty2.default)(_classnames2, "".concat(_style2.prefixCls, "-tab-btn-disabled"), !prev), (0, _defineProperty2.default)(_classnames2, "".concat(_style2.prefixCls, "-tab-arrow-show"), showNextPrev), _classnames2)),
    onTransitionEnd: prevTransitionEnd
  }, prevIcon || /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(_style2.prefixCls, "-tab-prev-icon")
  }));

  var nextButton = /*#__PURE__*/_react.default.createElement("span", {
    onClick: onNext,
    unselectable: "on",
    className: (0, _classnames8.default)((_classnames3 = {}, (0, _defineProperty2.default)(_classnames3, "".concat(_style2.prefixCls, "-tab-next"), 1), (0, _defineProperty2.default)(_classnames3, "".concat(_style2.prefixCls, "-tab-btn-disabled"), !next), (0, _defineProperty2.default)(_classnames3, "".concat(_style2.prefixCls, "-tab-arrow-show"), showNextPrev), _classnames3))
  }, nextIcon || /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(_style2.prefixCls, "-tab-next-icon")
  }));

  var navClassName = "".concat(_style2.prefixCls, "-nav");
  var navClasses = (0, _classnames8.default)(navClassName, scrollAnimated ? "".concat(navClassName, "-animated") : "".concat(navClassName, "-no-animated"));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames8.default)((_classnames4 = {}, (0, _defineProperty2.default)(_classnames4, "".concat(_style2.prefixCls, "-nav-container"), 1), (0, _defineProperty2.default)(_classnames4, "".concat(_style2.prefixCls, "-nav-container-scrolling"), showNextPrev), _classnames4)),
    ref: saveRef('container')
  }, prevButton, nextButton, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_style2.prefixCls, "-nav-wrap"),
    ref: saveRef('navWrap')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_style2.prefixCls, "-nav-scroll")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: navClasses,
    ref: saveRef('nav')
  }, children))));
}.bind(void 0);

ScrollableTabBarNode.propTypes = {
  scrollAnimated: _propTypes.default.bool,
  onPrevClick: _propTypes.default.func,
  onNextClick: _propTypes.default.func,
  prevIcon: _propTypes.default.node,
  nextIcon: _propTypes.default.node,
  children: _propTypes.default.node,
  direction: _propTypes.default.string
};

var TabBar = function TabBar(props) {
  var _this8 = this,
      _classnames7;

  (0, _newArrowCheck2.default)(this, _this);
  var refs = (0, _react.useRef)({});
  var getRef = (0, _react.useCallback)(function (name) {
    (0, _newArrowCheck2.default)(this, _this8);
    return refs.current[name];
  }.bind(this), []);
  var saveRef = (0, _react.useCallback)(function (name) {
    var _this9 = this;

    (0, _newArrowCheck2.default)(this, _this8);
    return function (node) {
      (0, _newArrowCheck2.default)(this, _this9);
      if (!node) return;
      refs.current[name] = node;
    }.bind(this);
  }.bind(this), []);
  var styleType = props.styleType;
  return /*#__PURE__*/_react.default.createElement(_RefContext.default.Provider, {
    value: {
      getRef: getRef,
      saveRef: saveRef
    }
  }, /*#__PURE__*/_react.default.createElement(TabBarRootNode, props, /*#__PURE__*/_react.default.createElement(_Box.default, {
    container: true,
    className: (0, _classnames8.default)((0, _defineProperty2.default)({}, "".concat(_style2.prefixCls, "-srcoll-extra-warrper"), ['left', 'right'].includes(props.tabBarPosition))),
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    flex: 1,
    className: (0, _classnames8.default)((0, _defineProperty2.default)({}, "".concat(_style2.prefixCls, "-srcoll-box"), 1))
  }, /*#__PURE__*/_react.default.createElement(ScrollableTabBarNode, props, /*#__PURE__*/_react.default.createElement(TabBarTabsNode, props), styleType === 'ink' ? /*#__PURE__*/_react.default.createElement(InkTabBarNode, props) : null)), /*#__PURE__*/_react.default.createElement(_Box.default, {
    justifyContent: "flex-end",
    className: (0, _classnames8.default)((_classnames7 = {}, (0, _defineProperty2.default)(_classnames7, "".concat(_style2.prefixCls, "-extra-wapper"), 1), (0, _defineProperty2.default)(_classnames7, "".concat(_style2.prefixCls, "-extra-show"), props.extra), _classnames7))
  }, props.extra))));
}.bind(void 0);

TabBar.propTypes = {
  onKeyDown: _propTypes.default.func.isRequired,
  onTabClick: _propTypes.default.func.isRequired,
  direction: _propTypes.default.string.isRequired,
  styleType: _propTypes.default.string.isRequired,
  extra: _propTypes.default.node
};

var _default = /*#__PURE__*/(0, _react.memo)(TabBar);

exports.default = _default;