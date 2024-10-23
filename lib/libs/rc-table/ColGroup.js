"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ColGroup;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

function ColGroup(props, _ref) {
  var _this = this;

  var table = _ref.table;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      expandIconAsCell = _table$props.expandIconAsCell;
  var cols = [];

  if (expandIconAsCell) {
    cols.push( /*#__PURE__*/_react.default.createElement("col", {
      className: "".concat(prefixCls, "-expand-icon-col"),
      key: "rc-table-expand-icon-col"
    }));
  }

  var leafColumns = table.columnManager.leafColumns();
  cols = cols.concat(leafColumns.map(function (c) {
    (0, _newArrowCheck2.default)(this, _this);
    return /*#__PURE__*/_react.default.createElement("col", (0, _extends2.default)({
      key: c.key || c.dataIndex,
      style: {
        width: c.width
      }
    }, c[_utils.INTERNAL_COL_DEFINE]));
  }.bind(this)));
  return /*#__PURE__*/_react.default.createElement("colgroup", null, cols);
}

ColGroup.contextTypes = {
  table: _propTypes.default.any
};