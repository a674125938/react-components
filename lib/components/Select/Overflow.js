"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Static = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Tag = _interopRequireDefault(require("../../components/Tag"));

var _useOverflow3 = _interopRequireDefault(require("../../hooks/useOverflow"));

var _style = require("./style");

var _excluded = ["items", "renderItem", "renderRest", "count"],
    _excluded2 = ["items", "renderItem", "renderRest", "onMeasure", "changeContent"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _uid = 0;
var ID_KEY = 'data-urc-select_overflow-id';

var Static = function Static(_ref) {
  var _this = this;

  var items = _ref.items,
      renderItem = _ref.renderItem,
      renderRest = _ref.renderRest,
      count = _ref.count,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var renderItems = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    return items.slice(0, count).map(renderItem);
  }.bind(this), [count, items, renderItem]);
  var restItems = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    return renderRest(items.slice(count));
  }.bind(this), [count, items, renderRest]);
  return /*#__PURE__*/_react.default.createElement(_Tag.default.Group, (0, _extends2.default)({}, rest, {
    className: _style.overflowCls + ' ' + _style.staticCls
  }), renderItems, restItems);
};

exports.Static = Static;

var Overflow = function Overflow(_ref2) {
  var _this2 = this;

  var items = _ref2.items,
      renderItem = _ref2.renderItem,
      renderRest = _ref2.renderRest,
      onMeasure = _ref2.onMeasure,
      changeContent = _ref2.changeContent,
      rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);

  var _useState = (0, _react.useState)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return ++_uid;
  }.bind(this)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 1),
      uid = _useState2[0];

  var l = items.length;
  var containerRef = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    containerRef.current = document.querySelector("[".concat(ID_KEY, "=\"").concat(uid, "\"]"));
  }.bind(this), [uid]);

  var _useOverflow = (0, _useOverflow3.default)({
    containerRef: containerRef,
    defaultCount: 1,
    maxCount: l
  }, [changeContent]),
      _useOverflow2 = (0, _slicedToArray2.default)(_useOverflow, 2),
      count = _useOverflow2[0],
      measureCount = _useOverflow2[1];

  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    onMeasure(measureCount);
  }.bind(this), [measureCount, onMeasure]);
  var renderItems = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return items.slice(0, count).map(renderItem);
  }.bind(this), [count, items, renderItem]);
  var restItems = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return renderRest(items.slice(count));
  }.bind(this), [count, items, renderRest]);
  return /*#__PURE__*/_react.default.createElement(_Tag.default.Group, (0, _extends2.default)({}, rest, (0, _defineProperty2.default)({}, ID_KEY, uid), {
    className: _style.overflowCls
  }), renderItems, restItems);
};

var _default = Overflow;
exports.default = _default;