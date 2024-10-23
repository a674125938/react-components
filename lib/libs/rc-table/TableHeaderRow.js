"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _miniStore = require("mini-store");

var _classnames = _interopRequireDefault(require("classnames"));

var _this2 = void 0;

var _excluded = ["column", "style", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TableHeaderRow(_ref) {
  var _this = this;

  var row = _ref.row,
      index = _ref.index,
      height = _ref.height,
      components = _ref.components,
      onHeaderRow = _ref.onHeaderRow,
      prefixCls = _ref.prefixCls;
  var HeaderRow = components.header.row;
  var HeaderCell = components.header.cell;
  var rowProps = onHeaderRow(row.map(function (cell) {
    (0, _newArrowCheck2.default)(this, _this);
    return cell.column;
  }.bind(this)), index);
  var customStyle = rowProps ? rowProps.style : {};

  var style = _objectSpread({
    height: height
  }, customStyle);

  return /*#__PURE__*/_react.default.createElement(HeaderRow, (0, _extends2.default)({}, rowProps, {
    style: style
  }), row.map(function (cell, i) {
    (0, _newArrowCheck2.default)(this, _this);
    var column = cell.column,
        _cell$style = cell.style,
        style = _cell$style === void 0 ? {} : _cell$style,
        className = cell.className,
        cellProps = (0, _objectWithoutProperties2.default)(cell, _excluded);
    var offset = column.offset,
        fixed = column.fixed;
    var customProps = column.onHeaderCell ? column.onHeaderCell(column) : {};

    var _customProps$_style = customProps._style,
        _style = _customProps$_style === void 0 ? {} : _customProps$_style,
        _className = customProps.className;

    style = _objectSpread(_objectSpread({}, style), _style);
    className = (0, _classnames.default)(className, _className);

    if (column.align) {
      style.textAlign = column.align;
    }

    if (fixed && offset != null) {
      style.position = 'sticky';
      style.zIndex = 2;

      if (column.fixed === 'left') {
        style.left = offset;

        if (column.latestLeftFixed) {
          className = (0, _classnames.default)(className, "".concat(prefixCls, "-th-fixed-left-latest"));
        }
      } else if (column.fixed === 'right') {
        style.right = offset;

        if (column.firstRightFixed) {
          className = (0, _classnames.default)(className, "".concat(prefixCls, "-th-fixed-right-first"));
        }
      }
    }

    return /*#__PURE__*/_react.default.createElement(HeaderCell, (0, _extends2.default)({}, cellProps, customProps, typeof HeaderCell === 'string' ? {} : {
      column: column
    }, {
      style: style,
      className: className,
      key: column.key || column.dataIndex || i
    }));
  }.bind(this)));
}

TableHeaderRow.propTypes = {
  row: _propTypes.default.array,
  index: _propTypes.default.number,
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  components: _propTypes.default.any,
  onHeaderRow: _propTypes.default.func,
  prefixCls: _propTypes.default.string
};

function getRowHeight(state, props) {
  var fixedColumnsHeadRowsHeight = state.fixedColumnsHeadRowsHeight;
  var columns = props.columns,
      rows = props.rows,
      fixed = props.fixed;
  var headerHeight = fixedColumnsHeadRowsHeight[0];

  if (!fixed) {
    return null;
  }

  if (headerHeight && columns) {
    if (headerHeight === 'auto') {
      return 'auto';
    }

    return headerHeight / rows.length;
  }

  return null;
}

var _default = (0, _miniStore.connect)(function (state, props) {
  (0, _newArrowCheck2.default)(this, _this2);
  return {
    height: getRowHeight(state, props)
  };
}.bind(void 0))(TableHeaderRow);

exports.default = _default;