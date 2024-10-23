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

var _react = _interopRequireWildcard(require("react"));

var _useVirtualList3 = _interopRequireDefault(require("../hooks/useVirtualList"));

var _excluded = ["children", "height", "width"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var VirtualScrollList = function VirtualScrollList(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var children = _ref.children,
      height = _ref.height,
      width = _ref.width,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var scrollerRef = (0, _react.useRef)(null);
  var heightWrapperRef = (0, _react.useRef)(null);
  var wrapperRef = (0, _react.useRef)(null);

  var _useVirtualList = (0, _useVirtualList3.default)(scrollerRef, wrapperRef, heightWrapperRef, children, {
    clientHeight: height
  }),
      _useVirtualList2 = (0, _slicedToArray2.default)(_useVirtualList, 2),
      renderChildren = _useVirtualList2[0],
      offsetTop = _useVirtualList2[1];

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: scrollerRef,
    style: {
      maxHeight: height,
      width: width,
      overflowY: 'auto'
    }
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    ref: heightWrapperRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: wrapperRef,
    style: {
      transform: "translate(0, ".concat(offsetTop, "px)")
    }
  }, renderChildren)));
}.bind(void 0);

var _default = /*#__PURE__*/_react.default.memo(VirtualScrollList);

exports.default = _default;