"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "prefixCls", {
  enumerable: true,
  get: function get() {
    return _style.prefixCls;
  }
});
exports.default = exports.TableContext = exports.placeholderKey = exports.deprecatedLogForOnRowSelect = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _extend2 = _interopRequireDefault(require("lodash/extend"));

var _findLastIndex2 = _interopRequireDefault(require("lodash/findLastIndex"));

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _filter2 = _interopRequireDefault(require("lodash/filter"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _isNumber2 = _interopRequireDefault(require("lodash/isNumber"));

var _clone2 = _interopRequireDefault(require("lodash/clone"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _find2 = _interopRequireDefault(require("lodash/find"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _each2 = _interopRequireDefault(require("lodash/each"));

var _isObject2 = _interopRequireDefault(require("lodash/isObject"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createReactContext = _interopRequireDefault(require("create-react-context"));

var _rcTable = _interopRequireDefault(require("../../libs/rc-table"));

var _deprecatedLog = _interopRequireDefault(require("../../utils/deprecatedLog"));

var _warning = _interopRequireWildcard(require("../../utils/warning"));

var _Pagination = _interopRequireDefault(require("../../components/Pagination"));

var _Notice = _interopRequireDefault(require("../../components/Notice"));

var _Checkbox = _interopRequireDefault(require("../../components/Checkbox"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _Radio = _interopRequireDefault(require("../../components/Radio"));

var _Select = _interopRequireDefault(require("../../components/Select"));

var _Tooltip = _interopRequireDefault(require("../../components/Tooltip"));

var _localeConsumerDecorator = _interopRequireDefault(require("../../components/LocaleProvider/localeConsumerDecorator"));

var _ContainerContext = require("../../components/Popover/ContainerContext");

var _style = require("./style");

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _DragWrap = _interopRequireDefault(require("./DragWrap"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _ResizableTH = _interopRequireDefault(require("./ResizableTH"));

var _excluded = ["options", "multiple", "onChange"],
    _excluded2 = ["pagination", "dataSource", "columns", "rowSelection", "onRowSelect", "contextMenu", "emptyContent", "errorContent", "className", "style", "expandedRowRender", "expandIconAsCell", "expandIconColumnIndex", "defaultExpandAllRows", "title", "footer", "columnResizable", "locale", "hideExpandIcon", "onRow", "components", "onExpand", "zebraCrossing", "columnPlaceholder", "tableLayout", "scroll", "customStyle", "dragSorting"];

var _this = void 0,
    _dec,
    _class,
    _class2,
    _temp;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var noop = function noop() {
  (0, _newArrowCheck2.default)(this, _this);
}.bind(void 0);

var deprecatedLogForOnRowSelect = (0, _deprecatedLog.default)('Table onRowSelect', 'rowSelection.onChange');
exports.deprecatedLogForOnRowSelect = deprecatedLogForOnRowSelect;
var placeholderKey = 'table_column_width_placeholder';
exports.placeholderKey = placeholderKey;
var TableContext = (0, _createReactContext.default)();
exports.TableContext = TableContext;

var missingColumnKeyWarn = function missingColumnKeyWarn() {
  (0, _newArrowCheck2.default)(this, _this);
  return (0, _warning.default)('Table column need a unique key');
}.bind(void 0);

var dragSortingWarning = (0, _warning.onceWarning)("Can't use dragSorting with expandedRowRender or column.children");
var uid = 0;
var Table = (_dec = (0, _localeConsumerDecorator.default)({
  defaultLocale: _zh_CN.default,
  localeName: 'Table'
}), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Table, _Component);

  var _super = _createSuper(Table);

  function Table(_props) {
    var _this3 = this;

    var _this2;

    (0, _classCallCheck2.default)(this, Table);
    _this2 = _super.call(this, _props);

    _this2.check = function (props) {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var columns = props.columns;
      (0, _each2.default)(columns, function (column) {
        (0, _newArrowCheck2.default)(this, _this4);
        if (column.key === undefined) missingColumnKeyWarn();
      }.bind(this));
    }.bind(this);

    _this2.componentWillReceiveProps = function (nextProps) {
      var _this5 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var rowSelection = nextProps.rowSelection;

      if ((0, _isObject2.default)(rowSelection) && 'selectedRowKeys' in rowSelection) {
        var selectedRowKeyMap = {};
        (0, _each2.default)(rowSelection.selectedRowKeys, function (key) {
          (0, _newArrowCheck2.default)(this, _this5);
          return selectedRowKeyMap[key] = true;
        }.bind(this));

        _this2.setState({
          selectedRowKeyMap: selectedRowKeyMap
        });
      }

      _this2.initRenderRowSelectionDate(nextProps); // pick controlled filter value


      _this2.setState({
        filtersFromProps: _this2.calFiltersFromProps(nextProps)
      });

      if ('order' in nextProps) {
        var order = _this2.getOrder(nextProps.order, nextProps.columns);

        _this2.setState({
          order: order
        });
      }
    }.bind(this);

    _this2.initRenderRowSelectionDate = function (props) {
      var _this6 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var rowSelection = props.rowSelection,
          nextDateSource = props.dataSource;
      var dataSource = _this2.props.dataSource;
      var data = nextDateSource || dataSource;
      var _this2$state = _this2.state,
          indeterminateSelectedRowKeyMap = _this2$state.indeterminateSelectedRowKeyMap,
          selectedRowKeyMap = _this2$state.selectedRowKeyMap;

      if (!data || !data.length || !(0, _isObject2.default)(rowSelection)) {
        return;
      }

      var flatDataSourceKeys = _this2.flatDataSourceKeysForMap({
        dataSource: data
      });

      if (rowSelection.multiple !== false && rowSelection.linkage && flatDataSourceKeys.length) {
        var _Object$keys$reduce = Object.keys(selectedRowKeyMap).reduce(function (p, key) {
          (0, _newArrowCheck2.default)(this, _this6);

          var _this2$initLinkageRow = _this2.initLinkageRowSelectionMap(selectedRowKeyMap, true, key, flatDataSourceKeys, indeterminateSelectedRowKeyMap),
              mergeMap = _this2$initLinkageRow.mergeMap,
              indeterminate = _this2$initLinkageRow.indeterminate;

          return {
            finalMergeMap: _objectSpread(_objectSpread({}, p.finalMergeMap), mergeMap),
            finalIndeterminate: _objectSpread(_objectSpread({}, p.finalIndeterminate), indeterminate)
          };
        }.bind(this), {
          finalMergeMap: {},
          finalIndeterminate: {}
        }),
            finalMergeMap = _Object$keys$reduce.finalMergeMap,
            finalIndeterminate = _Object$keys$reduce.finalIndeterminate;

        Object.keys(finalMergeMap).forEach(function (key) {
          (0, _newArrowCheck2.default)(this, _this6);
          selectedRowKeyMap[key] = finalMergeMap[key];
        }.bind(this));

        _this2.setState({
          indeterminateSelectedRowKeyMap: _objectSpread({}, finalIndeterminate)
        });
      }

      _this2.setState({
        flatDataSourceKeys: flatDataSourceKeys
      });
    }.bind(this);

    _this2.getOrder = function (order, columns) {
      var _this7 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      if (!order || !columns) return null;
      var key = order.key,
          state = order.state;
      if (!key || !state) return null;
      var column = (0, _find2.default)(columns, function (column) {
        (0, _newArrowCheck2.default)(this, _this7);
        return column.key === key;
      }.bind(this));
      if (!column) return null;
      var columnOrder = column.order,
          dataIndex = column.dataIndex;
      if (!columnOrder) return null;
      var handleOrder = columnOrder.handleOrder;
      return {
        key: key,
        state: state,
        dataIndex: dataIndex,
        handleOrder: handleOrder
      };
    }.bind(this);

    _this2.calFiltersFromProps = function (_ref2) {
      var _this8 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var _ref2$columns = _ref2.columns,
          columns = _ref2$columns === void 0 ? [] : _ref2$columns;
      var filters = {}; // pick filter controlled value

      columns.forEach(function (column, i) {
        (0, _newArrowCheck2.default)(this, _this8);
        var filter = column.filter;

        var columnKey = _this2.getColumnKey(column, i);

        if (!filter) return;
        var filterValue;

        if ('value' in filter) {
          filterValue = filter.value;
          filters[columnKey] = {
            value: filterValue
          };
        }
      }.bind(this));
      return filters;
    }.bind(this);

    _this2.calDefaultFilters = function (_ref3) {
      var _this9 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var _ref3$columns = _ref3.columns,
          columns = _ref3$columns === void 0 ? [] : _ref3$columns;
      var filters = {}; // pick filter controlled value

      columns.forEach(function (column, i) {
        (0, _newArrowCheck2.default)(this, _this9);
        var filter = column.filter;
        if (!filter) return;

        var columnKey = _this2.getColumnKey(column, i);

        var filterValue; // pick default value

        if ('defaultValue' in filter) {
          filterValue = filter.defaultValue;
          filters[columnKey] = {
            value: filterValue
          };
        }
      }.bind(this));
      return filters;
    }.bind(this);

    _this2.mergeFilters = function (stateFilters, propsFilters, columns) {
      var _this10 = this;

      (0, _newArrowCheck2.default)(this, _this3);

      var filters = _objectSpread(_objectSpread({}, stateFilters), propsFilters);

      (0, _each2.default)(filters, function (filter, key) {
        var _this11 = this;

        (0, _newArrowCheck2.default)(this, _this10);
        var column = (0, _find2.default)(columns, function (column, i) {
          (0, _newArrowCheck2.default)(this, _this11);
          return _this2.getColumnKey(column, i) === key;
        }.bind(this));

        if (!column || filter.value == null || !column.filter || column.filter.multiple && !filter.value.length) {
          delete filters[key];
        } else {
          filter.column = column;
        }
      }.bind(this));
      return filters;
    }.bind(this);

    _this2.getExpandedRowKeys = function (dataSource, changedUnExpandedRowKeys) {
      var _this12 = this;

      (0, _newArrowCheck2.default)(this, _this3);

      // 拍平数据
      var flatDataSource = _this2.flatDataSource(dataSource);

      var expandedRowKeys = [];
      (0, _each2.default)(flatDataSource, function (item) {
        (0, _newArrowCheck2.default)(this, _this12);
        var key = item.key;

        if (!changedUnExpandedRowKeys[key]) {
          expandedRowKeys.push(key);
        }
      }.bind(this));
      return expandedRowKeys;
    }.bind(this);

    _this2.deprecatedOnRowSelect = function (selectedRowKeys) {
      (0, _newArrowCheck2.default)(this, _this3);

      if ('onRowSelect' in _this2.props) {
        deprecatedLogForOnRowSelect();

        _this2.props.onRowSelect(selectedRowKeys);
      }
    }.bind(this);

    _this2.onSelectedRowKeysChange = function (selectedRowKeyMap) {
      var _this13 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var rowSelection = _this2.props.rowSelection;
      var parentSelectedRowKeys = _this2.state.parentSelectedRowKeys;
      if (!rowSelection) return;
      var selectedRowKeys = [];
      (0, _each2.default)(selectedRowKeyMap, function (selected, key) {
        (0, _newArrowCheck2.default)(this, _this13);
        selected && selectedRowKeys.push(key);
      }.bind(this));

      if ((0, _isObject2.default)(rowSelection)) {
        if (rowSelection.onChange) {
          rowSelection.onChange(selectedRowKeys);
        }

        if (!('selectedRowKeys' in rowSelection)) {
          _this2.setState({
            selectedRowKeyMap: selectedRowKeyMap
          });
        }
      } else {
        _this2.setState({
          selectedRowKeyMap: selectedRowKeyMap
        });
      }

      _this2.deprecatedOnRowSelect(selectedRowKeys);
    }.bind(this);

    _this2.onColumnConfigChange = function (config) {
      (0, _newArrowCheck2.default)(this, _this3);
      var onColumnConfigChange = _this2.props.onColumnConfigChange;

      _this2.setState({
        columnConfig: config
      });

      onColumnConfigChange(config);
    }.bind(this);

    _this2.handleSearch = function (v) {
      (0, _newArrowCheck2.default)(this, _this3);

      if (v !== _this2.state.searchValue) {
        _this2.setState({
          pagination: _objectSpread(_objectSpread({}, _this2.state.pagination), {}, {
            current: 1
          })
        });

        _this2.handleConditionChange({
          searchValue: v
        });
      }
    }.bind(this);

    _this2.handleConditionChange = function (stateCondition) {
      var _this14 = this;

      var callbackCondition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      stateCondition = _objectSpread(_objectSpread({}, (0, _pick2.default)(_this2.state, ['order', 'filters', 'searchValue'])), stateCondition);

      _this2.setState(_objectSpread({}, stateCondition));

      var onConditionChange = _this2.props.onConditionChange;
      var order = callbackCondition.order,
          filters = callbackCondition.filters,
          searchValue = callbackCondition.searchValue;

      if (!('order' in callbackCondition)) {
        order = stateCondition.order;
      }

      if (!('filters' in callbackCondition)) {
        filters = stateCondition.filters;
      }

      if (!('searchValue' in callbackCondition)) {
        searchValue = stateCondition.searchValue;
      }

      onConditionChange && onConditionChange({
        order: order ? (0, _pick2.default)(order, ['key', 'state']) : null,
        filters: (0, _map2.default)(filters, function (filter, key) {
          (0, _newArrowCheck2.default)(this, _this14);
          return {
            key: key,
            value: filter.value
          };
        }.bind(this)),
        searchValue: searchValue
      });
    };

    _this2.renderFilter = function (column) {
      var _this15 = this;

      var filterInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var index = arguments.length > 2 ? arguments[2] : undefined;
      var filter = column.filter;

      if (!filter) {
        return null;
      }

      var columnKey = _this2.getColumnKey(column, index);

      var options = filter.options,
          multiple = filter.multiple,
          _filter$onChange = filter.onChange,
          onChange = _filter$onChange === void 0 ? function () {
        (0, _newArrowCheck2.default)(this, _this15);
      }.bind(this) : _filter$onChange,
          rest = (0, _objectWithoutProperties2.default)(filter, _excluded);
      var newOptions = (0, _map2.default)(options, function (option) {
        (0, _newArrowCheck2.default)(this, _this15);
        return (0, _isObject2.default)(option) ? option : {
          value: option
        };
      }.bind(this));
      var value = filterInfo.value;
      var finalValue = value == null || multiple && !value.length ? null : value;
      return /*#__PURE__*/_react.default.createElement(_Select.default, (0, _extends2.default)({
        options: newOptions,
        value: finalValue,
        onChange: function (value) {
          (0, _newArrowCheck2.default)(this, _this15);

          _this2.handleFilter(columnKey, value == null || multiple && !value.length ? null : value);

          onChange(value);
        }.bind(this),
        className: "".concat(_style.prefixCls, "-filter"),
        renderSelector: function (content, active) {
          (0, _newArrowCheck2.default)(this, _this15);
          return /*#__PURE__*/_react.default.createElement(_style.FilterIcon, {
            key: "icon",
            type: "filter",
            active: active,
            disabled: rest.disabled
          });
        }.bind(this),
        multiple: multiple
      }, rest));
    };

    _this2.handleFilter = function (key, value) {
      (0, _newArrowCheck2.default)(this, _this3);

      var finalFilters = _this2.mergeFilters(_this2.state.filters, _objectSpread(_objectSpread({}, _this2.state.filtersFromProps), {}, (0, _defineProperty2.default)({}, key, {
        value: value
      })), _this2.props.columns);

      _this2.setState({
        pagination: _objectSpread(_objectSpread({}, _this2.state.pagination), {}, {
          current: 1
        })
      });

      _this2.handleConditionChange({
        filters: finalFilters
      });
    }.bind(this);

    _this2.clearFilter = function () {
      (0, _newArrowCheck2.default)(this, _this3);

      _this2.handleConditionChange({
        filters: {},
        searchValue: ''
      }, {
        filters: {}
      });
    }.bind(this);

    _this2.renderOrder = function (order, key, dataIndex) {
      var _this16 = this;

      var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'none';

      if (!order) {
        return null;
      }

      var handleOrder = order.handleOrder;
      return /*#__PURE__*/_react.default.createElement(_style.SortIcon, {
        type: {
          none: 'sort',
          desc: 'line-arrow-down',
          asc: 'line-arrow-up'
        }[state],
        onClick: function () {
          (0, _newArrowCheck2.default)(this, _this16);

          _this2.handleOrder(key, {
            dataIndex: dataIndex,
            handleOrder: handleOrder,
            state: state
          });
        }.bind(this)
      });
    };

    _this2.handleOrder = function (key, _ref4) {
      (0, _newArrowCheck2.default)(this, _this3);
      var dataIndex = _ref4.dataIndex,
          handleOrder = _ref4.handleOrder,
          state = _ref4.state;
      var order = state === 'asc' ? null : {
        key: key,
        dataIndex: dataIndex,
        handleOrder: handleOrder,
        state: {
          none: 'desc',
          desc: 'asc'
        }[state]
      }; // controlled

      if ('order' in _this2.props) {
        _this2.handleConditionChange({}, {
          order: order
        });
      } else {
        _this2.handleConditionChange({
          order: order
        });
      }
    }.bind(this);

    _this2.flatDataSource = function () {
      var _this17 = this;

      var dataSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var childrenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
      var result = [];

      var push = function push(record) {
        (0, _newArrowCheck2.default)(this, _this17);
        var index = result.length;
        result.push({
          record: record,
          index: index,
          key: _this2.getRowKey(record, index)
        });
      }.bind(this);

      var _loop = function loop(array) {
        var _this18 = this;

        (0, _newArrowCheck2.default)(this, _this17);
        array.forEach(function (record) {
          (0, _newArrowCheck2.default)(this, _this18);

          if (record && record[childrenName]) {
            var newRecord = _objectSpread({}, record);

            delete newRecord[childrenName];
            push(newRecord);

            if (record[childrenName].length > 0) {
              _loop(record[childrenName]);
            }
          } else {
            push(record);
          }
        }.bind(this));
      }.bind(this);

      _loop(dataSource);

      return result;
    };

    _this2.getDataSource = function (filters) {
      var _this19 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props = _this2.props,
          dataSource = _this2$props.dataSource,
          handleSearch = _this2$props.handleSearch,
          doNotHandleCondition = _this2$props.doNotHandleCondition;
      var _this2$state2 = _this2.state,
          order = _this2$state2.order,
          searchValue = _this2$state2.searchValue;
      var data = (0, _clone2.default)(dataSource);

      var doFilter = function doFilter(dataSource, filter) {
        var _this20 = this;

        (0, _newArrowCheck2.default)(this, _this19);
        var value = filter.value,
            columnInfo = filter.column;
        var dataIndex = columnInfo.dataIndex,
            _columnInfo$filter = columnInfo.filter,
            multiple = _columnInfo$filter.multiple,
            _columnInfo$filter$ha = _columnInfo$filter.handleFilter,
            handleFilter = _columnInfo$filter$ha === void 0 ? function (value, record, filterValue, multiple) {
          (0, _newArrowCheck2.default)(this, _this20);

          if (value == null) {
            return false;
          }

          if ((0, _isNumber2.default)(value)) {
            value = '' + value;
          } else if (!(0, _isString2.default)(value)) {
            return false;
          }

          if (!multiple) {
            return value.indexOf(filterValue) >= 0;
          } else {
            for (var i = 0; i < filterValue.length; i++) {
              var v = filterValue[i];

              if (value.indexOf(v) >= 0) {
                return true;
              }
            }
          }
        }.bind(this) : _columnInfo$filter$ha;
        return (0, _filter2.default)(dataSource, function (record) {
          (0, _newArrowCheck2.default)(this, _this20);
          return handleFilter(record && record[dataIndex], record, value, multiple);
        }.bind(this));
      }.bind(this);

      if (!doNotHandleCondition && !(0, _isEmpty2.default)(filters)) {
        (0, _forEach2.default)(filters, function (filter, key) {
          (0, _newArrowCheck2.default)(this, _this19);
          return data = doFilter(data, filter, key);
        }.bind(this));
      }

      var doSearch = function doSearch(dataSource, searchValue) {
        var _this21 = this;

        (0, _newArrowCheck2.default)(this, _this19);
        return dataSource.filter(function (record) {
          (0, _newArrowCheck2.default)(this, _this21);
          return handleSearch(record, searchValue);
        }.bind(this));
      }.bind(this);

      if (!doNotHandleCondition && searchValue && searchValue.trim()) {
        data = doSearch(data, searchValue.trim());
      }

      var doOrder = function doOrder(dataSource, order) {
        var _this22 = this;

        (0, _newArrowCheck2.default)(this, _this19);
        var dataIndex = order.dataIndex,
            handleOrder = order.handleOrder,
            state = order.state;
        return dataSource.sort(handleOrder ? function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return handleOrder.apply(void 0, [state].concat(args));
        } : {
          desc: function desc(a, b) {
            (0, _newArrowCheck2.default)(this, _this22);
            return a[dataIndex] > b[dataIndex] ? -1 : a[dataIndex] < b[dataIndex] ? 1 : 0;
          }.bind(this),
          asc: function asc(a, b) {
            (0, _newArrowCheck2.default)(this, _this22);
            return a[dataIndex] < b[dataIndex] ? -1 : a[dataIndex] > b[dataIndex] ? 1 : 0;
          }.bind(this)
        }[state]);
      }.bind(this);

      if (!doNotHandleCondition && order) {
        data = doOrder(data, order);
      }

      var total = data.length;

      var pagination = _this2.getPagination();

      if (!doNotHandleCondition && pagination !== null) {
        var current = pagination.current,
            pageSize = pagination.pageSize;
        var from = (current - 1) * pageSize;
        var to = from + pageSize;
        data = data.slice(from, to);
      }

      return {
        dataSource: data,
        total: total
      };
    }.bind(this);

    _this2.handleToggleCurrentPage = function (enableKeysOfCurrentPage, checked) {
      var _this23 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var flatDataSourceKeys = _this2.state.flatDataSourceKeys;
      var parentSelectedRowKeys = [];

      if (checked) {
        flatDataSourceKeys.forEach(function (item) {
          (0, _newArrowCheck2.default)(this, _this23);

          if (!item.parent) {
            parentSelectedRowKeys.push(item.key);
          }
        }.bind(this));
      }

      var selectedRowKeyMap = _this2.state.selectedRowKeyMap;
      var extendSelectedRowKeyMap = {};
      (0, _each2.default)(enableKeysOfCurrentPage, function (key) {
        (0, _newArrowCheck2.default)(this, _this23);
        extendSelectedRowKeyMap[key] = checked;
      }.bind(this));

      _this2.setState({
        indeterminateSelectedRowKeyMap: {},
        parentSelectedRowKeys: parentSelectedRowKeys
      }, function () {
        (0, _newArrowCheck2.default)(this, _this23);

        _this2.onSelectedRowKeysChange(_objectSpread(_objectSpread({}, selectedRowKeyMap), extendSelectedRowKeyMap));
      }.bind(this));
    }.bind(this);

    _this2.handleSelectRecord = function (_ref5) {
      var _this24 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var key = _ref5.key,
          checked = _ref5.checked;
      var rowSelection = _this2.props.rowSelection;
      var _this2$state3 = _this2.state,
          selectedRowKeyMap = _this2$state3.selectedRowKeyMap,
          indeterminateSelectedRowKeyMap = _this2$state3.indeterminateSelectedRowKeyMap,
          flatDataSourceKeys = _this2$state3.flatDataSourceKeys;

      if (rowSelection.multiple === false) {
        _this2.onSelectedRowKeysChange((0, _defineProperty2.default)({}, key, true));
      } else {
        var nowSelectedRowKeyMap = _objectSpread(_objectSpread({}, selectedRowKeyMap), {}, (0, _defineProperty2.default)({}, key, checked));

        if (!rowSelection.linkage) {
          _this2.onSelectedRowKeysChange(_objectSpread({}, nowSelectedRowKeyMap));

          return;
        }

        var _this2$initLinkageRow2 = _this2.initLinkageRowSelectionMap(nowSelectedRowKeyMap, checked, key, flatDataSourceKeys, indeterminateSelectedRowKeyMap),
            mergeMap = _this2$initLinkageRow2.mergeMap,
            indeterminate = _this2$initLinkageRow2.indeterminate;

        var truthyKeys = Object.keys(mergeMap).filter(function (key) {
          (0, _newArrowCheck2.default)(this, _this24);
          return Boolean(mergeMap[key]);
        }.bind(this));
        var parentSelectedRowKeys = truthyKeys.reduce(function (p, key) {
          var _this25 = this;

          (0, _newArrowCheck2.default)(this, _this24);
          var record = flatDataSourceKeys.find(function (record) {
            (0, _newArrowCheck2.default)(this, _this25);
            return String(record.key) == String(key);
          }.bind(this));
          var parentKeys = p.filter(function (x) {
            (0, _newArrowCheck2.default)(this, _this25);
            return !record.childrenKeys.includes(x);
          }.bind(this));
          return parentKeys;
        }.bind(this), (0, _toConsumableArray2.default)(truthyKeys));

        _this2.setState({
          indeterminateSelectedRowKeyMap: indeterminate,
          parentSelectedRowKeys: parentSelectedRowKeys
        }, function () {
          (0, _newArrowCheck2.default)(this, _this24);

          _this2.onSelectedRowKeysChange(_objectSpread({}, mergeMap));
        }.bind(this));
      }
    }.bind(this);

    _this2.getRowKey = function (record, index) {
      (0, _newArrowCheck2.default)(this, _this3);
      var rowKey = _this2.props.rowKey;
      var key = typeof rowKey === 'function' ? rowKey(record, index) : record && record[rowKey];
      return key === undefined ? index : key;
    }.bind(this);

    _this2.getColumnKey = function () {
      var column = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var index = arguments.length > 1 ? arguments[1] : undefined;
      var key = column.key;
      return (key === undefined ? index : key) + '';
    };

    _this2.flatDataSourceKeysForMap = function (_ref6) {
      var _this27 = this;

      var dataSource = _ref6.dataSource;
      var childrenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
      var result = [];

      var _self = (0, _assertThisInitialized2.default)(_this2);

      function getKey(children) {
        var _this26 = this;

        return children.reduce(function (p, item) {
          (0, _newArrowCheck2.default)(this, _this26);

          var curIndex = _self.getRowKey(item, item.tableKey);

          p = [].concat((0, _toConsumableArray2.default)(p), [curIndex]);
          var childrenKeys = [];

          if (item[childrenName]) {
            childrenKeys = getKey(item[childrenName]);
          }

          return [].concat((0, _toConsumableArray2.default)(p), (0, _toConsumableArray2.default)(childrenKeys));
        }.bind(this), []);
      }

      var push = function push(record, parent) {
        (0, _newArrowCheck2.default)(this, _this27);
        var index = result.length;
        var children = record[childrenName] || [];
        delete record[childrenName];
        var data = {
          record: record,
          parent: parent,
          index: index,
          key: _this2.getRowKey(record, index),
          childrenKeys: getKey(children)
        };
        result.push(data);
        return data;
      }.bind(this);

      var _loop2 = function loop(array, parent) {
        var _this28 = this;

        (0, _newArrowCheck2.default)(this, _this27);
        array.forEach(function (record) {
          (0, _newArrowCheck2.default)(this, _this28);

          if (record && record[childrenName]) {
            var newRecord = _objectSpread({}, record);

            var parentData = push(newRecord, parent);

            if (record[childrenName].length > 0) {
              _loop2(record[childrenName], parentData);
            }
          } else {
            push(record, parent);
          }
        }.bind(this));
      }.bind(this); // 递归函数，用于深度优先遍历并设置 key


      function setTableKeys(data) {
        var _this29 = this;

        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        data.forEach(function (item) {
          (0, _newArrowCheck2.default)(this, _this29);
          item.tableKey = index++;

          if (item[childrenName] && item[childrenName].length > 0) {
            index = setTableKeys(item[childrenName], index);
          }
        }.bind(this));
        return index;
      }

      var cloneDataSource = (0, _toConsumableArray2.default)(dataSource).filter(function (item) {
        (0, _newArrowCheck2.default)(this, _this27);
        return !!item;
      }.bind(this)); // 调用递归函数

      setTableKeys(cloneDataSource);

      _loop2(cloneDataSource, null);

      return result;
    };

    _this2.getDragSorting = function () {
      var _this30 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props2 = _this2.props,
          dragSorting = _this2$props2.dragSorting,
          expandedRowRender = _this2$props2.expandedRowRender,
          columns = _this2$props2.columns;
      if (!dragSorting) return false; // 排序暂不支持有展开行配置的table

      if (expandedRowRender || columns && columns.findIndex(function (column) {
        (0, _newArrowCheck2.default)(this, _this30);
        return !!column.children;
      }.bind(this)) >= 0) {
        dragSortingWarning();
        return false;
      }

      return dragSorting;
    }.bind(this);

    _this2.getColumns = function (dataSourceOfCurrentPage, filters) {
      var _this31 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props3 = _this2.props,
          columns = _this2$props3.columns,
          rowSelection = _this2$props3.rowSelection,
          columnPlaceholder = _this2$props3.columnPlaceholder,
          locale = _this2$props3.locale,
          dataSource = _this2$props3.dataSource,
          columnResizable = _this2$props3.columnResizable;
      var _this2$state4 = _this2.state,
          _this2$state4$order = _this2$state4.order,
          currentOrder = _this2$state4$order === void 0 ? {} : _this2$state4$order,
          selectedRowKeyMap = _this2$state4.selectedRowKeyMap,
          columnConfig = _this2$state4.columnConfig,
          indeterminateSelectedRowKeyMap = _this2$state4.indeterminateSelectedRowKeyMap,
          flatDataSourceKeys = _this2$state4.flatDataSourceKeys;
      var cloneColumns = columns.map(function (column, index) {
        (0, _newArrowCheck2.default)(this, _this31);
        return _objectSpread(_objectSpread({}, column), {}, {
          index: index
        });
      }.bind(this));
      var newColumns = cloneColumns.filter(function (column) {
        (0, _newArrowCheck2.default)(this, _this31);
        var key = column.key;
        return !columnConfig[key] || !columnConfig[key].hidden;
      }.bind(this));

      var _generateColumnTitle = function generateColumnTitle(column) {
        (0, _newArrowCheck2.default)(this, _this31);
        var dataIndex = column.dataIndex,
            title = column.title,
            renderTitle = column.renderTitle,
            order = column.order,
            children = column.children,
            index = column.index;

        var columnKey = _this2.getColumnKey(column, index);

        if (children) {
          return _objectSpread(_objectSpread({}, column), {}, {
            children: children.map(_generateColumnTitle)
          });
        } else {
          return _objectSpread(_objectSpread({}, column), {}, {
            title: /*#__PURE__*/_react.default.createElement("div", null, renderTitle ? renderTitle(title) : title, _this2.renderFilter(column, filters[columnKey], index), _this2.renderOrder(order, columnKey, dataIndex, currentOrder && currentOrder.key === columnKey ? currentOrder.state : 'none'))
          });
        }
      }.bind(this);

      newColumns = newColumns.map(_generateColumnTitle);

      if (columnResizable) {
        newColumns.forEach(function (column) {
          (0, _newArrowCheck2.default)(this, _this31);
          column.resizable = true;
        }.bind(this));
      }

      if (rowSelection) {
        var flatDataSourceOfCurrentPage = _this2.flatDataSource(dataSourceOfCurrentPage);

        var enableDataSourceOfCurrentPage = flatDataSourceOfCurrentPage;

        var flatDataSource = _this2.flatDataSource(dataSource);

        var enableDataSource = flatDataSource;
        var selectionDisabled = rowSelection.disabled;

        var disableItems = rowSelection.getDisabledOfRow && _this2.initDisabledOfRow(flatDataSourceKeys);

        var linkageFlag = rowSelection.multiple !== false && rowSelection.linkage ? true : false;

        if (rowSelection.getDisabledOfRow) {
          enableDataSourceOfCurrentPage = (0, _filter2.default)(flatDataSourceOfCurrentPage, function (item) {
            (0, _newArrowCheck2.default)(this, _this31);
            return linkageFlag ? !disableItems.includes(item.key) : !rowSelection.getDisabledOfRow(item.record);
          }.bind(this));
          enableDataSource = (0, _filter2.default)(flatDataSource, function (item) {
            (0, _newArrowCheck2.default)(this, _this31);
            return linkageFlag ? !disableItems.includes(item.key) : !rowSelection.getDisabledOfRow(item.record);
          }.bind(this));
        }

        var selectedEnableDataSourceOfCurrentPage = (0, _filter2.default)(enableDataSourceOfCurrentPage, function (item) {
          (0, _newArrowCheck2.default)(this, _this31);
          return selectedRowKeyMap[item.key];
        }.bind(this));
        var selectedEnableDataSource = (0, _filter2.default)(enableDataSource, function (item) {
          (0, _newArrowCheck2.default)(this, _this31);
          return selectedRowKeyMap[item.key];
        }.bind(this));
        var selectedEnableDataSourceOfCurrentPageCount = selectedEnableDataSourceOfCurrentPage.length;
        var isAllSelected = selectedEnableDataSourceOfCurrentPageCount === enableDataSourceOfCurrentPage.length && selectedEnableDataSourceOfCurrentPageCount > 0;
        var selectedCount = (0, _filter2.default)(selectedRowKeyMap, function (v) {
          (0, _newArrowCheck2.default)(this, _this31);
          return v;
        }.bind(this)).length;

        var renderSelectedAllCheckbox = function renderSelectedAllCheckbox() {
          var _this32 = this;

          (0, _newArrowCheck2.default)(this, _this31);
          return /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
            disabled: selectionDisabled,
            onChange: function () {
              var _this33 = this;

              (0, _newArrowCheck2.default)(this, _this32);
              var enableKeysOfCurrentPage = enableDataSourceOfCurrentPage.map(function (item) {
                (0, _newArrowCheck2.default)(this, _this33);
                return item.key;
              }.bind(this));

              _this2.handleToggleCurrentPage(enableKeysOfCurrentPage, !isAllSelected);
            }.bind(this),
            checked: isAllSelected,
            indeterminate: !isAllSelected && selectedEnableDataSourceOfCurrentPageCount > 0
          });
        }.bind(this);

        newColumns.unshift({
          title: rowSelection.multiple === false ? null : rowSelection.selectedTip === false ? renderSelectedAllCheckbox() : /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
            visible: selectedCount > 0,
            getPopupContainer: _this2.getPopupContainer,
            popup: /*#__PURE__*/_react.default.createElement("span", null, locale.selected, " ", selectedCount, ' ', /*#__PURE__*/_react.default.createElement(_style.CancelSelect, {
              onClick: function () {
                var _this34 = this;

                (0, _newArrowCheck2.default)(this, _this31);
                var enableKeys = selectedEnableDataSource.map(function (item) {
                  (0, _newArrowCheck2.default)(this, _this34);
                  return item.key;
                }.bind(this));

                _this2.handleToggleCurrentPage(enableKeys, false);
              }.bind(this)
            }, locale.cancelSelect)),
            placement: rowSelection.selectedTip === 'bottom' ? 'bottomLeft' : 'topLeft',
            align: {
              offset: [-8, 0]
            }
          }, renderSelectedAllCheckbox()),
          key: 'table_row_selection',
          width: 32,
          fixed: rowSelection.fixed,
          onHeaderCell: function onHeaderCell() {
            (0, _newArrowCheck2.default)(this, _this31);
            return {
              className: _style.selectIconHeaderCls
            };
          }.bind(this),
          onCell: function onCell() {
            (0, _newArrowCheck2.default)(this, _this31);
            return {
              className: _style.selectIconCellCls
            };
          }.bind(this),
          render: function render(value, record, index) {
            var _this35 = this;

            (0, _newArrowCheck2.default)(this, _this31);

            var rowKey = _this2.getRowKey(record, index);

            var disabled = false;

            if (selectionDisabled) {
              disabled = true;
            } else if (rowSelection.getDisabledOfRow) {
              disabled = linkageFlag ? disableItems.includes(record.key) : rowSelection.getDisabledOfRow(record);
            }

            return rowSelection.multiple === false ? /*#__PURE__*/_react.default.createElement(_Radio.default, {
              disabled: disabled,
              onChange: function () {
                (0, _newArrowCheck2.default)(this, _this35);
                return _this2.handleSelectRecord({
                  key: rowKey
                });
              }.bind(this),
              checked: !!selectedRowKeyMap[rowKey]
            }) : /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
              disabled: disabled,
              onChange: function () {
                (0, _newArrowCheck2.default)(this, _this35);
                return _this2.handleSelectRecord({
                  key: rowKey,
                  checked: !selectedRowKeyMap[rowKey]
                });
              }.bind(this),
              checked: !!selectedRowKeyMap[rowKey],
              indeterminate: !!indeterminateSelectedRowKeyMap[String(rowKey)]
            });
          }.bind(this)
        });
      }

      var dragSorting = _this2.getDragSorting();

      if (dragSorting) {
        newColumns.unshift({
          title: null,
          key: 'table_row_drag_sorting',
          width: 40,
          fixed: dragSorting === null || dragSorting === void 0 ? void 0 : dragSorting.fixed,
          onHeaderCell: function onHeaderCell() {
            (0, _newArrowCheck2.default)(this, _this31);
            return {
              className: _style.draggerHeaderCls
            };
          }.bind(this),
          onCell: function onCell() {
            (0, _newArrowCheck2.default)(this, _this31);
            return {
              className: _style.draggerCellCls
            };
          }.bind(this),
          render: function render(value, record, index) {
            (0, _newArrowCheck2.default)(this, _this31);

            var rowKey = _this2.getRowKey(record, index);

            return /*#__PURE__*/_react.default.createElement("span", {
              "data-row-key": rowKey,
              onMouseEnter: _this2.setDraggable,
              onMouseLeave: _this2.unsetDraggable,
              className: _style.draggerCls,
              "data-testid": "draggable"
            }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
              type: "dragger",
              size: "16px"
            }));
          }.bind(this)
        });
      }

      if (columnPlaceholder) {
        var lastUnFixedIndex = (0, _findLastIndex2.default)(newColumns, function (columnConfig) {
          (0, _newArrowCheck2.default)(this, _this31);
          return !columnConfig.fixed;
        }.bind(this));
        newColumns.splice(lastUnFixedIndex + 1, 0, {
          title: '',
          key: placeholderKey,
          onHeaderCell: function onHeaderCell() {
            (0, _newArrowCheck2.default)(this, _this31);
            return {
              className: _style.placeholderHeaderCls
            };
          }.bind(this),
          onCell: function onCell() {
            (0, _newArrowCheck2.default)(this, _this31);
            return {
              className: _style.placeholderCellCls
            };
          }.bind(this),
          render: function render() {
            (0, _newArrowCheck2.default)(this, _this31);
            return null;
          }.bind(this)
        });
      }

      return newColumns;
    }.bind(this);

    _this2.getTableDom = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      return document.querySelector("[data-table-id=\"".concat(_this2.tableId, "\"]"));
    }.bind(this);

    _this2.getContentDom = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      return _this2.getTableDom().querySelector(".".concat(_style.contentCls));
    }.bind(this);

    _this2.getBodyDom = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      return _this2.getTableDom().querySelector(".".concat(_style.bodyCls));
    }.bind(this);

    _this2.getRowDom = function (rowKey) {
      (0, _newArrowCheck2.default)(this, _this3);
      return _this2.getTableDom().querySelector("tr[data-row-key=\"".concat(rowKey, "\"]"));
    }.bind(this);

    _this2.getRowDomByIndex = function (rowIndex) {
      (0, _newArrowCheck2.default)(this, _this3);
      return _this2.getTableDom().querySelector("tr[data-row-index=\"".concat(rowIndex, "\"]"));
    }.bind(this);

    _this2.__dragEnterCounter = null;

    _this2.initDrag = function (source) {
      (0, _newArrowCheck2.default)(this, _this3);
      _this2.__dragEnterCounter = 0;

      _this2.unsetDragOver(source, source);
    }.bind(this);

    _this2.setDraggable = function (e) {
      (0, _newArrowCheck2.default)(this, _this3);
      var rowKey = e.currentTarget.dataset['rowKey'];

      _this2.getRowDom(rowKey).setAttribute('draggable', true);
    }.bind(this);

    _this2.unsetDraggable = function (e) {
      (0, _newArrowCheck2.default)(this, _this3);
      var rowKey = e.currentTarget.dataset['rowKey'];

      _this2.getRowDom(rowKey).setAttribute('draggable', false);
    }.bind(this);

    _this2.setDragOver = function (source, target) {
      (0, _newArrowCheck2.default)(this, _this3);

      var _this2$transformDomIn = _this2.transformDomIndex(source, target),
          _this2$transformDomIn2 = (0, _slicedToArray2.default)(_this2$transformDomIn, 2),
          sourceIndex = _this2$transformDomIn2[0],
          targetIndex = _this2$transformDomIn2[1];

      if (sourceIndex > targetIndex) targetIndex--;

      if (targetIndex >= 0) {
        var _this2$getRowDomByInd;

        (_this2$getRowDomByInd = _this2.getRowDomByIndex(targetIndex)) === null || _this2$getRowDomByInd === void 0 ? void 0 : _this2$getRowDomByInd.classList.add(_style.dragOverDownCls);
      } else {
        _this2.getRowDomByIndex(0).classList.add(_style.dragOverUpCls);
      }
    }.bind(this);

    _this2.unsetDragOver = function (source, target) {
      (0, _newArrowCheck2.default)(this, _this3);

      var _this2$transformDomIn3 = _this2.transformDomIndex(source, target),
          _this2$transformDomIn4 = (0, _slicedToArray2.default)(_this2$transformDomIn3, 2),
          sourceIndex = _this2$transformDomIn4[0],
          targetIndex = _this2$transformDomIn4[1];

      if (sourceIndex > targetIndex) targetIndex--;

      if (targetIndex >= 0) {
        var _this2$getRowDomByInd2;

        (_this2$getRowDomByInd2 = _this2.getRowDomByIndex(targetIndex)) === null || _this2$getRowDomByInd2 === void 0 ? void 0 : _this2$getRowDomByInd2.classList.remove(_style.dragOverDownCls);
      } else {
        _this2.getRowDomByIndex(0).classList.remove(_style.dragOverUpCls);
      }
    }.bind(this);

    _this2.onDragStart = function (source) {
      (0, _newArrowCheck2.default)(this, _this3);

      _this2.initDrag(source);
    }.bind(this);

    _this2.onDragEnd = function (source) {
      var _this36 = this;

      (0, _newArrowCheck2.default)(this, _this3);

      _this2.getTableDom().querySelectorAll('.uc-fe-table-row').forEach(function (row) {
        (0, _newArrowCheck2.default)(this, _this36);
        row.classList.remove(_style.dragOverDownCls);
        row.classList.remove(_style.dragOverUpCls);
      }.bind(this));

      _this2.initDrag(source);
    }.bind(this);

    _this2.onDragEnter = function (source, target) {
      (0, _newArrowCheck2.default)(this, _this3);
      _this2.__dragEnterCounter++;

      _this2.unsetDragOver(source, source);

      _this2.setDragOver(source, target);
    }.bind(this);

    _this2.onDragLeave = function (source, target) {
      (0, _newArrowCheck2.default)(this, _this3);
      _this2.__dragEnterCounter--;

      _this2.unsetDragOver(source, target); // drag out the table


      if (!_this2.__dragEnterCounter) _this2.setDragOver(source, source);
    }.bind(this);

    _this2.onDrop = function (source, target) {
      (0, _newArrowCheck2.default)(this, _this3);
      if (source === target) return;

      var _this2$transformDomIn5 = _this2.transformDomIndex(source, target),
          _this2$transformDomIn6 = (0, _slicedToArray2.default)(_this2$transformDomIn5, 2),
          sourceIndex = _this2$transformDomIn6[0],
          targetIndex = _this2$transformDomIn6[1];

      var dragSorting = _this2.getDragSorting();

      dragSorting === null || dragSorting === void 0 ? void 0 : dragSorting.onChange(sourceIndex, targetIndex);

      _this2.initDrag(source);
    }.bind(this);

    _this2.transformDomIndex = function (source, target) {
      (0, _newArrowCheck2.default)(this, _this3);
      return [+source.dataset['rowIndex'], +target.dataset['rowIndex']];
    }.bind(this);

    _this2.getPagination = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      var paginationS = _this2.state.pagination,
          paginationP = _this2.props.pagination;
      return paginationP === null ? null : _objectSpread(_objectSpread({}, paginationS), paginationP);
    }.bind(this);

    _this2.renderSearchInfo = function (option) {
      var _this37 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var filters = option.filters,
          searchValue = option.searchValue,
          total = option.total,
          locale = option.locale;
      var first = true;

      var renderLabel = function renderLabel(_ref7) {
        var _this38 = this;

        (0, _newArrowCheck2.default)(this, _this37);
        var value = _ref7.value,
            _ref7$column$filter = _ref7.column.filter,
            multiple = _ref7$column$filter.multiple,
            options = _ref7$column$filter.options;
        options = options.map(function (option) {
          (0, _newArrowCheck2.default)(this, _this38);
          return !(0, _isObject2.default)(option) ? {
            value: option,
            label: option
          } : option;
        }.bind(this));

        if (multiple) {
          var label = (0, _map2.default)(value, function (v) {
            var _this39 = this;

            (0, _newArrowCheck2.default)(this, _this38);
            var option = (0, _find2.default)(options, function (option) {
              (0, _newArrowCheck2.default)(this, _this39);
              return v === option.value;
            }.bind(this));
            return option && option.label;
          }.bind(this));
          var _first = true;
          return (0, _map2.default)(label, function (_label) {
            (0, _newArrowCheck2.default)(this, _this38);
            return _first ? [_first = false, _label] : [' | ', _label];
          }.bind(this));
        } else {
          var _option = (0, _find2.default)(options, function (option) {
            (0, _newArrowCheck2.default)(this, _this38);
            return value === option.value;
          }.bind(this));

          return _option && _option.label;
        }
      }.bind(this);

      return !(0, _isEmpty2.default)(filters) || searchValue ? /*#__PURE__*/_react.default.createElement("div", {
        key: "search-info",
        className: "".concat(_style.prefixCls, "-search-tip-wrap")
      }, /*#__PURE__*/_react.default.createElement(_Notice.default, {
        icon: null,
        closable: false,
        className: "".concat(_style.prefixCls, "-filter-notice")
      }, searchValue && /*#__PURE__*/_react.default.createElement("span", null, locale.search, locale.colon, searchValue, locale.semicolon), !(0, _isEmpty2.default)(filters) && /*#__PURE__*/_react.default.createElement("span", null, locale.filter, locale.colon, (0, _map2.default)(filters, function (filterInfo) {
        (0, _newArrowCheck2.default)(this, _this37);
        return first ? [first = false, renderLabel(filterInfo)] : [', ', renderLabel(filterInfo)];
      }.bind(this)), locale.semicolon), /*#__PURE__*/_react.default.createElement("span", null, locale.searchResult, locale.colon, total, locale.items, locale.semicolon), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
        className: "".concat(_style.prefixCls, "-reset-link"),
        onClick: _this2.clearFilter
      }, locale.reset)))) : null;
    }.bind(this);

    _this2.renderEmptyAndErrorInfo = function (option) {
      (0, _newArrowCheck2.default)(this, _this3);
      var dataSource = option.dataSource,
          emptyContent = option.emptyContent,
          errorContent = option.errorContent;

      if (errorContent) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: "tip-info",
          className: "".concat(_style.prefixCls, "-tip-wrap")
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "".concat(_style.prefixCls, "-error-content-wrap")
        }, errorContent));
      }

      if ((!dataSource || !dataSource.length) && emptyContent) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: "tip-info",
          className: "".concat(_style.prefixCls, "-tip-wrap")
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "".concat(_style.prefixCls, "-empty-content-wrap")
        }, emptyContent));
      }
    }.bind(this);

    _this2.renderTitle = function (option) {
      (0, _newArrowCheck2.default)(this, _this3);
      var title = _this2.props.title;
      return [title && /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_style.prefixCls, "-custom-title"),
        key: "custom"
      }, title()), _this2.renderSearchInfo(option)];
    }.bind(this);

    _this2.renderFooter = function (option) {
      (0, _newArrowCheck2.default)(this, _this3);
      return /*#__PURE__*/_react.default.createElement("div", null, _this2.renderEmptyAndErrorInfo(option));
    }.bind(this);

    _this2.onExpandHandler = function (expanded, record) {
      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$state$changedU = _this2.state.changedUnExpandedRowKeys,
          changedUnExpandedRowKeys = _this2$state$changedU === void 0 ? {} : _this2$state$changedU;
      var onExpand = _this2.props.onExpand;

      var rowKey = _this2.getRowKey(record);

      if (expanded) {
        delete changedUnExpandedRowKeys[rowKey];
      } else {
        changedUnExpandedRowKeys[rowKey] = true;
      }

      _this2.setState({
        changedUnExpandedRowKeys: changedUnExpandedRowKeys
      });

      if (onExpand) {
        onExpand(expanded, record);
      }
    }.bind(this);

    _this2.onRow = function (record, index) {
      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props4 = _this2.props,
          _this2$props4$onRow = _this2$props4.onRow,
          onRow = _this2$props4$onRow === void 0 ? noop : _this2$props4$onRow,
          contextMenu = _this2$props4.contextMenu;
      return _objectSpread(_objectSpread({}, onRow(record, index)), {}, {
        record: record,
        contextMenu: contextMenu
      });
    }.bind(this);

    _this2.savePopupContainer = function (_ref) {
      (0, _newArrowCheck2.default)(this, _this3);
      _this2.popupContainer = _ref;
    }.bind(this);

    _this2.getPopupContainer = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      return _this2.popupContainer;
    }.bind(this);

    _this2.state = {
      filters: _this2.calDefaultFilters(_props),
      filtersFromProps: _this2.calFiltersFromProps(_props),
      order: null,
      selectedRowKeyMap: {},
      flatDataSourceKeys: [],
      indeterminateSelectedRowKeyMap: {},
      parentSelectedRowKeys: [],
      columnConfig: _props.defaultColumnConfig,
      searchValue: ''
    };
    _this2.tableId = "uc_table_uid_".concat(uid++); // init pagination

    var _pagination = _props.pagination;

    if ((0, _isObject2.default)(_pagination)) {
      _this2.state.pagination = {
        current: 'defaultCurrent' in _pagination ? _pagination.defaultCurrent : 1,
        pageSize: 'defaultPageSize' in _pagination ? _pagination.defaultPageSize : 10
      };
    } else {
      _this2.state.pagination = {
        current: 1,
        pageSize: 10
      };
    } // init selectedRowKeyMap from rowSelection


    var _rowSelection = _props.rowSelection,
        _dataSource = _props.dataSource;
    var _selectedRowKeyMap = _this2.state.selectedRowKeyMap;

    if ((0, _isObject2.default)(_rowSelection)) {
      if ('selectedRowKeys' in _rowSelection) {
        (0, _each2.default)(_rowSelection.selectedRowKeys, function (key) {
          (0, _newArrowCheck2.default)(this, _this3);
          return _selectedRowKeyMap[key] = true;
        }.bind(this));
      } else if ('defaultSelectedRowKeys' in _rowSelection) {
        (0, _each2.default)(_rowSelection.defaultSelectedRowKeys, function (key) {
          (0, _newArrowCheck2.default)(this, _this3);
          return _selectedRowKeyMap[key] = true;
        }.bind(this));
      }

      _this2.initRenderRowSelectionDate({
        rowSelection: _rowSelection
      });
    } // init order


    if ('order' in _props) {
      var order = _this2.getOrder(_props.order, _props.columns);

      _this2.state.order = order;
    } else if ('defaultOrder' in _props) {
      var _order = _this2.getOrder(_props.defaultOrder, _props.columns);

      _this2.state.order = _order;
    }

    _this2.check(_props);

    return _this2;
  }

  (0, _createClass2.default)(Table, [{
    key: "initLinkageRowSelectionMap",
    value: function initLinkageRowSelectionMap(nowSelectedRowKeyMap, checked, key, flatDataSourceKeys, indeterminateSelectedRowKeyMap) {
      var _this40 = this;

      // 半选状态
      var indeterminate = _objectSpread({}, indeterminateSelectedRowKeyMap); // 子勾选状态变更 ，通过兄弟节点状态推断父勾选状态，存储修改父状态的map


      var childrenKeysAllChecked = {}; // 父勾选变更，子状态同步变更，存储子的map

      var parentKeyCheckedMap = {}; // 选中的key

      var record = flatDataSourceKeys.find(function (record) {
        (0, _newArrowCheck2.default)(this, _this40);
        return String(record.key) == String(key);
      }.bind(this)); // 禁用需要剔除的key

      var disabledItems = this.initDisabledOfRow(flatDataSourceKeys);
      indeterminate[String(record.key)] = false; // 子被动全选

      if (record && record.childrenKeys && record.childrenKeys.length > 0) {
        record.childrenKeys.forEach(function (childKey) {
          (0, _newArrowCheck2.default)(this, _this40);
          parentKeyCheckedMap[childKey] = checked;
          indeterminate[String(childKey)] = false;
        }.bind(this));
      } // 父被动状态


      function changeParentChecked(record, checked, disabledItems) {
        var _this41 = this;

        var mergeMap = _objectSpread(_objectSpread(_objectSpread({}, nowSelectedRowKeyMap), parentKeyCheckedMap), childrenKeysAllChecked);

        var truthyKeys = Object.keys(mergeMap).filter(function (key) {
          (0, _newArrowCheck2.default)(this, _this41);
          return Boolean(mergeMap[key]);
        }.bind(this));
        var filterChildrenKeys = record.childrenKeys.filter(function (x) {
          (0, _newArrowCheck2.default)(this, _this41);
          return !disabledItems.includes(x);
        }.bind(this));

        if (record && checked) {
          if (filterChildrenKeys.every(function (x) {
            (0, _newArrowCheck2.default)(this, _this41);
            return truthyKeys.includes(x);
          }.bind(this))) {
            childrenKeysAllChecked[record.key] = true;
            indeterminate[String(record.key)] = false;
          } else {
            childrenKeysAllChecked[record.key] = false;
            indeterminate[String(record.key)] = true;
          }
        }

        if (record && !checked) {
          if (filterChildrenKeys.every(function (x) {
            (0, _newArrowCheck2.default)(this, _this41);
            return !truthyKeys.includes(x);
          }.bind(this))) {
            childrenKeysAllChecked[record.key] = false;
            indeterminate[String(record.key)] = false;
          } else {
            childrenKeysAllChecked[record.key] = false;
            indeterminate[String(record.key)] = true;
          }
        }

        if (record.parent) {
          changeParentChecked(record.parent, checked, disabledItems);
        }
      }

      if (record.parent) {
        changeParentChecked(record.parent, checked, disabledItems);
      }

      disabledItems.forEach(function (key) {
        (0, _newArrowCheck2.default)(this, _this40);
        indeterminate[String(key)] = false;
      }.bind(this));

      var mergeMap = _objectSpread(_objectSpread(_objectSpread({}, nowSelectedRowKeyMap), parentKeyCheckedMap), childrenKeysAllChecked);

      Object.keys(mergeMap).forEach(function (key) {
        (0, _newArrowCheck2.default)(this, _this40);

        if (disabledItems.includes(key)) {
          mergeMap[String(key)] = false;
        }
      }.bind(this));
      return {
        mergeMap: mergeMap,
        indeterminate: indeterminate
      };
    }
  }, {
    key: "initDisabledOfRow",
    value: function initDisabledOfRow(flatDataSourceKeys) {
      var _this42 = this;

      var rowSelection = this.props.rowSelection;

      if (!rowSelection.getDisabledOfRow) {
        return [];
      }

      var needFilterData = (0, _toConsumableArray2.default)(flatDataSourceKeys);
      needFilterData = (0, _filter2.default)(needFilterData, function (item) {
        (0, _newArrowCheck2.default)(this, _this42);
        return rowSelection.getDisabledOfRow(item.record);
      }.bind(this)); // 父禁用逻辑
      // function getDisabledOfRow(record, result = []) {
      //     result.push(record.key);
      //     if (record.parent) {
      //         getDisabledOfRow(record.parent, result);
      //     }
      //     return result;
      // }

      var allDisableItems = needFilterData.reduce(function (p, item) {
        (0, _newArrowCheck2.default)(this, _this42);
        // const keys = getDisabledOfRow(item, []);
        // return [...keys, ...item.childrenKeys];
        return [].concat((0, _toConsumableArray2.default)(p), [item.key], (0, _toConsumableArray2.default)(item.childrenKeys));
      }.bind(this), []);
      return allDisableItems;
    }
  }, {
    key: "render",
    value: function render() {
      var _this43 = this;

      /* eslint-disable no-unused-vars */
      var _this$props = this.props,
          _p = _this$props.pagination,
          _d = _this$props.dataSource,
          _c = _this$props.columns,
          rowSelection = _this$props.rowSelection,
          onRowSelect = _this$props.onRowSelect,
          contextMenu = _this$props.contextMenu,
          emptyContent = _this$props.emptyContent,
          errorContent = _this$props.errorContent,
          className = _this$props.className,
          style = _this$props.style,
          expandedRowRender = _this$props.expandedRowRender,
          expandIconAsCell = _this$props.expandIconAsCell,
          expandIconColumnIndex = _this$props.expandIconColumnIndex,
          defaultExpandAllRows = _this$props.defaultExpandAllRows,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? noop : _this$props$title,
          _this$props$footer = _this$props.footer,
          footer = _this$props$footer === void 0 ? noop : _this$props$footer,
          columnResizable = _this$props.columnResizable,
          locale = _this$props.locale,
          hideExpandIcon = _this$props.hideExpandIcon,
          _this$props$onRow = _this$props.onRow,
          onRow = _this$props$onRow === void 0 ? noop : _this$props$onRow,
          components = _this$props.components,
          onExpand = _this$props.onExpand,
          zebraCrossing = _this$props.zebraCrossing,
          columnPlaceholder = _this$props.columnPlaceholder,
          tableLayout = _this$props.tableLayout,
          scroll = _this$props.scroll,
          customStyle = _this$props.customStyle,
          _dragSorting = _this$props.dragSorting,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded2);

      if (emptyContent === undefined) {
        emptyContent = /*#__PURE__*/_react.default.createElement(_Notice.default, {
          closable: false
        }, locale.emptyTip);
      }
      /* eslint-enable no-unused-vars */


      var pagination = this.getPagination();
      var _this$state = this.state,
          filters = _this$state.filters,
          filtersFromProps = _this$state.filtersFromProps,
          searchValue = _this$state.searchValue,
          columnConfig = _this$state.columnConfig;
      var finalFilters = this.mergeFilters(filters, filtersFromProps, _c);

      var _this$getDataSource = this.getDataSource(finalFilters),
          dataSource = _this$getDataSource.dataSource,
          total = _this$getDataSource.total;

      if (pagination && 'total' in pagination) {
        total = pagination.total;
      }

      var columns = this.getColumns(dataSource, finalFilters); // 默认展开所有行

      var defaultExpandAllRowsProps = !defaultExpandAllRows ? null : function () {
        (0, _newArrowCheck2.default)(this, _this43);
        var _this$state$changedUn = this.state.changedUnExpandedRowKeys,
            changedUnExpandedRowKeys = _this$state$changedUn === void 0 ? {} : _this$state$changedUn;
        var expandedRowKeys = this.getExpandedRowKeys(dataSource, changedUnExpandedRowKeys);
        return {
          expandedRowKeys: expandedRowKeys
        };
      }.bind(this)();
      var dragSorting = this.getDragSorting();
      return /*#__PURE__*/_react.default.createElement(_DragWrap.default, {
        draggable: !!dragSorting,
        onDragStart: this.onDragStart,
        onDragEnd: this.onDragEnd,
        onDrop: this.onDrop,
        onDragEnter: this.onDragEnter,
        onDragLeave: this.onDragLeave
      }, /*#__PURE__*/_react.default.createElement(_ContainerContext.InheritProvider, {
        value: {
          getPopupContainer: this.getPopupContainer
        }
      }, /*#__PURE__*/_react.default.createElement(TableContext.Provider, {
        value: {
          columns: _c,
          columnConfig: columnConfig,
          onColumnConfigChange: this.onColumnConfigChange,
          handleSearch: this.handleSearch,
          locale: locale
        }
      }, /*#__PURE__*/_react.default.createElement(_style.TableWrap, {
        className: className,
        style: style,
        hideExpandIcon: hideExpandIcon,
        zebraCrossing: zebraCrossing,
        customStyle: customStyle,
        "data-table-id": this.tableId
      }, /*#__PURE__*/_react.default.createElement(_style.PopupContainer, {
        ref: this.savePopupContainer
      }), /*#__PURE__*/_react.default.createElement(_rcTable.default, (0, _extends2.default)({
        defaultExpandAllRows: defaultExpandAllRows
      }, defaultExpandAllRowsProps, {
        onExpand: this.onExpandHandler
      }, rest, {
        scroll: scroll,
        tableLayout: tableLayout ? tableLayout : scroll && scroll.x ? 'fixed' : undefined,
        prefixCls: _style.prefixCls,
        data: dataSource,
        columns: columns,
        onRow: this.onRow,
        components: (0, _extend2.default)({}, components, _objectSpread({
          body: {
            row: _TableRow.default
          }
        }, columnResizable ? {
          header: {
            cell: _ResizableTH.default
          }
        } : {})),
        emptyText: null,
        expandIconAsCell: !!expandedRowRender || expandIconAsCell,
        expandedRowRender: expandedRowRender,
        expandIconColumnIndex: expandIconColumnIndex === undefined ? columns[0] && columns[0].key === 'table_row_selection' ? 1 : 0 : expandIconColumnIndex,
        title: function () {
          (0, _newArrowCheck2.default)(this, _this43);
          return this.renderTitle({
            filters: finalFilters,
            searchValue: searchValue,
            total: total,
            locale: locale
          });
        }.bind(this),
        footer: function () {
          (0, _newArrowCheck2.default)(this, _this43);
          return this.renderFooter({
            dataSource: _d,
            emptyContent: emptyContent,
            errorContent: errorContent
          });
        }.bind(this)
      })), footer(), pagination === null ? null : /*#__PURE__*/_react.default.createElement(_Pagination.default, (0, _extends2.default)({
        size: "sm",
        total: total,
        hideOnSinglePage: false,
        showQuickJumper: true,
        showSizeChanger: true
      }, pagination, {
        className: "".concat(_style.prefixCls, "-pagination"),
        onChange: function (current, pageSize) {
          (0, _newArrowCheck2.default)(this, _this43);
          this.setState({
            pagination: {
              current: current,
              pageSize: pageSize
            }
          });
          pagination.onChange && pagination.onChange(current, pageSize);
        }.bind(this),
        onPageSizeChange: function (current, pageSize) {
          (0, _newArrowCheck2.default)(this, _this43);
          this.setState({
            pagination: {
              current: current,
              pageSize: pageSize
            }
          });
          pagination.onPageSizeChange && pagination.onPageSizeChange(current, pageSize);
        }.bind(this),
        onAdvise: function (current, pageSize) {
          (0, _newArrowCheck2.default)(this, _this43);
          this.setState({
            pagination: {
              current: current,
              pageSize: pageSize
            }
          });
          pagination.onAdvise && pagination.onAdvise(current, pageSize);
        }.bind(this)
      }))))));
    }
  }]);
  return Table;
}(_react.Component), _class2.propTypes = {
  /** 分页组件的配置，传入null为隐藏分页 */
  pagination: _propTypes.default.object,

  /** 数据源 */
  dataSource: _propTypes.default.array,

  /** 表列信息，具体属性参考 columns 事例 */
  columns: _propTypes.default.array.isRequired,

  /**
   * 启用后会创建一个无宽度的空列，用作宽度占位，占位后宽度溢出便不会导致表格列被压缩，多出的宽度会被空列占用。
   * 占位列 column.key 为 table\_column\_width\_placeholder，使用中需注意避免重复 key
   */
  columnPlaceholder: _propTypes.default.bool,

  /** 表列配置项，非受控 */
  defaultColumnConfig: _propTypes.default.object,

  /** 表列配置修改回调 */
  onColumnConfigChange: _propTypes.default.func,

  /** 额外表信息渲染 */
  expandedRowRender: _propTypes.default.func,

  /** 额外表展开按钮是否独立占据一格，data有children时有效 */
  expandIconAsCell: _propTypes.default.bool,

  /** 展开按钮的塞入的column index，expandIconAsCell为false时生效 */
  expandIconColumnIndex: _propTypes.default.number,

  /** 隐藏扩展列按钮 */
  hideExpandIcon: _propTypes.default.bool,

  /** 默认展开项，非受控 */
  defaultExpandedRowKeys: _propTypes.default.array,

  /** 展开项，受控 */
  expandedRowKeys: _propTypes.default.array,

  /** 是否默认展开所有列 */
  defaultExpandAllRows: _propTypes.default.bool,

  /** 展开事件 */
  onExpandedRowsChange: _propTypes.default.func,

  /** 展开按钮点击事件 */
  onExpand: _propTypes.default.func,

  /**
   * 设置行props
   * @argument record - 行数据
   * @argument index - 行当前翻页中的index 不可作为key使用 不建议使用
   */
  onRow: _propTypes.default.func,

  /** 设置表头props
   * @argument record - 行数据
   * @argument index - 表头行的index 表示存在分组时(column.children)的表头层级
   */
  onHeaderRow: _propTypes.default.func,

  /**
   * 列表可选选项配置.
   * column.key 为 table\_row\_selection，使用中需注意避免重复 key
   */
  rowSelection: _propTypes.default.oneOfType([_propTypes.default.shape({
    /** 选框是否为 fixed */
    fixed: _propTypes.default.bool,

    /** 选中项变化回调 */
    onChange: _propTypes.default.func,

    /** 默认当前选中项，uncontrolled */
    defaultSelectedRowKeys: _propTypes.default.array,

    /** 当前选中项，controlled */
    selectedRowKeys: _propTypes.default.array,

    /** 获取当前行选中禁用状态 */
    getDisabledOfRow: _propTypes.default.func,

    /**
     * 是否多选
     * @default true
     */
    multiple: _propTypes.default.bool,

    /**
     * 多选选中时的提示，bottom 为显示在下方
     * @default true
     */
    selectedTip: _propTypes.default.oneOf([true, false, 'bottom']),

    /** 是否禁用 */
    disabled: _propTypes.default.bool,

    /**
     * 需配合 columns.children 使用，控制是否开启父子联动，默认关闭
     * @default false
     */
    linkage: _propTypes.default.bool
  }), _propTypes.default.oneOf([true])]),

  /** 拖拽排序 */
  dragSorting: _propTypes.default.oneOfType([_propTypes.default.oneOf([true]), _propTypes.default.shape({
    fixed: _propTypes.default.bool,
    // (record, fromIndex, toIndex) => void
    onChange: _propTypes.default.func
  })]),

  /**
   * 列表选项变化回调
   * @deprecated - 请使用rowSelection.onChange来替换
   */
  onRowSelect: _propTypes.default.func,

  /** 是否显示表头 */
  showHeader: _propTypes.default.bool,

  /** 是否可拖拽调节表格列大小 */
  columnResizable: _propTypes.default.bool,

  /** 头部内容 */
  title: _propTypes.default.func,

  /** 底部内容 */
  footer: _propTypes.default.func,

  /** 无数据时的展示内容 */
  emptyContent: _propTypes.default.node,

  /** 报错信息 */
  errorContent: _propTypes.default.node,

  /** 如何搜索 */
  handleSearch: _propTypes.default.func,

  /** 自定义样式 */
  customStyle: _propTypes.default.shape({
    outerPadding: _propTypes.default.string
  }),

  /** 滚动配置 */
  scroll: _propTypes.default.shape({
    /** x轴滚动配置，为true自动展开并滚动，为数字时设定表单的宽度 */
    x: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number]),

    /** y轴滚动配置，为数字时设定表单的高度 */
    y: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number]),

    /** table body 滚动时的回调 */
    onScroll: _propTypes.default.func
  }),

  /** 表格布局，当 scroll.x 有值时为 fixed，其它时候默认为 auto，可自行覆盖 */
  tableLayout: _propTypes.default.oneOf(['auto', 'fixed']),

  /** 定义如何获取每行的键值 */
  rowKey: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),

  /** 是否有斑马线，存在子表格时，斑马线样式可能会错乱 */
  zebraCrossing: _propTypes.default.bool,

  /** 自定义表格组件，慎用 */
  components: _propTypes.default.shape({
    header: _propTypes.default.shape({
      cell: _propTypes.default.any
    })
  }),

  /** 默认排序设置，key 为 column key，state 为升序(asc)或降序(desc) */
  defaultOrder: _propTypes.default.shape({
    key: _propTypes.default.string,
    state: _propTypes.default.oneOf(['desc', 'asc'])
  }),

  /** 受控排序设置，key 为 column key，state 为升序(asc)或降序(desc) */
  order: _propTypes.default.shape({
    key: _propTypes.default.string,
    state: _propTypes.default.oneOf(['desc', 'asc'])
  }),

  /**
   * 表格的筛选等条件变更时的回调
   * @param condition - 变更的数据
   * @param condition.order - 排序
   * @param condition.filter - 筛选
   * @param condition.searchValue - 搜索
   */
  onConditionChange: _propTypes.default.func,

  /**
   * order、filter、searchValue、pagination变化时表格内部不处理
   */
  doNotHandleCondition: _propTypes.default.bool,

  /**
   * 右键菜单
   * @param record - 该行的记录值
   */
  contextMenu: _propTypes.default.func,

  /** @ignore */
  className: _propTypes.default.string,

  /** @ignore */
  style: _propTypes.default.object,

  /** @ignore */
  locale: _propTypes.default.object
}, _class2.defaultProps = {
  pagination: {},
  dataSource: [],
  columns: [],
  defaultColumnConfig: {},
  onColumnConfigChange: function onColumnConfigChange() {
    (0, _newArrowCheck2.default)(this, _this);
  }.bind(void 0),
  handleSearch: function handleSearch(record, searchValue) {
    (0, _newArrowCheck2.default)(this, _this);
    return (0, _map2.default)(record).join('').indexOf(searchValue) >= 0;
  }.bind(void 0),
  customStyle: {},
  rowKey: 'key'
}, _temp)) || _class);
var _default = Table;
exports.default = _default;