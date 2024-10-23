"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BodyTable;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BaseTable = _interopRequireDefault(require("./BaseTable"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BodyTable(props, _ref) {
  var table = _ref.table;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      scroll = _table$props.scroll;
  var columns = props.columns,
      tableClassName = props.tableClassName,
      getRowKey = props.getRowKey,
      handleBodyScroll = props.handleBodyScroll,
      expander = props.expander,
      tableLayout = props.tableLayout;
  var saveRef = table.saveRef;
  var useFixedHeader = table.props.useFixedHeader;

  var bodyStyle = _objectSpread({}, table.props.bodyStyle);

  if (scroll.x) {
    bodyStyle.overflowX = bodyStyle.overflowX || 'scroll'; // Fix weired webkit render bug
    // https://github.com/ant-design/ant-design/issues/7783

    bodyStyle.WebkitTransform = 'translate3d (0, 0, 0)';
  }

  if (scroll.y) {
    // maxHeight will make fixed-Table scrolling not working
    // so we only set maxHeight to body-Table here
    bodyStyle.maxHeight = bodyStyle.maxHeight || scroll.y;
    bodyStyle.overflowY = bodyStyle.overflowY || 'scroll';
    useFixedHeader = true;
  }

  var baseTable = /*#__PURE__*/_react.default.createElement(_BaseTable.default, {
    tableClassName: tableClassName,
    hasHead: !useFixedHeader,
    hasBody: true,
    columns: columns,
    expander: expander,
    getRowKey: getRowKey,
    tableLayout: tableLayout
  });

  return /*#__PURE__*/_react.default.createElement("div", {
    key: "bodyTable",
    className: "".concat(prefixCls, "-body"),
    style: bodyStyle,
    ref: saveRef('bodyTable'),
    onScroll: handleBodyScroll
  }, baseTable);
}

BodyTable.propTypes = {
  columns: _propTypes.default.array.isRequired,
  tableClassName: _propTypes.default.string.isRequired,
  handleBodyScroll: _propTypes.default.func.isRequired,
  getRowKey: _propTypes.default.func.isRequired,
  expander: _propTypes.default.object.isRequired,
  tableLayout: _propTypes.default.oneOf(['fixed', 'auto'])
};
BodyTable.contextTypes = {
  table: _propTypes.default.any
};