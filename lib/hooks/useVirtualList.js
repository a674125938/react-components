"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CLIENT_HEIGHT = window.innerHeight;
var FAIL_OFFSET = 2; // get offset top for offset item

var getOffsetTop = function getOffsetTop(offset, heights, offsetTops, lastUnmeasuredIndex, itemHeight) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);

  var _getOffsetTop2 = function _getOffsetTop(offset) {
    (0, _newArrowCheck2.default)(this, _this2);
    // cache
    if (offsetTops[offset] != null) return offsetTops[offset]; // when have unmeasured items, use itemHeight for replace

    if (offset > lastUnmeasuredIndex) return _getOffsetTop2(lastUnmeasuredIndex) + itemHeight * (offset - lastUnmeasuredIndex); // compute for measured items and cache

    return offsetTops[offset] = _getOffsetTop2(offset - 1) + heights[offset - 1];
  }.bind(this);

  return _getOffsetTop2(offset);
}.bind(void 0); // get closed offset for current scrollTop


var getClosedOffset = function getClosedOffset(scrollTop, itemHeight, heights, offsetTops, lastUnmeasuredIndex, total, visibleCount) {
  (0, _newArrowCheck2.default)(this, _this);
  var firstGuessOffset = scrollTop / itemHeight | 0;
  var min, max;

  if (getOffsetTop(firstGuessOffset, heights, offsetTops, lastUnmeasuredIndex, itemHeight) > scrollTop) {
    min = 0;
    max = firstGuessOffset;
  } else {
    min = firstGuessOffset;
    max = total - 1;
  }

  while (max - min > 2) {
    var c = (min + max) / 2 | 0;

    if (getOffsetTop(c, heights, offsetTops, lastUnmeasuredIndex, itemHeight) > scrollTop) {
      max = c;
    } else {
      min = c;
    }
  }

  return Math.min(Math.max(min - 2, 0), Math.max(0, total - visibleCount));
}.bind(void 0);

var useVisibleList = function useVisibleList(scrollerRef, wrapperRef, heightWrapperRef, children) {
  var _this3 = this;

  var _ref = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
      _ref$clientHeight = _ref.clientHeight,
      clientHeight = _ref$clientHeight === void 0 ? CLIENT_HEIGHT : _ref$clientHeight,
      _ref$itemHeight = _ref.itemHeight,
      itemHeight = _ref$itemHeight === void 0 ? 20 : _ref$itemHeight;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      scrollTop = _useState2[0],
      setScrollTop = _useState2[1];

  var heightsRef = (0, _react.useRef)([]);
  var offsetTopsRef = (0, _react.useRef)([0]);
  var lastUnmeasuredIndexRef = (0, _react.useRef)(0);

  var _useState3 = (0, _react.useState)(clientHeight),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      measuredClientHeight = _useState4[0],
      setMeasuredClientHeight = _useState4[1]; // visible count of children


  var visibleCount = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return (measuredClientHeight / itemHeight | 0) + FAIL_OFFSET * 2;
  }.bind(this), [measuredClientHeight, itemHeight]); // offset from first visible child

  var offset = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return getClosedOffset(scrollTop, itemHeight, heightsRef.current, offsetTopsRef.current, lastUnmeasuredIndexRef.current, children.length, visibleCount);
  }.bind(this), [children.length, itemHeight, scrollTop, visibleCount]); // measure item heights

  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    var wrapper = wrapperRef.current;
    var heightWrapper = heightWrapperRef.current;
    if (!wrapper) return;
    var renderChildrenDOM = wrapper.childNodes;
    var l = renderChildrenDOM.length;
    var heights = heightsRef.current;
    var prevMeasured = offset <= lastUnmeasuredIndexRef.current;

    for (var i = 0; i < l; i++) {
      var index = i + offset;

      if (renderChildrenDOM[i].nodeType === 1) {
        var rect = renderChildrenDOM[i].getBoundingClientRect();
        heights[index] = rect.height;
      } else {
        heights[index] = itemHeight;
        console.warn(renderChildrenDOM[i], ' is not a valid Element, this may cause height flashing');
      }
    } // update measured index


    if (prevMeasured) {
      lastUnmeasuredIndexRef.current = Math.max(lastUnmeasuredIndexRef.current, offset + l);
    } // full height of all items


    var fullHeight = getOffsetTop(children.length, heightsRef.current, offsetTopsRef.current, lastUnmeasuredIndexRef.current, itemHeight); // set height after current items measured

    if (heightWrapper) {
      heightWrapper.style.height = fullHeight + 'px';
    }
  }.bind(this), [children.length, heightWrapperRef, itemHeight, offset, wrapperRef]); // measure when first mount or child changed

  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    var scroller = scrollerRef.current;
    var wrapper = wrapperRef.current;

    if (!scroller || !wrapper) {
      console.error('scroller, wrapper is invalid');
      return;
    }

    var scrollRect = scroller.getBoundingClientRect();
    setScrollTop(scroller.scrollTop);
    setMeasuredClientHeight(scrollRect.height);
  }.bind(this), [children.length, heightWrapperRef, scrollerRef, wrapperRef]); // listen onscroll

  (0, _react.useEffect)(function () {
    var _this4 = this;

    (0, _newArrowCheck2.default)(this, _this3);
    var scroller = scrollerRef.current;

    var onScroll = function onScroll(e) {
      (0, _newArrowCheck2.default)(this, _this4);
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
      (0, _newArrowCheck2.default)(this, _this4);
      if (scroller) scroller.removeEventListener('scroll', onScroll);
    }.bind(this);
  }.bind(this), [scrollerRef]); // children should render

  var renderChildren = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return children.slice(offset, visibleCount + offset);
  }.bind(this), [children, offset, visibleCount]); // offset height from top

  var offsetTop = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    var heights = heightsRef.current;
    var offsetTops = offsetTopsRef.current;
    return getOffsetTop(offset, heights, offsetTops, lastUnmeasuredIndexRef.current, itemHeight);
  }.bind(this), [itemHeight, offset]);
  return [renderChildren, offsetTop];
};

var _default = useVisibleList;
exports.default = _default;