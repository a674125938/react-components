"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleItem = exports.ChildItem = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _Checkbox = _interopRequireDefault(require("../../components/Checkbox"));

var _style = require("./style");

var _util = require("./util");

var _excluded = ["value", "onSelect", "ignoreIndent", "selectedMap"],
    _excluded2 = ["value", "onSelect", "ignoreIndent", "selectedMap", "group", "onExpandChange", "loadData", "loaded"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** 展开 icon */
var ExpandIcon = function ExpandIcon(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var expanded = _ref.expanded;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(_style.expandCls, expanded && _style.expandedCls)
  });
}.bind(void 0);

var MemoExpandIcon = /*#__PURE__*/_react.default.memo(ExpandIcon);
/** 单缩进 */


var Indent = function Indent(_ref2) {
  (0, _newArrowCheck2.default)(this, _this);
  var ignore = _ref2.ignore,
      latest = _ref2.latest;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(_style.indentCls, ignore ? _style.outerIndentCls : _style.innerIndentCls, latest && _style.latestCls)
  });
}.bind(void 0);

var MemoIndent = /*#__PURE__*/_react.default.memo(Indent);
/** 缩进 */


var Indents = function Indents(_ref3) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var depth = _ref3.depth,
      ignoreIndent = _ref3.ignoreIndent,
      isLatest = _ref3.isLatest;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, new Array(depth).fill(null).map(function (v, i) {
    (0, _newArrowCheck2.default)(this, _this2);
    return /*#__PURE__*/_react.default.createElement(MemoIndent, {
      key: i,
      ignore: ignoreIndent === null || ignoreIndent === void 0 ? void 0 : ignoreIndent.includes(i + 1),
      latest: isLatest && i === depth - 1
    });
  }.bind(this)));
}.bind(void 0);

var MemoIndents = /*#__PURE__*/_react.default.memo(Indents);

var stopPropagation = function stopPropagation(e) {
  (0, _newArrowCheck2.default)(this, _this);
  e.stopPropagation();
}.bind(void 0);

/** 单项 ui */
var ItemView = function ItemView(_ref4) {
  var _this3 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var title = _ref4.title,
      disabled = _ref4.disabled,
      expandAble = _ref4.expandAble,
      expanded = _ref4.expanded,
      onExpandChange = _ref4.onExpandChange,
      multiple = _ref4.multiple,
      selected = _ref4.selected,
      indeterminate = _ref4.indeterminate,
      onSelect = _ref4.onSelect,
      depth = _ref4.depth,
      isLatest = _ref4.isLatest,
      ignoreIndent = _ref4.ignoreIndent,
      loading = _ref4.loading,
      value = _ref4.value;
  var onBodyClick = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this3);

    if (loading) {
      return;
    }

    if (expandAble) {
      onExpandChange === null || onExpandChange === void 0 ? void 0 : onExpandChange(!expanded);
      return;
    }

    if (!disabled && !multiple) {
      onSelect === null || onSelect === void 0 ? void 0 : onSelect(true);
    }
  }.bind(this), [disabled, expandAble, expanded, multiple, onExpandChange, onSelect, loading]);
  var finalIgnoreIndent = ignoreIndent ? JSON.parse(ignoreIndent) : [];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_style.itemCls, !expandAble && selected && _style.selectedCls, disabled && _style.disabledCls),
    onClick: onBodyClick,
    "data-tree-item-value": value
  }, /*#__PURE__*/_react.default.createElement(MemoIndents, {
    depth: depth,
    ignoreIndent: finalIgnoreIndent,
    isLatest: isLatest
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.wrapCls
  }, loading ? /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
    type: "ring-loading",
    spin: true,
    className: _style.loadingIconCls
  }) : expandAble ? /*#__PURE__*/_react.default.createElement(MemoExpandIcon, {
    expanded: expanded
  }) : /*#__PURE__*/_react.default.createElement("span", {
    className: _style.expandPlaceholderCls
  }), multiple && /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    disabled: disabled,
    checked: selected,
    indeterminate: indeterminate,
    onClick: stopPropagation,
    onChange: onSelect
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _style.contentCls
  }, title)));
}.bind(void 0);

ItemView.propTypes = {
  title: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  depth: _propTypes.default.number.isRequired,
  isLatest: _propTypes.default.bool,
  multiple: _propTypes.default.bool
};

var MemoItemView = /*#__PURE__*/_react.default.memo(ItemView); // 项


var ChildItem = function ChildItem(_ref5) {
  var _this4 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var value = _ref5.value,
      onSelect = _ref5.onSelect,
      ignoreIndent = _ref5.ignoreIndent,
      selectedMap = _ref5.selectedMap,
      rest = (0, _objectWithoutProperties2.default)(_ref5, _excluded);
  var checked = selectedMap[value];
  var onCheckChange = (0, _react.useCallback)(function (checked) {
    (0, _newArrowCheck2.default)(this, _this4);
    onSelect((0, _defineProperty2.default)({}, value, checked));
  }.bind(this), [value, onSelect]);
  return /*#__PURE__*/_react.default.createElement(MemoItemView, (0, _extends2.default)({
    selected: !!checked,
    onSelect: onCheckChange,
    ignoreIndent: JSON.stringify(ignoreIndent),
    value: value
  }, rest));
}.bind(void 0);

ChildItem.propTypes = {
  title: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  depth: _propTypes.default.number.isRequired,
  isLatest: _propTypes.default.bool,
  multiple: _propTypes.default.bool
};

var MemoChildItem = /*#__PURE__*/_react.default.memo(ChildItem); // 标题项


exports.ChildItem = MemoChildItem;

var TitleItem = function TitleItem(_ref6) {
  var _this5 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var value = _ref6.value,
      onSelect = _ref6.onSelect,
      ignoreIndent = _ref6.ignoreIndent,
      selectedMap = _ref6.selectedMap,
      group = _ref6.group,
      onExpandChange = _ref6.onExpandChange,
      loadData = _ref6.loadData,
      loaded = _ref6.loaded,
      rest = (0, _objectWithoutProperties2.default)(_ref6, _excluded2);

  var _ref7 = group[value] || {},
      values = _ref7.keys,
      disabledValues = _ref7.disabledKeys;

  var selectedStatus = (0, _util.getSelectedStatus)(values, selectedMap, disabledValues);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var onCheckChange = (0, _react.useCallback)(function (checked) {
    var _this6 = this;

    (0, _newArrowCheck2.default)(this, _this5);
    var selectedMap = {};
    values === null || values === void 0 ? void 0 : values.forEach(function (v) {
      (0, _newArrowCheck2.default)(this, _this6);
      selectedMap[v] = checked;
    }.bind(this));
    onSelect(selectedMap);
  }.bind(this), [values, onSelect]);
  var checkProps = selectedStatus === 'NONE' ? {
    selected: false
  } : selectedStatus === 'ALL' ? {
    selected: true
  } : {
    indeterminate: true,
    selected: false
  };
  var onExpandHandler = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(expanded) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(expanded && loadData && !loaded)) {
                _context.next = 5;
                break;
              }

              setLoading(true);
              _context.next = 4;
              return loadData(value);

            case 4:
              setLoading(false);

            case 5:
              onExpandChange === null || onExpandChange === void 0 ? void 0 : onExpandChange(expanded);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref8.apply(this, arguments);
    };
  }(), [loadData, onExpandChange, value, loaded]);
  return /*#__PURE__*/_react.default.createElement(MemoItemView, (0, _extends2.default)({}, checkProps, {
    onSelect: onCheckChange,
    expandAble: true,
    ignoreIndent: JSON.stringify(ignoreIndent),
    onExpandChange: onExpandHandler,
    loading: loading,
    value: value
  }, rest));
}.bind(void 0);

TitleItem.propTypes = {
  title: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  depth: _propTypes.default.number.isRequired,
  isLatest: _propTypes.default.bool,
  multiple: _propTypes.default.bool
};

var MemoTitleItem = /*#__PURE__*/_react.default.memo(TitleItem);

exports.TitleItem = MemoTitleItem;