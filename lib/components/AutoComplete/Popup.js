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

var _Menu = _interopRequireWildcard(require("../../components/Menu"));

var _style = require("./style");

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultSearch = function defaultSearch(item, searchValue) {
  var _item$value;

  (0, _newArrowCheck2.default)(this, _this);
  return (item === null || item === void 0 ? void 0 : (_item$value = item.value) === null || _item$value === void 0 ? void 0 : _item$value.indexOf(searchValue)) >= 0;
}.bind(void 0);

var PopupWithOutMemo = /*#__PURE__*/_react.default.forwardRef(function Popup(_ref, ref) {
  var _this2 = this;

  var searchValue = _ref.searchValue,
      options = _ref.options,
      onChange = _ref.onChange,
      handleSearch = _ref.handleSearch,
      loading = _ref.loading;
  var searchResult = (0, _react.useMemo)(function () {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    if (handleSearch === false) return options || [];
    var filterHandle = typeof handleSearch === 'function' ? handleSearch : defaultSearch;
    var result = options.filter(function (item) {
      (0, _newArrowCheck2.default)(this, _this3);
      return filterHandle(item, searchValue);
    }.bind(this));
    return result;
  }.bind(this), [handleSearch, options, searchValue]);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  (0, _react.useImperativeHandle)(ref, function () {
    var _this4 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    return {
      moveUp: function moveUp() {
        (0, _newArrowCheck2.default)(this, _this4);

        if (index === null) {
          setIndex(searchResult.length - 1);
        } else {
          setIndex((index + 1) % searchResult.length);
        }
      }.bind(this),
      moveDown: function moveDown() {
        (0, _newArrowCheck2.default)(this, _this4);

        if (index === null) {
          setIndex(0);
        } else {
          setIndex((index + 1) % searchResult.length);
        }
      }.bind(this),
      select: function select() {
        (0, _newArrowCheck2.default)(this, _this4);
        if (index === null) return;
        onChange(searchResult[index].value);
      }.bind(this)
    };
  }.bind(this), [index, searchResult, onChange]);
  var onSelect = (0, _react.useCallback)(function (values) {
    (0, _newArrowCheck2.default)(this, _this2);
    onChange(values[0]);
  }.bind(this), [onChange]);
  var onMouseDown = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    e.preventDefault();
  }.bind(this), []);
  if (!searchResult.length) return null;
  return /*#__PURE__*/_react.default.createElement(_style.PopupWrap, {
    loading: loading,
    indicator: null
  }, /*#__PURE__*/_react.default.createElement(_Menu.default, {
    selectedKeys: [searchValue],
    onChange: onSelect,
    onMouseDown: onMouseDown,
    customStyle: {
      maxHeight: '182px',
      maxWidth: '800px'
    },
    className: _style.menuCls
  }, searchResult.map(function (item) {
    (0, _newArrowCheck2.default)(this, _this2);
    return /*#__PURE__*/_react.default.createElement(_Menu.Item, {
      itemKey: item.value,
      key: item.value
    }, item.label || item.value);
  }.bind(this))));
});

var _default = /*#__PURE__*/_react.default.memo(PopupWithOutMemo);

exports.default = _default;