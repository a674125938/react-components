"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Popover = _interopRequireDefault(require("../../components/Popover"));

var _Tooltip = _interopRequireDefault(require("../../components/Tooltip"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _Search = require("../../sharedComponents/Search");

var _usePopoverConfig = _interopRequireDefault(require("../../hooks/usePopoverConfig"));

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _useSearch2 = _interopRequireDefault(require("../../hooks/useSearch"));

var _style = require("./style");

var _Cascade = _interopRequireWildcard(require("./Cascade"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _excluded = ["value", "inputing"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PopupWrapWithoutMemo = function PopupWrapWithoutMemo(props) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var handleFocus = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    e.preventDefault();
  }.bind(this), []);
  return /*#__PURE__*/_react.default.createElement(_style.SPopup, (0, _extends2.default)({}, props, {
    onMouseDown: handleFocus
  }));
}.bind(void 0);

var PopupWrap = /*#__PURE__*/_react.default.memo(PopupWrapWithoutMemo);

var StaticInputWithoutMemo = /*#__PURE__*/_react.default.forwardRef(function StaticInput(_ref, ref) {
  var _this3 = this;

  var value = _ref.value,
      inputing = _ref.inputing,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var inputRef = (0, _react.useRef)(null);
  var updateVisible = (0, _react.useCallback)(function (visible) {
    (0, _newArrowCheck2.default)(this, _this3);

    if (inputing) {
      setVisible(false);
    } else if (!visible) {
      setVisible(false);
    } else {
      var _inputRef$current;

      var input = (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.input;
      setVisible(input ? (input === null || input === void 0 ? void 0 : input.scrollWidth) > (input === null || input === void 0 ? void 0 : input.clientWidth) : false);
    }
  }.bind(this), [inputing]);
  (0, _react.useImperativeHandle)(ref, function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return {
      inputRef: inputRef
    };
  }.bind(this), []);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this3);

    if (inputing) {
      setVisible(false);
    }
  }.bind(this), [inputing, value]);
  var handleVisibleChange = (0, _react.useCallback)(function (visible) {
    (0, _newArrowCheck2.default)(this, _this3);
    updateVisible(visible);
  }.bind(this), [updateVisible]);
  return /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    visible: visible,
    onVisibleChange: handleVisibleChange,
    popup: value,
    placement: "topLeft",
    arrow: false
  }, /*#__PURE__*/_react.default.createElement(_Search.SearchInput, (0, _extends2.default)({}, rest, {
    value: value,
    ref: inputRef
  })));
});

var StaticInput = /*#__PURE__*/_react.default.memo(StaticInputWithoutMemo);

var getValueStringFromDataSource = function getValueStringFromDataSource(value, dataSource) {
  var _this4 = this;

  (0, _newArrowCheck2.default)(this, _this);
  if (!(value !== null && value !== void 0 && value.length)) return '';
  var separator = '/';
  if (!dataSource) return value.join(separator);
  var tmpItems = dataSource;
  return value.map(function (key) {
    var _this5 = this;

    (0, _newArrowCheck2.default)(this, _this4);
    if (!tmpItems) return key;
    var item = tmpItems.find(function (item) {
      (0, _newArrowCheck2.default)(this, _this5);
      return item.key === key;
    }.bind(this));
    tmpItems = item === null || item === void 0 ? void 0 : item.children;

    if (!item) {
      console.error("Can't find info for value ".concat(key));
      return key;
    }

    return item.title;
  }.bind(this)).join(separator);
}.bind(void 0);

var popoverAlign = {
  points: ['tl', 'bl'],
  overflow: {
    adjustX: 0,
    adjustY: 1
  },
  offset: [0, 5],
  targetOffset: [0, 0]
};
var defaultDataSourceAfterSearch = [];

var Cascader = function Cascader(_ref2) {
  var _this6 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var dataSource = _ref2.dataSource,
      _value = _ref2.value,
      defaultValue = _ref2.defaultValue,
      _onChange = _ref2.onChange,
      disabled = _ref2.disabled,
      size = _ref2.size,
      search = _ref2.search,
      clearable = _ref2.clearable,
      placeholder = _ref2.placeholder,
      loadData = _ref2.loadData,
      status = _ref2.status,
      popoverProps = _ref2.popoverProps;

  var _useUncontrolled = (0, _useUncontrolled3.default)(_value, defaultValue, _onChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      value = _useUncontrolled2[0],
      onChange = _useUncontrolled2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      searchValue = _useState4[0],
      setSearchValue = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      visible = _useState6[0],
      setVisible = _useState6[1];

  var _useState7 = (0, _react.useState)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    return value ? value.slice(0, value.length - 1) : [];
  }.bind(this)),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      expandedValue = _useState8[0],
      setExpandedValue = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      focusing = _useState10[0],
      setFocusing = _useState10[1];

  var locale = (0, _useLocale.default)(_zh_CN.default, 'Cascader');
  var searchAble = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    return search;
  }.bind(this), [search]);
  var inputRef = (0, _react.useRef)(null);
  var handleInput = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this6);
    setSearchValue(e.target.value);
  }.bind(this), []);
  var handleVisibleChange = (0, _react.useCallback)(function (visible) {
    (0, _newArrowCheck2.default)(this, _this6);
    return setVisible(visible);
  }.bind(this), []);
  var handleSelect = (0, _react.useCallback)(function (v) {
    var _inputRef$current2, _inputRef$current2$in, _inputRef$current2$in2, _inputRef$current2$in3;

    (0, _newArrowCheck2.default)(this, _this6);
    onChange === null || onChange === void 0 ? void 0 : onChange(v);
    setSearchValue('');
    setVisible(false);
    (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : (_inputRef$current2$in = _inputRef$current2.inputRef) === null || _inputRef$current2$in === void 0 ? void 0 : (_inputRef$current2$in2 = _inputRef$current2$in.current) === null || _inputRef$current2$in2 === void 0 ? void 0 : (_inputRef$current2$in3 = _inputRef$current2$in2.input) === null || _inputRef$current2$in3 === void 0 ? void 0 : _inputRef$current2$in3.blur();
  }.bind(this), [onChange]);
  var handleExpand = (0, _react.useCallback)(function (expandedValue) {
    (0, _newArrowCheck2.default)(this, _this6);
    setExpandedValue(expandedValue);
  }.bind(this), []);
  var handleFocus = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    setFocusing(true);
  }.bind(this), []);
  var handleBlur = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    setFocusing(false);
    setSearchValue('');
  }.bind(this), []);
  var valueString = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    return getValueStringFromDataSource(value, dataSource);
  }.bind(this), [dataSource, value]);
  var inputFocused = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    return searchAble && focusing;
  }.bind(this), [focusing, searchAble]);
  var inputValue = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    return inputFocused ? searchValue : valueString;
  }.bind(this), [inputFocused, searchValue, valueString]);
  var inputPlaceholder = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    return inputFocused ? valueString : placeholder || locale.placeholder;
  }.bind(this), [inputFocused, valueString, placeholder, locale.placeholder]);
  var popoverConfigProps = (0, _usePopoverConfig.default)();

  var _useSearch = (0, _useSearch2.default)({
    dataSource: dataSource,
    searchValue: searchValue,
    defaultDataSourceAfterSearch: defaultDataSourceAfterSearch,
    handleSearch: (0, _typeof2.default)(search) === 'object' ? search === null || search === void 0 ? void 0 : search.handleSearch : undefined
  }),
      dataSourceAfterSearch = _useSearch.dataSource,
      searchLoading = _useSearch.loading,
      searchCount = _useSearch.count,
      searchError = _useSearch.error;

  var handleClear = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    onChange([]);
  }.bind(this), [onChange]);
  var inputProps = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this6);

    if (searchAble && focusing) {
      return {
        count: searchCount,
        status: 'default'
      };
    }

    return {
      prefix: null,
      suffix: /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        type: visible ? 'arrow-up' : 'arrow-down'
      }),
      onClear: handleClear,
      clearable: clearable,
      status: status
    };
  }.bind(this), [clearable, focusing, handleClear, searchAble, searchCount, status, visible]);
  return /*#__PURE__*/_react.default.createElement(_style.SWrap, {
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(_Popover.default, (0, _extends2.default)({}, popoverConfigProps, popoverProps, {
    popup: /*#__PURE__*/_react.default.createElement(PopupWrap, null, searchValue ? /*#__PURE__*/_react.default.createElement(_Cascade.CascadeSearchResult, {
      dataSource: dataSourceAfterSearch,
      loading: searchLoading,
      empty: searchCount === 0,
      error: searchError,
      onChange: handleSelect,
      onExpand: handleExpand
    }) : /*#__PURE__*/_react.default.createElement(_Cascade.default, {
      dataSource: dataSource,
      value: value,
      onChange: handleSelect,
      expandedValue: expandedValue,
      onExpand: handleExpand,
      loadData: loadData
    })),
    trigger: [],
    showAction: ['click', 'focus'],
    hideAction: ['blur'],
    visible: visible,
    onVisibleChange: handleVisibleChange,
    forceAlignWhenScroll: false,
    forceAlignWhenUpdate: false,
    align: popoverAlign
  }), /*#__PURE__*/_react.default.createElement(StaticInput, (0, _extends2.default)({
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleInput,
    value: inputValue,
    placeholder: inputPlaceholder,
    className: _style.inputCls,
    disabled: disabled,
    readOnly: !searchAble,
    inputing: visible && focusing,
    size: size,
    ref: inputRef
  }, inputProps))));
}.bind(void 0);

Cascader.propTypes = {
  dataSource: _propTypes.default.array,
  value: _propTypes.default.array,
  defaultValue: _propTypes.default.array,
  onChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  search: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    handleSearch: _propTypes.default.func
  })]),
  clearable: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  popoverProps: _propTypes.default.objectOf(_propTypes.default.any)
};

var _default = /*#__PURE__*/_react.default.memo(Cascader);

exports.default = _default;