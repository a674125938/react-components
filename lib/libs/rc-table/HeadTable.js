"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeadTable;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

var _BaseTable = _interopRequireDefault(require("./BaseTable"));

function HeadTable(props, _ref) {
  var table = _ref.table;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      scroll = _table$props.scroll,
      showHeader = _table$props.showHeader;
  var columns = props.columns,
      fixed = props.fixed,
      tableClassName = props.tableClassName,
      handleBodyScrollLeft = props.handleBodyScrollLeft,
      expander = props.expander,
      tableLayout = props.tableLayout;
  var saveRef = table.saveRef;
  var useFixedHeader = table.props.useFixedHeader;
  var headStyle = {};

  if (scroll.y) {
    useFixedHeader = true; // Add negative margin bottom for scroll bar overflow bug

    var scrollbarWidth = (0, _utils.measureScrollbar)('horizontal');

    if (scrollbarWidth > 0 && !fixed) {
      headStyle.marginBottom = "-".concat(scrollbarWidth, "px");
      headStyle.paddingBottom = '0px';
    }
  }

  if (!useFixedHeader || !showHeader) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    key: "headTable",
    ref: fixed ? null : saveRef('headTable'),
    className: "".concat(prefixCls, "-header"),
    style: headStyle,
    onScroll: handleBodyScrollLeft
  }, /*#__PURE__*/_react.default.createElement(_BaseTable.default, {
    tableClassName: tableClassName,
    hasHead: true,
    hasBody: false,
    fixed: fixed,
    columns: columns,
    expander: expander,
    tableLayout: tableLayout
  }));
}

HeadTable.propTypes = {
  fixed: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  columns: _propTypes.default.array.isRequired,
  tableClassName: _propTypes.default.string.isRequired,
  handleBodyScrollLeft: _propTypes.default.func.isRequired,
  expander: _propTypes.default.object.isRequired,
  tableLayout: _propTypes.default.oneOf(['fixed', 'auto'])
};
HeadTable.contextTypes = {
  table: _propTypes.default.any
};