"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CascadeSearchResult = exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _Notice = _interopRequireDefault(require("../../components/Notice"));

var _VirtualScrollList = _interopRequireDefault(require("../../sharedComponents/VirtualScrollList"));

var _cascade = require("./style/cascade");

var _Items = _interopRequireDefault(require("./Items"));

var _Item = _interopRequireDefault(require("./Item"));

var _CascadeContext = _interopRequireDefault(require("./CascadeContext"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getExpandedItems = function getExpandedItems(dataSource, expandedValue) {
  (0, _newArrowCheck2.default)(this, _this);
  if (!dataSource) return [];
  var tmpItems = dataSource;
  var tmpParents = [];
  var expandedItems = [{
    items: dataSource,
    parents: [].concat(tmpParents)
  }];
  if (!(expandedValue !== null && expandedValue !== void 0 && expandedValue.length)) return expandedItems;

  var _loop = function _loop(i) {
    var _this2 = this;

    var expandedKey = expandedValue[i];

    if (!tmpItems) {
      console.error("ExpandedValue: ".concat(expandedValue, " is invalid."));
      return "break";
    }

    var item = tmpItems.find(function (item) {
      (0, _newArrowCheck2.default)(this, _this2);
      return item.key === expandedKey;
    }.bind(this));

    if (!item) {
      console.error("ExpandedValue: ".concat(expandedValue, " is invalid."));
      return "break";
    }

    tmpItems = item.children;
    tmpParents.push(item);
    expandedItems.push({
      items: item.children,
      parents: [].concat(tmpParents)
    });
  };

  for (var i = 0; i < expandedValue.length; i++) {
    var _ret = _loop(i);

    if (_ret === "break") break;
  }

  return expandedItems;
}.bind(void 0);

var flat = function flat() {
  var _this3 = this;

  var dataSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var result = [];

  var isKeyEqual = function isKeyEqual(key, match) {
    (0, _newArrowCheck2.default)(this, _this3);
    return key != null && key === match;
  }.bind(this);

  var _run = function run(group, parents, parentDisabled, parentSelected) {
    var _this4 = this;

    (0, _newArrowCheck2.default)(this, _this3);
    group.forEach(function (item) {
      (0, _newArrowCheck2.default)(this, _this4);
      var children = item.children,
          isParent = item.isParent,
          key = item.key;

      if (children) {
        _run(children, [].concat((0, _toConsumableArray2.default)(parents), [item]), parentDisabled || !!item.disabled, parentSelected && isKeyEqual(key, value === null || value === void 0 ? void 0 : value[parents.length]));
      } else if (isParent) {
        return;
      } else {
        result.push({
          item: item,
          parents: parents,
          parentDisabled: parentDisabled,
          selected: parentSelected && isKeyEqual(key, value === null || value === void 0 ? void 0 : value[value.length - 1])
        });
      }
    }.bind(this));
  }.bind(this);

  _run(dataSource, [], false, true);

  return result;
};

var Wrapper = function Wrapper(_ref) {
  var _this5 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var onChange = _ref.onChange,
      onExpand = _ref.onExpand,
      children = _ref.children;
  var expandItem = (0, _react.useCallback)(function (expandedKeys) {
    (0, _newArrowCheck2.default)(this, _this5);
    onExpand === null || onExpand === void 0 ? void 0 : onExpand(expandedKeys);
  }.bind(this), [onExpand]);
  var selectItem = (0, _react.useCallback)(function (selectedKeys) {
    (0, _newArrowCheck2.default)(this, _this5);
    var parentKeys = selectedKeys.slice(0, selectedKeys.length - 1);
    onExpand === null || onExpand === void 0 ? void 0 : onExpand(parentKeys);
    onChange === null || onChange === void 0 ? void 0 : onChange(selectedKeys);
  }.bind(this), [onChange, onExpand]);
  return /*#__PURE__*/_react.default.createElement(_CascadeContext.default.Provider, {
    value: {
      expandItem: expandItem,
      selectItem: selectItem
    }
  }, /*#__PURE__*/_react.default.createElement(_cascade.SCascade, null, children));
}.bind(void 0);

var Cascade = function Cascade(_ref2) {
  var _this6 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var dataSource = _ref2.dataSource,
      value = _ref2.value,
      onChange = _ref2.onChange,
      expandedValue = _ref2.expandedValue,
      onExpand = _ref2.onExpand,
      loadData = _ref2.loadData;
  var locale = (0, _useLocale.default)(_zh_CN.default, 'Cascader');
  var expandedItems = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    return getExpandedItems(dataSource, expandedValue);
  }.bind(this), [dataSource, expandedValue]);

  if (!(dataSource !== null && dataSource !== void 0 && dataSource.length)) {
    return /*#__PURE__*/_react.default.createElement(_cascade.SCascade, null, /*#__PURE__*/_react.default.createElement("div", {
      className: _cascade.emptyCls
    }, locale.emptyTip));
  }

  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    onChange: onChange,
    onExpand: onExpand
  }, expandedItems.map(function (_ref3, index) {
    var _this7 = this;

    (0, _newArrowCheck2.default)(this, _this6);
    var items = _ref3.items,
        parents = _ref3.parents;
    return [index > 0 ? /*#__PURE__*/_react.default.createElement("div", {
      className: _cascade.dividerCls,
      key: "divider-".concat(index)
    }) : null, /*#__PURE__*/_react.default.createElement(_Items.default, {
      key: index == 0 ? '__root-items__' : expandedValue === null || expandedValue === void 0 ? void 0 : expandedValue[index - 1],
      items: items,
      selectedKey: value === null || value === void 0 ? void 0 : value[index],
      expandedKey: expandedValue === null || expandedValue === void 0 ? void 0 : expandedValue[index],
      parents: parents,
      disabled: parents.some(function (parent) {
        (0, _newArrowCheck2.default)(this, _this7);
        return parent.disabled;
      }.bind(this)),
      loadData: loadData
    })];
  }.bind(this)));
}.bind(void 0);

var KeyFragment = function KeyFragment(_ref4) {
  (0, _newArrowCheck2.default)(this, _this);
  var children = _ref4.children;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
}.bind(void 0);

var CascadeSearchResult = /*#__PURE__*/_react.default.memo(function CascadeSearchResult(_ref5) {
  var _this8 = this;

  var dataSource = _ref5.dataSource,
      value = _ref5.value,
      loading = _ref5.loading,
      empty = _ref5.empty,
      error = _ref5.error,
      onChange = _ref5.onChange,
      onExpand = _ref5.onExpand;
  var items = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this8);
    return flat(dataSource, value);
  }.bind(this), [dataSource, value]);
  var locale = (0, _useLocale.default)(_zh_CN.default, 'Cascader');
  var renderItems = (0, _react.useMemo)(function () {
    var _this9 = this;

    (0, _newArrowCheck2.default)(this, _this8);
    return items.map(function (_ref6) {
      var _this10 = this;

      (0, _newArrowCheck2.default)(this, _this9);
      var item = _ref6.item,
          parents = _ref6.parents,
          parentDisabled = _ref6.parentDisabled,
          selected = _ref6.selected;
      var value = item.key,
          itemDisabled = item.disabled;
      var finalDisabled = parentDisabled || itemDisabled;
      var finalTitle = [].concat((0, _toConsumableArray2.default)(parents), [item]).map(function (item, index) {
        (0, _newArrowCheck2.default)(this, _this10);
        return [index === 0 ? null : '/', /*#__PURE__*/_react.default.createElement(KeyFragment, {
          key: index
        }, item.title)];
      }.bind(this));
      return /*#__PURE__*/_react.default.createElement(_Item.default, {
        key: value,
        value: value,
        title: finalTitle,
        selected: selected,
        disabled: finalDisabled,
        parents: parents
      });
    }.bind(this));
  }.bind(this), [items]);
  return /*#__PURE__*/_react.default.createElement(_Loading.default, {
    loading: loading
  }, /*#__PURE__*/_react.default.createElement(Wrapper, {
    onChange: onChange,
    onExpand: onExpand
  }, error ? /*#__PURE__*/_react.default.createElement("div", {
    className: _cascade.errorCls
  }, /*#__PURE__*/_react.default.createElement(_Notice.default, {
    styleType: "error",
    closable: false
  }, error.message)) : empty ? /*#__PURE__*/_react.default.createElement("div", {
    className: _cascade.emptyCls
  }, locale.emptyTip) : /*#__PURE__*/_react.default.createElement(_VirtualScrollList.default, {
    height: 180,
    className: _cascade.itemsCls
  }, renderItems)));
});

exports.CascadeSearchResult = CascadeSearchResult;

var _default = /*#__PURE__*/_react.default.memo(Cascade);

exports.default = _default;