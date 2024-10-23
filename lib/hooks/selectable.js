"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useItem = exports.useGroup = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["valueMap", "toggleSelect", "addItem", "removeItem"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var formatValue = function formatValue(value) {
  (0, _newArrowCheck2.default)(this, _this);
  return Array.isArray(value) ? value : [];
}.bind(void 0);

var useGroup = function useGroup(value, onChange) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var valueMap = (0, _react.useMemo)(function () {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    var m = new Map();
    formatValue(value).forEach(function (v) {
      (0, _newArrowCheck2.default)(this, _this3);
      return m.set(v, true);
    }.bind(this));
    return m;
  }.bind(this), [value]);
  var itemCountRef = (0, _react.useRef)(0);
  var addItem = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    itemCountRef.current++;
  }.bind(this), []);
  var removeItem = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    itemCountRef.current--;
  }.bind(this), []);
  var toggleSelect = (0, _react.useCallback)(function (v) {
    var _this4 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    var newValue;

    if (valueMap.get(v)) {
      newValue = formatValue(value).filter(function (_v) {
        (0, _newArrowCheck2.default)(this, _this4);
        return _v !== v;
      }.bind(this));
    } else {
      newValue = formatValue(value).concat(v);
    }

    var selectedStatus = newValue.length === 0 ? 'NONE' : newValue.length >= itemCountRef.current ? 'ALL' : 'PART';
    onChange(newValue, selectedStatus);
  }.bind(this), [onChange, value, valueMap]);
  return {
    valueMap: valueMap,
    toggleSelect: toggleSelect,
    addItem: addItem,
    removeItem: removeItem
  };
}.bind(void 0);

exports.useGroup = useGroup;

var useItem = function useItem(value, checked, context) {
  var _this5 = this;

  (0, _newArrowCheck2.default)(this, _this);

  var _useContext = (0, _react.useContext)(context),
      valueMap = _useContext.valueMap,
      toggleSelect = _useContext.toggleSelect,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem,
      restContext = (0, _objectWithoutProperties2.default)(_useContext, _excluded); // save toggle for better performance


  var toggleRef = (0, _react.useRef)(toggleSelect);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this5);
    toggleRef.current = toggleSelect;
  }.bind(this), [toggleSelect]);

  if (valueMap) {
    checked = !!valueMap.get(value);
  }

  var toggle = (0, _react.useCallback)(function (v) {
    (0, _newArrowCheck2.default)(this, _this5);
    return toggleRef.current(v);
  }.bind(this), []);
  (0, _react.useEffect)(function () {
    var _this6 = this;

    (0, _newArrowCheck2.default)(this, _this5);
    addItem();
    return function () {
      (0, _newArrowCheck2.default)(this, _this6);
      removeItem();
    }.bind(this);
  }.bind(this), [addItem, removeItem]);
  return {
    checked: checked,
    toggle: toggle,
    restContext: restContext
  };
}.bind(void 0);

exports.useItem = useItem;