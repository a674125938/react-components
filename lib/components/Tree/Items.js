"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _Collapse = require("../../components/Collapse");

var _Item = require("./Item");

var _this = void 0;

/** 项 */
var Items = function Items(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var children = _ref.children,
      depth = _ref.depth,
      _ref$ignoreIndent = _ref.ignoreIndent,
      ignoreIndent = _ref$ignoreIndent === void 0 ? [] : _ref$ignoreIndent,
      disabled = _ref.disabled,
      multiple = _ref.multiple,
      onSelect = _ref.onSelect,
      selectedMap = _ref.selectedMap,
      group = _ref.group,
      loadData = _ref.loadData;
  if (!children || !children.length) return null;
  var lastIndex = children.length - 1;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children.map(function (item, index) {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    var isLatest = lastIndex === index;
    var children = item.children,
        value = item.key,
        itemDisabled = item.disabled,
        title = item.title,
        isParent = item.isParent;
    var finalDisabled = disabled || !!itemDisabled;

    if (children || isParent) {
      return /*#__PURE__*/_react.default.createElement(_Collapse.Panel, {
        key: value,
        title: function (_ref2) {
          (0, _newArrowCheck2.default)(this, _this3);
          var toggle = _ref2.toggle,
              open = _ref2.open;
          return /*#__PURE__*/_react.default.createElement(_Item.TitleItem, {
            value: value,
            title: title,
            onExpandChange: toggle,
            depth: depth,
            isLatest: isLatest,
            ignoreIndent: ignoreIndent,
            expanded: open,
            onSelect: onSelect,
            multiple: multiple,
            selectedMap: selectedMap,
            group: group,
            disabled: finalDisabled,
            loadData: loadData,
            loaded: !!children
          });
        }.bind(this),
        panelKey: item.key,
        ignoreUpdateWhenClose: true
      }, /*#__PURE__*/_react.default.createElement(MemoItems, {
        depth: depth + 1,
        ignoreIndent: isLatest ? ignoreIndent.concat(depth) : ignoreIndent,
        selectedMap: selectedMap,
        group: group,
        onSelect: onSelect,
        disabled: finalDisabled,
        multiple: multiple,
        loadData: loadData
      }, children));
    }

    return /*#__PURE__*/_react.default.createElement(_Item.ChildItem, {
      key: value,
      value: value,
      title: title,
      depth: depth,
      isLatest: isLatest,
      ignoreIndent: ignoreIndent,
      onSelect: onSelect,
      multiple: multiple,
      selectedMap: selectedMap,
      disabled: finalDisabled
    });
  }.bind(this)));
}.bind(void 0);

var MemoItems = /*#__PURE__*/_react.default.memo(Items);

var _default = MemoItems;
exports.default = _default;