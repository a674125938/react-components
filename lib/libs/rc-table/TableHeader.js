"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableHeader;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableHeaderRow = _interopRequireDefault(require("./TableHeaderRow"));

function getHeaderRows(columns) {
  var _this = this;

  var currentRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var rows = arguments.length > 2 ? arguments[2] : undefined;
  rows = rows || [];
  rows[currentRow] = rows[currentRow] || [];
  columns.forEach(function (column) {
    (0, _newArrowCheck2.default)(this, _this);

    if (column.rowSpan && rows.length < column.rowSpan) {
      while (rows.length < column.rowSpan) {
        rows.push([]);
      }
    }

    var cell = {
      key: column.key,
      className: column.className || '',
      children: column.title,
      column: column
    };

    if (column.children) {
      getHeaderRows(column.children, currentRow + 1, rows);
    }

    if ('colSpan' in column) {
      cell.colSpan = column.colSpan;
    }

    if ('rowSpan' in column) {
      cell.rowSpan = column.rowSpan;
    }

    if (cell.colSpan !== 0) {
      rows[currentRow].push(cell);
    }
  }.bind(this));
  return rows.filter(function (row) {
    (0, _newArrowCheck2.default)(this, _this);
    return row.length > 0;
  }.bind(this));
}

function TableHeader(props, _ref) {
  var _this2 = this;

  var table = _ref.table;
  var components = table.components;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      showHeader = _table$props.showHeader,
      onHeaderRow = _table$props.onHeaderRow;
  var expander = props.expander,
      columns = props.columns,
      fixed = props.fixed;

  if (!showHeader) {
    return null;
  }

  var rows = getHeaderRows(columns);
  expander.renderExpandIndentCell(rows, fixed);
  var HeaderWrapper = components.header.wrapper;
  return /*#__PURE__*/_react.default.createElement(HeaderWrapper, {
    className: "".concat(prefixCls, "-thead")
  }, rows.map(function (row, index) {
    (0, _newArrowCheck2.default)(this, _this2);
    return /*#__PURE__*/_react.default.createElement(_TableHeaderRow.default, {
      prefixCls: prefixCls,
      key: index,
      index: index,
      fixed: fixed,
      columns: columns,
      rows: rows,
      row: row,
      components: components,
      onHeaderRow: onHeaderRow
    });
  }.bind(this)));
}

TableHeader.propTypes = {
  fixed: _propTypes.default.string,
  columns: _propTypes.default.array.isRequired,
  expander: _propTypes.default.object.isRequired,
  onHeaderRow: _propTypes.default.func
};
TableHeader.contextTypes = {
  table: _propTypes.default.any
};