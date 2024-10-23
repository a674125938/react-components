"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useSimpleVirtualList = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CLIENT_HEIGHT = window.innerHeight;
var FAIL_OFFSET = 2;

var useSimpleVirtualList = function useSimpleVirtualList(scrollerRef, wrapperRef, heightWrapperRef, children) {
  var _this = this;

  var _ref = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
      _ref$clientHeight = _ref.clientHeight,
      clientHeight = _ref$clientHeight === void 0 ? CLIENT_HEIGHT : _ref$clientHeight,
      _ref$itemHeight = _ref.itemHeight,
      itemHeight = _ref$itemHeight === void 0 ? 20 : _ref$itemHeight;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      scrollTop = _useState2[0],
      setScrollTop = _useState2[1];

  var _useState3 = (0, _react.useState)(itemHeight),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      measuredItemHeight = _useState4[0],
      setMeasuredItemHeight = _useState4[1];

  var _useState5 = (0, _react.useState)(clientHeight),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      measuredClientHeight = _useState6[0],
      setMeasuredClientHeight = _useState6[1]; // visible count of children


  var visibleCount = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    return (measuredClientHeight / measuredItemHeight | 0) + FAIL_OFFSET * 2;
  }.bind(this), [measuredClientHeight, measuredItemHeight]); // measure when first mount

  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    var scroller = scrollerRef.current;
    var wrapper = wrapperRef.current;
    var heightWrapper = heightWrapperRef.current;

    if (!scroller || !wrapper || !heightWrapper) {
      console.error('scroller, wrapper, heightWrapper is invalid');
      return;
    }

    var firstItem = wrapper.children[0];

    if (!firstItem) {
      console.error('First item is invalid');
      return;
    }

    var itemRect = firstItem.getBoundingClientRect(); // full height of all items

    var fullHeight = itemRect.height * children.length; // set height after current items measured

    heightWrapper.style.height = fullHeight + 'px';
    var scrollRect = scroller.getBoundingClientRect();
    setScrollTop(scroller.scrollTop);
    setMeasuredItemHeight(itemRect.height);
    setMeasuredClientHeight(scrollRect.height);
  }.bind(this), [children.length, heightWrapperRef, scrollerRef, wrapperRef]); // offset from first visible child

  var offset = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    return Math.min(Math.max((scrollTop / measuredItemHeight | 0) - FAIL_OFFSET, 0), Math.max(children.length - visibleCount, 0));
  }.bind(this), [children.length, measuredItemHeight, scrollTop, visibleCount]); // listen onscroll

  (0, _react.useEffect)(function () {
    var _this2 = this;

    (0, _newArrowCheck2.default)(this, _this);
    var scroller = scrollerRef.current;

    var onScroll = function onScroll(e) {
      (0, _newArrowCheck2.default)(this, _this2);
      if (!scroller) return;
      if (e.currentTarget !== scroller) return;
      setScrollTop(scroller.scrollTop);
    }.bind(this);

    if (scroller) {
      // initial scrollTop
      setScrollTop(scroller.scrollTop);
      scroller.addEventListener('scroll', onScroll);
    }

    return function () {
      (0, _newArrowCheck2.default)(this, _this2);
      if (scroller) scroller.removeEventListener('scroll', onScroll);
    }.bind(this);
  }.bind(this), [scrollerRef]); // children should render

  var renderChildren = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    return children.slice(offset, visibleCount + offset);
  }.bind(this), [children, offset, visibleCount]); // offset height from top

  var offsetTop = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    return offset * measuredItemHeight;
  }.bind(this), [measuredItemHeight, offset]);
  return [renderChildren, offsetTop];
};

exports.useSimpleVirtualList = useSimpleVirtualList;
var _default = useSimpleVirtualList;
exports.default = _default;