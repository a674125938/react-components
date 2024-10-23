"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _miniStore = require("mini-store");

var _classnames = _interopRequireDefault(require("classnames"));

var _ColGroup = _interopRequireDefault(require("./ColGroup"));

var _TableHeader = _interopRequireDefault(require("./TableHeader"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _ExpandableRow = _interopRequireDefault(require("./ExpandableRow"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BaseTable = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(BaseTable, _React$Component);

  var _super = _createSuper(BaseTable);

  function BaseTable() {
    var _this;

    (0, _classCallCheck2.default)(this, BaseTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.renderRows = function (renderData, indent) {
      var ancestorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var table = _this.context.table;
      var columnManager = table.columnManager,
          components = table.components;
      var _table$props = table.props,
          prefixCls = _table$props.prefixCls,
          childrenColumnName = _table$props.childrenColumnName,
          rowClassName = _table$props.rowClassName,
          rowRef = _table$props.rowRef,
          onRow = _table$props.onRow;
      var _this$props = _this.props,
          getRowKey = _this$props.getRowKey,
          expander = _this$props.expander;
      var rows = [];

      var _loop = function _loop(i) {
        var _this2 = this;

        var record = renderData[i];
        var key = getRowKey(record, i);
        var className = typeof rowClassName === 'string' ? rowClassName : rowClassName(record, i, indent);

        var leafColumns = _this.getColumns(columnManager.leafColumns());

        var rowPrefixCls = "".concat(prefixCls, "-row");

        var row = /*#__PURE__*/_react.default.createElement(_ExpandableRow.default, (0, _extends2.default)({}, expander.props, {
          index: i,
          prefixCls: rowPrefixCls,
          record: record,
          key: key,
          rowKey: key,
          needIndentSpaced: expander.needIndentSpaced,
          onExpandedChange: expander.handleExpandChange
        }), function (expandableRow // eslint-disable-line
        ) {
          (0, _newArrowCheck2.default)(this, _this2);
          return /*#__PURE__*/_react.default.createElement(_TableRow.default, (0, _extends2.default)({
            indent: indent,
            className: className,
            record: record,
            index: i,
            prefixCls: rowPrefixCls,
            childrenColumnName: childrenColumnName,
            columns: leafColumns,
            onRow: onRow,
            rowKey: key,
            ancestorKeys: ancestorKeys,
            ref: rowRef(record, i, indent),
            components: components
          }, expandableRow));
        }.bind(this));

        rows.push(row);
        expander.renderRows(_this.renderRows, rows, record, i, indent, key, ancestorKeys);
      };

      for (var i = 0; i < renderData.length; i++) {
        _loop(i);
      }

      return rows;
    };

    return _this;
  }

  (0, _createClass2.default)(BaseTable, [{
    key: "getColumns",
    value: function getColumns(cols) {
      var _this3 = this;

      var _this$props$columns = this.props.columns,
          columns = _this$props$columns === void 0 ? [] : _this$props$columns;
      var table = this.context.table;
      var prefixCls = table.props.prefixCls;
      return (cols || columns).map(function (column) {
        (0, _newArrowCheck2.default)(this, _this3);
        return _objectSpread(_objectSpread({}, column), {}, {
          className: column.fixed ? (0, _classnames.default)("".concat(prefixCls, "-fixed-columns-in-body"), column.className) : column.className
        });
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var table = this.context.table;
      var components = table.components;
      var _table$props2 = table.props,
          prefixCls = _table$props2.prefixCls,
          scroll = _table$props2.scroll,
          data = _table$props2.data;
      var _this$props2 = this.props,
          expander = _this$props2.expander,
          tableClassName = _this$props2.tableClassName,
          hasHead = _this$props2.hasHead,
          hasBody = _this$props2.hasBody,
          fixed = _this$props2.fixed,
          tableLayout = _this$props2.tableLayout;
      var tableStyle = {};

      if (!fixed && scroll.x && scroll.x !== true) {
        tableStyle.width = scroll.x;
      }

      if (tableLayout === 'fixed') {
        tableStyle.tableLayout = 'fixed';
      }

      var Table = hasBody ? components.table : 'table';
      var BodyWrapper = components.body.wrapper;
      var body;

      if (hasBody) {
        body = /*#__PURE__*/_react.default.createElement(BodyWrapper, {
          className: "".concat(prefixCls, "-tbody")
        }, this.renderRows(data, 0));
      }

      var columns = this.getColumns();
      return /*#__PURE__*/_react.default.createElement(Table, {
        className: tableClassName,
        style: tableStyle,
        key: "table"
      }, /*#__PURE__*/_react.default.createElement(_ColGroup.default, {
        columns: columns,
        fixed: fixed
      }), hasHead && /*#__PURE__*/_react.default.createElement(_TableHeader.default, {
        expander: expander,
        columns: columns,
        fixed: fixed
      }), body);
    }
  }]);
  return BaseTable;
}(_react.default.Component);

BaseTable.propTypes = {
  fixed: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  columns: _propTypes.default.array.isRequired,
  tableClassName: _propTypes.default.string.isRequired,
  hasHead: _propTypes.default.bool.isRequired,
  hasBody: _propTypes.default.bool.isRequired,
  store: _propTypes.default.object.isRequired,
  expander: _propTypes.default.object.isRequired,
  getRowKey: _propTypes.default.func,
  tableLayout: _propTypes.default.oneOf(['fixed', 'auto'])
};
BaseTable.contextTypes = {
  table: _propTypes.default.any
};

var _default = (0, _miniStore.connect)()(BaseTable);

exports.default = _default;