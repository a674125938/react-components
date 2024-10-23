"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _miniStore = require("mini-store");

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _utils = require("./utils");

var _this5 = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ExpandableTable = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ExpandableTable, _React$Component);

  var _super = _createSuper(ExpandableTable);

  function ExpandableTable(props) {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, ExpandableTable);
    _this = _super.call(this, props);

    _this.handleExpandChange = function (expanded, record, event, rowKey) {
      var destroy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      var _this$props = _this.props,
          onExpandedRowsChange = _this$props.onExpandedRowsChange,
          onExpand = _this$props.onExpand;

      var _this$store$getState = _this.store.getState(),
          expandedRowKeys = _this$store$getState.expandedRowKeys;

      if (expanded) {
        // row was expanded
        expandedRowKeys = [].concat((0, _toConsumableArray2.default)(expandedRowKeys), [rowKey]);
      } else {
        // row was collapse
        var expandedRowIndex = expandedRowKeys.indexOf(rowKey);

        if (expandedRowIndex !== -1) {
          expandedRowKeys = (0, _utils.remove)(expandedRowKeys, rowKey);
        }
      }

      if (!_this.props.expandedRowKeys) {
        _this.store.setState({
          expandedRowKeys: expandedRowKeys
        });
      }

      onExpandedRowsChange(expandedRowKeys);

      if (!destroy) {
        onExpand(expanded, record);
      }
    };

    _this.renderExpandIndentCell = function (rows, fixed) {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props2 = _this.props,
          prefixCls = _this$props2.prefixCls,
          expandIconAsCell = _this$props2.expandIconAsCell;

      if (!expandIconAsCell || fixed === 'right' || !rows.length) {
        return;
      }

      var iconColumn = {
        key: 'rc-table-expand-icon-cell',
        className: "".concat(prefixCls, "-expand-icon-th"),
        title: '',
        rowSpan: rows.length
      };
      rows[0].unshift(_objectSpread(_objectSpread({}, iconColumn), {}, {
        column: iconColumn
      }));
    }.bind(this);

    _this.renderRows = function (renderRows, rows, record, index, indent, parentKey, ancestorKeys) {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props3 = _this.props,
          expandedRowClassName = _this$props3.expandedRowClassName,
          expandedRowRender = _this$props3.expandedRowRender,
          childrenColumnName = _this$props3.childrenColumnName;
      var childrenData = record && record[childrenColumnName];
      var nextAncestorKeys = [].concat((0, _toConsumableArray2.default)(ancestorKeys), [parentKey]);
      var nextIndent = indent + 1;

      if (expandedRowRender) {
        rows.push(_this.renderExpandedRow(record, index, expandedRowRender, expandedRowClassName(record, index, indent), nextAncestorKeys, nextIndent));
      }

      if (childrenData) {
        rows.push.apply(rows, (0, _toConsumableArray2.default)(renderRows(childrenData, nextIndent, nextAncestorKeys)));
      }
    }.bind(this);

    var data = props.data,
        _childrenColumnName = props.childrenColumnName,
        defaultExpandAllRows = props.defaultExpandAllRows,
        _expandedRowKeys = props.expandedRowKeys,
        defaultExpandedRowKeys = props.defaultExpandedRowKeys,
        getRowKey = props.getRowKey;
    var finalExpandedRowKeys = [];

    var _rows = (0, _toConsumableArray2.default)(data);

    if (defaultExpandAllRows) {
      for (var i = 0; i < _rows.length; i++) {
        var row = _rows[i];
        finalExpandedRowKeys.push(getRowKey(row, i));
        _rows = _rows.concat(row[_childrenColumnName] || []);
      }
    } else {
      finalExpandedRowKeys = _expandedRowKeys || defaultExpandedRowKeys;
    }

    _this.columnManager = props.columnManager;
    _this.store = props.store;

    _this.store.setState({
      expandedRowsHeight: {},
      expandedRowKeys: finalExpandedRowKeys
    });

    return _this;
  }

  (0, _createClass2.default)(ExpandableTable, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if ('expandedRowKeys' in this.props) {
        this.store.setState({
          expandedRowKeys: this.props.expandedRowKeys
        });
      }
    }
  }, {
    key: "renderExpandedRow",
    value: function renderExpandedRow(record, index, _render, className, ancestorKeys, indent, fixed) {
      var _this3 = this;

      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          expandIconAsCell = _this$props4.expandIconAsCell,
          indentSize = _this$props4.indentSize;
      var parentKey = ancestorKeys[ancestorKeys.length - 1];
      var rowKey = "".concat(parentKey, "-extra-row");
      var components = {
        body: {
          row: 'tr',
          cell: 'td'
        }
      };
      var colCount = this.columnManager.leafColumns().length;
      var columns = [{
        key: 'extra-row',
        render: function render() {
          (0, _newArrowCheck2.default)(this, _this3);

          var _this$store$getState2 = this.store.getState(),
              expandedRowKeys = _this$store$getState2.expandedRowKeys;

          var expanded = !!~expandedRowKeys.indexOf(parentKey);
          return {
            props: {
              colSpan: colCount
            },
            children: fixed !== 'right' ? _render(record, index, indent, expanded) : '&nbsp;'
          };
        }.bind(this)
      }];

      if (expandIconAsCell && fixed !== 'right') {
        columns.unshift({
          key: 'expand-icon-placeholder',
          render: function render() {
            (0, _newArrowCheck2.default)(this, _this3);
            return null;
          }.bind(this)
        });
      }

      return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
        key: rowKey,
        columns: columns,
        className: className,
        rowKey: rowKey,
        ancestorKeys: ancestorKeys,
        prefixCls: "".concat(prefixCls, "-expanded-row"),
        indentSize: indentSize,
        indent: indent,
        index: index,
        fixed: fixed,
        components: components,
        expandedRow: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props5 = this.props,
          data = _this$props5.data,
          childrenColumnName = _this$props5.childrenColumnName,
          children = _this$props5.children;
      var needIndentSpaced = data.some(function (record) {
        (0, _newArrowCheck2.default)(this, _this4);
        return record && record[childrenColumnName];
      }.bind(this));
      return children({
        props: this.props,
        needIndentSpaced: needIndentSpaced,
        renderRows: this.renderRows,
        handleExpandChange: this.handleExpandChange,
        renderExpandIndentCell: this.renderExpandIndentCell
      });
    }
  }]);
  return ExpandableTable;
}(_react.default.Component);

ExpandableTable.propTypes = {
  expandIconAsCell: _propTypes.default.bool,
  expandedRowKeys: _propTypes.default.array,
  expandedRowClassName: _propTypes.default.func,
  defaultExpandAllRows: _propTypes.default.bool,
  defaultExpandedRowKeys: _propTypes.default.array,
  expandIconColumnIndex: _propTypes.default.number,
  expandedRowRender: _propTypes.default.func,
  childrenColumnName: _propTypes.default.string,
  indentSize: _propTypes.default.number,
  onExpand: _propTypes.default.func,
  onExpandedRowsChange: _propTypes.default.func,
  columnManager: _propTypes.default.object.isRequired,
  store: _propTypes.default.object.isRequired,
  prefixCls: _propTypes.default.string.isRequired,
  data: _propTypes.default.array,
  children: _propTypes.default.func.isRequired,
  getRowKey: _propTypes.default.func.isRequired
};
ExpandableTable.defaultProps = {
  expandIconAsCell: false,
  expandedRowClassName: function expandedRowClassName() {
    (0, _newArrowCheck2.default)(this, _this5);
    return '';
  }.bind(void 0),
  expandIconColumnIndex: 0,
  defaultExpandAllRows: false,
  defaultExpandedRowKeys: [],
  childrenColumnName: 'children',
  indentSize: 15,
  onExpand: function onExpand() {
    (0, _newArrowCheck2.default)(this, _this5);
  }.bind(void 0),
  onExpandedRowsChange: function onExpandedRowsChange() {
    (0, _newArrowCheck2.default)(this, _this5);
  }.bind(void 0)
};
(0, _reactLifecyclesCompat.polyfill)(ExpandableTable);

var _default = (0, _miniStore.connect)()(ExpandableTable);

exports.default = _default;