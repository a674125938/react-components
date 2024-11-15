"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// https://github.com/que-etc/resize-observer-polyfill/issues/80
// 由于 ts 官方增加了 contentRect 的类型定义，导致和 resize-observer-polyfill 内部的定义冲突，目前先以 "skipLibCheck" 解决
var DEFAULT_DEP = [];
/**
 * 计算容器内的元素最大展示数量
 * @returns {[number, number, boolean]} [当前测试的展示数, 最终确定的展示数, 是否在测试过程中]
 */

var useOverflow = function useOverflow(_ref) {
  var _this = this;

  var containerRef = _ref.containerRef,
      _ref$defaultCount = _ref.defaultCount,
      defaultCount = _ref$defaultCount === void 0 ? 0 : _ref$defaultCount,
      maxCount = _ref.maxCount,
      _ref$minCount = _ref.minCount,
      minCount = _ref$minCount === void 0 ? 0 : _ref$minCount;
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_DEP;

  // the count of trying to show
  var _useState = (0, _react.useState)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    return Math.min(defaultCount, maxCount);
  }.bind(this)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1]; // the count valid to show


  var _useState3 = (0, _react.useState)(count),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      measureCount = _useState4[0],
      setMeasureCount = _useState4[1]; // latest valid count


  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      latestValidCount = _useState6[0],
      setLatestValidCount = _useState6[1]; // the container element


  var _useState7 = (0, _react.useState)(true),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      measuring = _useState8[0],
      setMeasuring = _useState8[1]; // save to ref for use in resize observer to avoid frequently create new observer


  var measuringRef = (0, _react.useRef)(measuring);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    measuringRef.current = measuring;
  }.bind(this), [measuring]); // start to measure

  var startMeasuring = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    if (measuringRef.current) return;
    setMeasuring(true);
    setLatestValidCount(null);
  }.bind(this), []); // stop measuring

  var endMeasuring = (0, _react.useCallback)(function (measureCount) {
    (0, _newArrowCheck2.default)(this, _this);
    setMeasuring(false);
    setMeasureCount(measureCount);
  }.bind(this), []);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    // console.log('reset when deps changed');
    startMeasuring(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }.bind(this), deps);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    // reset when config changed
    startMeasuring();
  }.bind(this), [minCount, maxCount, startMeasuring]);
  (0, _react.useEffect)(function () {
    var _this2 = this;

    (0, _newArrowCheck2.default)(this, _this);
    var containerDOM = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current;
    var resizeObserver = null;

    if (containerDOM) {
      resizeObserver = new _resizeObserverPolyfill.default(function () {
        (0, _newArrowCheck2.default)(this, _this2);

        if (!measuringRef.current) {
          startMeasuring(); // console.log('reset when width changed');
        } // else {
        //     console.log('lock when width changed');
        // }

      }.bind(this));
      resizeObserver.observe(containerDOM);
    }

    return function () {
      (0, _newArrowCheck2.default)(this, _this2);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    }.bind(this);
  }.bind(this), [containerRef, startMeasuring]); // console.log({ count, latestValidCount, maxCount, minCount, measuring });
  // use layout effect to measure can avoid most shaking

  (0, _react.useLayoutEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    var containerDOM = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current;
    if (!containerDOM || containerDOM.offsetWidth === 0 || containerDOM.scrollWidth === 0) return; // measure end

    if (count === latestValidCount) {
      endMeasuring(latestValidCount);
      return;
    }

    var newCount = count;

    if (containerDOM.offsetWidth >= containerDOM.scrollWidth) {
      setLatestValidCount(count); // try to show more

      newCount = Math.min(count + 1, maxCount);
    } else if (containerDOM.offsetWidth < containerDOM.scrollWidth) {
      // if container with not enough space event when count is 0, it will be set to 0
      if (count === 0) setLatestValidCount(count); // try to show less

      newCount = Math.max(0, minCount, count - 1);
    }

    setCount(newCount);
  }.bind(this), [containerRef, count, endMeasuring, latestValidCount, maxCount, minCount]);
  return [count, measureCount, measuring];
};

var _default = useOverflow;
exports.default = _default;