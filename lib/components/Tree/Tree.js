"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _hooks = require("../../components/Collapse/hooks");

var _CollapseContext = _interopRequireDefault(require("../../components/Collapse/CollapseContext"));

var _useUncontrolled7 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _Search = _interopRequireWildcard(require("../../sharedComponents/Search"));

var _noop = _interopRequireDefault(require("../../utils/noop"));

var _each = _interopRequireDefault(require("../../utils/each"));

var _Items = _interopRequireDefault(require("./Items"));

var _style = require("./style");

var _excluded = ["dataSource", "search", "collapseProps", "selectedKeys", "onChange", "defaultSelectedKeys"],
    _excluded2 = ["openKeys", "defaultOpenKeys", "onChange"],
    _excluded3 = ["search"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var groupDataSource = function groupDataSource(dataSource) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var group = {};
  var validKeys = [];
  var disabledKeys = [];
  if (!dataSource) dataSource = [];

  var _groupData2 = function _groupData(children, disabled) {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    var keys = [];
    var disabledKeys = [];
    children.forEach(function (child) {
      (0, _newArrowCheck2.default)(this, _this3);
      var key = child.key,
          _disabled = child.disabled,
          children = child.children;
      var finalDisabled = disabled || _disabled;

      if (children && children.length) {
        var _groupData3 = _groupData2(children, finalDisabled),
            _groupData4 = (0, _slicedToArray2.default)(_groupData3, 2),
            _keys = _groupData4[0],
            _disabledKeys = _groupData4[1];

        group[key] = {
          keys: _keys,
          disabledKeys: _disabledKeys
        };
        keys = keys.concat(_keys);
        disabledKeys = disabledKeys.concat(_disabledKeys);
      } else {
        if (finalDisabled) {
          disabledKeys.push(key);
          disabledKeys.push(key);
        } else {
          keys.push(key);
          validKeys.push(key);
        }
      }
    }.bind(this));
    return [keys, disabledKeys];
  }.bind(this);

  _groupData2(dataSource);

  return [group, validKeys, disabledKeys];
}.bind(void 0);

var keysToMap = function keysToMap() {
  var _this4 = this;

  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var result = {};
  keys.forEach(function (key) {
    (0, _newArrowCheck2.default)(this, _this4);
    result[key] = true;
  }.bind(this));
  return result;
};

var defaultSearchHandle = function defaultSearchHandle(searchValue) {
  var _this5 = this;

  var dataSource = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!searchValue) return {
    dataSource: dataSource,
    count: null
  };
  var count = 0;
  var finalExpandedKeyMap = {};

  var _handle = function handle(children) {
    var _this6 = this;

    (0, _newArrowCheck2.default)(this, _this5);
    var childrenHit = false;
    var newChildren = [];
    children.forEach(function (child) {
      (0, _newArrowCheck2.default)(this, _this6);
      var title = child.title,
          key = child.key,
          children = child.children;
      var override = {};
      var searchHit = false;

      if (typeof title === 'string') {
        var index = title.indexOf(searchValue);
        searchHit = index >= 0;

        if (searchHit) {
          count++;
          var beforeStr = title.substr(0, index);
          var afterStr = title.substr(index + searchValue.length);
          override.title = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, beforeStr, /*#__PURE__*/_react.default.createElement(_Search.Highlight, null, searchValue), afterStr);
        }
      }

      if (children) {
        var _handle2 = _handle(children),
            _handle3 = (0, _slicedToArray2.default)(_handle2, 2),
            _children = _handle3[0],
            _searchHit = _handle3[1];

        override.children = _children;
        searchHit = _searchHit || searchHit;
        if (_searchHit) finalExpandedKeyMap[key] = 1;
      }

      if (searchHit) {
        childrenHit = true;
        newChildren.push(_objectSpread(_objectSpread({}, child), override));
      }
    }.bind(this));
    return [newChildren, childrenHit];
  }.bind(this);

  var dataSourceAfterSearch = _handle(dataSource)[0];

  return {
    dataSource: dataSourceAfterSearch,
    count: count,
    openKeys: Object.keys(finalExpandedKeyMap)
  };
};

var CommonTree = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _this7 = this;

  (0, _newArrowCheck2.default)(this, _this);

  var dataSource = _ref.dataSource,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      _selectedKeys = _ref.selectedKeys,
      defaultSelectedKeys = _ref.defaultSelectedKeys,
      _ref$onChange = _ref.onChange,
      _onChange = _ref$onChange === void 0 ? _noop.default : _ref$onChange,
      onDiff = _ref.onDiff,
      loadData = _ref.loadData,
      collapseProps = _ref.collapseProps;

  var _useState = (0, _react.useState)(function () {
    (0, _newArrowCheck2.default)(this, _this7);
    return groupDataSource(dataSource);
  }.bind(this)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      _useState2$ = (0, _slicedToArray2.default)(_useState2[0], 3),
      group = _useState2$[0],
      validKeys = _useState2$[1],
      disabledKeys = _useState2$[2],
      setGroup = _useState2[1];

  var _useUncontrolled = (0, _useUncontrolled7.default)(_selectedKeys, defaultSelectedKeys || [], _onChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      selectedKeys = _useUncontrolled2[0],
      onChange = _useUncontrolled2[1];

  var _useState3 = (0, _react.useState)(function () {
    (0, _newArrowCheck2.default)(this, _this7);
    return keysToMap(selectedKeys);
  }.bind(this)),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      selectedMap = _useState4[0],
      setSelectedMap = _useState4[1];

  var stateRef = (0, _react.useRef)({
    selectedMap: selectedMap,
    selectedKeys: selectedKeys
  });
  var handleDiff = (0, _react.useCallback)(function (newSelectedKeys) {
    (0, _newArrowCheck2.default)(this, _this7);
    if (!onDiff) return;
    var selectKeys = [];
    var unselectKeys = [];
    var newSelectedMap = keysToMap(newSelectedKeys);
    var validMap = keysToMap(validKeys);

    for (var newKey in newSelectedMap) {
      // don't in dataSource, ignore
      if (!(newKey in validMap)) continue;

      if (!(newKey in selectedMap)) {
        selectKeys.push(newKey);
      }
    }

    for (var oldKey in selectedMap) {
      // don't in dataSource, ignore
      if (!(oldKey in validMap)) continue;

      if (!(oldKey in newSelectedMap)) {
        unselectKeys.push(oldKey);
      }
    }

    onDiff({
      select: selectKeys,
      unselect: unselectKeys
    });
  }.bind(this), [validKeys, onDiff, selectedMap]);
  var finalOnChange = (0, _react.useCallback)(function (selectedKeys) {
    (0, _newArrowCheck2.default)(this, _this7);
    onChange(selectedKeys);
    handleDiff(selectedKeys);
  }.bind(this), [handleDiff, onChange]);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this7);
    setGroup(groupDataSource(dataSource));
  }.bind(this), [dataSource]);
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this7);
    var selectedMap = keysToMap(selectedKeys);
    stateRef.current = {
      selectedMap: selectedMap,
      selectedKeys: selectedKeys
    };
    setSelectedMap(selectedMap);
  }.bind(this), [selectedKeys]);
  (0, _react.useImperativeHandle)(ref, function () {
    var _this8 = this;

    (0, _newArrowCheck2.default)(this, _this7);
    return {
      selectAll: function selectAll() {
        var _this9 = this;

        (0, _newArrowCheck2.default)(this, _this8);

        if (!multiple) {
          console.error("Can't call selectAll for single select Tree");
          return;
        }

        var disabledSelectedKeys = [];
        disabledKeys.forEach(function (v) {
          (0, _newArrowCheck2.default)(this, _this9);
          if (selectedMap[v]) disabledSelectedKeys.push(v);
        }.bind(this));
        var selectedKeys = [].concat((0, _toConsumableArray2.default)(validKeys), disabledSelectedKeys);
        finalOnChange(selectedKeys);
      }.bind(this),
      unSelectAll: function unSelectAll() {
        var _this10 = this;

        (0, _newArrowCheck2.default)(this, _this8);
        var disabledSelectedKeys = [];
        disabledKeys.forEach(function (v) {
          (0, _newArrowCheck2.default)(this, _this10);
          if (selectedMap[v]) disabledSelectedKeys.push(v);
        }.bind(this));
        finalOnChange([].concat(disabledSelectedKeys));
      }.bind(this),
      inverse: function inverse() {
        var _this11 = this;

        (0, _newArrowCheck2.default)(this, _this8);

        if (!multiple) {
          console.error("Can't call inverse for single select Tree");
          return;
        }

        var disabledSelectedKeys = [];
        disabledKeys.forEach(function (v) {
          (0, _newArrowCheck2.default)(this, _this11);
          if (selectedMap[v]) disabledSelectedKeys.push(v);
        }.bind(this));
        var selectedKeys = [].concat(disabledSelectedKeys);
        validKeys.forEach(function (v) {
          (0, _newArrowCheck2.default)(this, _this11);

          if (!selectedMap[v]) {
            selectedKeys.push(v);
          }
        }.bind(this));
        finalOnChange(selectedKeys);
      }.bind(this)
    };
  }.bind(this), [multiple, disabledKeys, validKeys, finalOnChange, selectedMap]);
  var onSelect = (0, _react.useCallback)(function (_selectedMap) {
    (0, _newArrowCheck2.default)(this, _this7);
    var selectedKeys;

    if (multiple) {
      var _selectedMap2 = stateRef.current.selectedMap;

      var clonedMap = _objectSpread({}, _selectedMap2);

      for (var key in _selectedMap) {
        var _v = _selectedMap[key];

        if (_v) {
          clonedMap[key] = true;
        } else {
          delete clonedMap[key];
        }
      }

      selectedKeys = Object.keys(clonedMap);
    } else {
      for (var _key in _selectedMap) {
        var _v2 = _selectedMap[_key];

        if (_v2) {
          selectedKeys = [_key];
          break;
        }
      }

      if (!selectedKeys) return;
    }

    finalOnChange(selectedKeys);
  }.bind(this), [finalOnChange, multiple]);

  var _useCollapse = (0, _hooks.useCollapse)(collapseProps || {}),
      _useCollapse2 = (0, _slicedToArray2.default)(_useCollapse, 1),
      collapseContext = _useCollapse2[0];

  return /*#__PURE__*/_react.default.createElement(_CollapseContext.default.Provider, {
    value: collapseContext
  }, /*#__PURE__*/_react.default.createElement(_style.STree, {
    disabled: disabled,
    className: (0, _classnames.default)(_style.prefixCls, multiple ? _style.multipleCls : _style.singleCls)
  }, /*#__PURE__*/_react.default.createElement(_Items.default, {
    depth: 0,
    disabled: disabled,
    multiple: multiple,
    onSelect: onSelect,
    group: group,
    selectedMap: selectedMap,
    loadData: loadData
  }, dataSource)));
}.bind(void 0));
var SearchTree = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var _this12 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var dataSource = _ref2.dataSource,
      search = _ref2.search,
      collapseProps = _ref2.collapseProps,
      _selectedKeys = _ref2.selectedKeys,
      _onChange = _ref2.onChange,
      defaultSelectedKeys = _ref2.defaultSelectedKeys,
      rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded);

  var _useState5 = (0, _react.useState)(dataSource),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      dataSourceAfterSearch = _useState6[0],
      setDataSourceAfterSearch = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      searchValue = _useState8[0],
      setSearchValue = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      count = _useState12[0],
      setCount = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      empty = _useState14[0],
      setEmpty = _useState14[1];

  var _useUncontrolled3 = (0, _useUncontrolled7.default)(_selectedKeys, defaultSelectedKeys || [], _onChange),
      _useUncontrolled4 = (0, _slicedToArray2.default)(_useUncontrolled3, 2),
      selectedKeys = _useUncontrolled4[0],
      onChange = _useUncontrolled4[1];

  var _ref3 = collapseProps || {},
      _openKeys = _ref3.openKeys,
      defaultOpenKeys = _ref3.defaultOpenKeys,
      _onOpenKeysChange = _ref3.onChange,
      restCollapseProps = (0, _objectWithoutProperties2.default)(_ref3, _excluded2);

  var _useUncontrolled5 = (0, _useUncontrolled7.default)(_openKeys, defaultOpenKeys || [], _onOpenKeysChange),
      _useUncontrolled6 = (0, _slicedToArray2.default)(_useUncontrolled5, 2),
      openKeys = _useUncontrolled6[0],
      onOpenKeysChange = _useUncontrolled6[1];

  var handleSearch = (0, _react.useCallback)(function (searchValue) {
    (0, _newArrowCheck2.default)(this, _this12);
    setSearchValue(searchValue);
  }.bind(this), []);
  var handleDiff = (0, _react.useCallback)(function (_ref4) {
    var _this13 = this;

    (0, _newArrowCheck2.default)(this, _this12);
    var select = _ref4.select,
        unselect = _ref4.unselect;
    var newSelectedKeysMap = keysToMap(selectedKeys);
    (0, _each.default)(select, function (item) {
      (0, _newArrowCheck2.default)(this, _this13);
      return newSelectedKeysMap[item] = true;
    }.bind(this));
    (0, _each.default)(unselect, function (item) {
      (0, _newArrowCheck2.default)(this, _this13);
      return delete newSelectedKeysMap[item];
    }.bind(this));
    onChange(Object.keys(newSelectedKeysMap));
  }.bind(this), [onChange, selectedKeys]);
  (0, _react.useEffect)(function () {
    var _this14 = this;

    (0, _newArrowCheck2.default)(this, _this12);
    var exited = false;
    (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var handler, _yield$handler, dataSourceAfterSearch, count, openKeys;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (searchValue) {
                _context.next = 6;
                break;
              }

              setDataSourceAfterSearch(dataSource);
              setCount(null);
              setEmpty(false);
              setLoading(false);
              return _context.abrupt("return");

            case 6:
              handler = (0, _typeof2.default)(search) === 'object' && search.handleSearch ? search.handleSearch : defaultSearchHandle;
              setLoading(true);
              _context.next = 10;
              return handler(searchValue, dataSource);

            case 10:
              _yield$handler = _context.sent;
              dataSourceAfterSearch = _yield$handler.dataSource;
              count = _yield$handler.count;
              openKeys = _yield$handler.openKeys;

              if (!exited) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return");

            case 16:
              setLoading(false);
              setDataSourceAfterSearch(dataSourceAfterSearch);
              setCount(count);
              setEmpty(count === 0);

              if (openKeys) {
                onOpenKeysChange(openKeys);
              }

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
    return function () {
      (0, _newArrowCheck2.default)(this, _this14);
      exited = true;
    }.bind(this); // don't update search result when onOpenKeysChange change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }.bind(this), [dataSource, search, searchValue]);
  return /*#__PURE__*/_react.default.createElement(_Search.default, {
    onSearch: handleSearch,
    empty: empty,
    count: count,
    loading: loading
  }, /*#__PURE__*/_react.default.createElement(CommonTree, (0, _extends2.default)({
    dataSource: dataSourceAfterSearch,
    collapseProps: _objectSpread(_objectSpread({}, restCollapseProps), {}, {
      openKeys: openKeys,
      onChange: onOpenKeysChange
    }),
    selectedKeys: selectedKeys,
    onDiff: handleDiff,
    ref: ref
  }, rest)));
}.bind(void 0));
var Tree = /*#__PURE__*/(0, _react.forwardRef)(function (_ref6, ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var search = _ref6.search,
      rest = (0, _objectWithoutProperties2.default)(_ref6, _excluded3);
  // force delete onDiff to avoid developer use onDiff
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete rest['onDiff'];

  if (search) {
    return /*#__PURE__*/_react.default.createElement(SearchTree, (0, _extends2.default)({
      search: search
    }, rest, {
      ref: ref
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement(CommonTree, (0, _extends2.default)({}, rest, {
      ref: ref
    }));
  }
}.bind(void 0));

var _default = /*#__PURE__*/_react.default.memo(Tree);

exports.default = _default;