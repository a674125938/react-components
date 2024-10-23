"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _attrs2 = require("../../utils/attrs");

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _cascade = require("./style/cascade");

var _CascadeContext = _interopRequireDefault(require("./CascadeContext"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Item = function Item(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var title = _ref.title,
      value = _ref.value,
      expandAble = _ref.expandAble,
      expanded = _ref.expanded,
      selected = _ref.selected,
      disabled = _ref.disabled,
      parents = _ref.parents;
  var attributes = (0, _react.useMemo)(function () {
    var _attrs;

    (0, _newArrowCheck2.default)(this, _this2);
    return (0, _attrs2.attrs)((_attrs = {}, (0, _defineProperty2.default)(_attrs, _cascade.expandedAttr, expanded), (0, _defineProperty2.default)(_attrs, _cascade.selectedAttr, selected), (0, _defineProperty2.default)(_attrs, _cascade.valueAttr, value), (0, _defineProperty2.default)(_attrs, "disabled", disabled), _attrs));
  }.bind(this), [disabled, expanded, selected, value]);

  var _useContext = (0, _react.useContext)(_CascadeContext.default),
      expandItem = _useContext.expandItem,
      selectItem = _useContext.selectItem;

  var handleClick = (0, _react.useCallback)(function () {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    if (disabled) return;
    var parentKeys = (parents === null || parents === void 0 ? void 0 : parents.map(function (parent) {
      (0, _newArrowCheck2.default)(this, _this3);
      return parent.key;
    }.bind(this))) || [];
    expandAble ? expandItem([].concat((0, _toConsumableArray2.default)(parentKeys), [value])) : selectItem([].concat((0, _toConsumableArray2.default)(parentKeys), [value]));
  }.bind(this), [disabled, expandAble, expandItem, parents, selectItem, value]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(_cascade.itemCls),
    onClick: handleClick,
    title: typeof title === 'string' ? title : ''
  }, attributes), /*#__PURE__*/_react.default.createElement("div", {
    className: _cascade.titleCls
  }, title), expandAble && /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
    type: "arrow-right",
    className: _cascade.iconCls
  }));
}.bind(void 0);

Item.propTypes = {
  expandAble: _propTypes.default.bool,
  expanded: _propTypes.default.bool,
  selected: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  title: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  parents: _propTypes.default.array
};

var _default = /*#__PURE__*/_react.default.memo(Item);

exports.default = _default;