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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _miniStore = require("mini-store");

var _componentClasses = _interopRequireDefault(require("component-classes"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _utils = require("./utils");

var _ColumnManager = _interopRequireDefault(require("./ColumnManager"));

var _HeadTable = _interopRequireDefault(require("./HeadTable"));

var _BodyTable = _interopRequireDefault(require("./BodyTable"));

var _ExpandableTable = _interopRequireDefault(require("./ExpandableTable"));

var _this6 = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Table = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Table);
    _this = _super.call(this, props);
    _this.state = {};

    _this.getRowKey = function (record, index) {
      (0, _newArrowCheck2.default)(this, _this2);
      var rowKey = _this.props.rowKey;
      var key = typeof rowKey === 'function' ? rowKey(record, index) : record && record[rowKey];
      (0, _utils.warningOnce)(key !== undefined, 'Each record in table should have a unique `key` prop,' + 'or set `rowKey` to an unique primary key.');
      return key === undefined ? index : key;
    }.bind(this);

    _this.handleWindowResize = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.setScrollPositionClassName();
    }.bind(this);

    _this.handleBodyScrollLeft = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      // Fix https://github.com/ant-design/ant-design/issues/7635
      if (e.currentTarget !== e.target) {
        return;
      }

      var target = e.target;

      var _assertThisInitialize = (0, _assertThisInitialized2.default)(_this),
          headTable = _assertThisInitialize.headTable,
          bodyTable = _assertThisInitialize.bodyTable;

      if (target.scrollLeft !== _this.lastScrollLeft) {
        _this.setScrollPositionClassName();

        if (_this.useFixedHeader()) {
          if (target === bodyTable && headTable) {
            headTable.scrollLeft = target.scrollLeft;
          } else if (target === headTable && bodyTable) {
            bodyTable.scrollLeft = target.scrollLeft;
          }
        }
      } // Remember last scrollLeft for scroll direction detecting.


      _this.lastScrollLeft = target.scrollLeft;
    }.bind(this);

    _this.handleBodyScroll = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.handleBodyScrollLeft(e);
    }.bind(this);

    _this.saveRef = function (name) {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      return function (node) {
        (0, _newArrowCheck2.default)(this, _this3);
        _this[name] = node;
      }.bind(this);
    }.bind(this);

    _this.useFixedHeader = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props = _this.props,
          useFixedHeader = _this$props.useFixedHeader,
          scroll = _this$props.scroll;
      return useFixedHeader || scroll && scroll.y;
    }.bind(this);

    _this.columnManager = new _ColumnManager.default(props.columns);
    _this.store = (0, _miniStore.create)({
      fixedColumnsHeadRowsHeight: [],
      fixedColumnsBodyRowsHeight: {}
    });
    _this.debouncedWindowResize = (0, _utils.debounce)(_this.handleWindowResize, 150);
    return _this;
  }

  (0, _createClass2.default)(Table, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _components$header, _components$header2, _components$header3, _components$body, _components$body2, _components$body3;

      var components = this.props.components || {};
      return {
        table: {
          props: this.props,
          columnManager: this.columnManager,
          saveRef: this.saveRef,
          components: {
            table: components.table || 'table',
            header: {
              wrapper: ((_components$header = components.header) === null || _components$header === void 0 ? void 0 : _components$header.wrapper) || 'thead',
              row: ((_components$header2 = components.header) === null || _components$header2 === void 0 ? void 0 : _components$header2.row) || 'tr',
              cell: ((_components$header3 = components.header) === null || _components$header3 === void 0 ? void 0 : _components$header3.cell) || 'th'
            },
            body: {
              wrapper: ((_components$body = components.body) === null || _components$body === void 0 ? void 0 : _components$body.wrapper) || 'tbody',
              row: ((_components$body2 = components.body) === null || _components$body2 === void 0 ? void 0 : _components$body2.row) || 'tr',
              cell: ((_components$body3 = components.body) === null || _components$body3 === void 0 ? void 0 : _components$body3.cell) || 'td'
            }
          }
        }
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // when table changes to empty, reset scrollLeft
      if (prevProps.data.length > 0 && this.props.data.length === 0 && this.hasScrollX()) {
        this.resetScrollX();
      } // update scroll position


      if (this.props.columns !== prevState.columns) {
        this.setScrollPositionClassName();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.debouncedWindowResize);

      if (this.debouncedWindowResize) {
        this.debouncedWindowResize.cancel();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScrollPositionClassName();
      window.addEventListener('resize', this.debouncedWindowResize);
    }
  }, {
    key: "setScrollPosition",
    value: function setScrollPosition(position) {
      this.scrollPosition = position;

      if (this.tableNode) {
        var prefixCls = this.props.prefixCls;
        (0, _componentClasses.default)(this.tableNode).remove(new RegExp("^".concat(prefixCls, "-scroll-position-.+$"))).add("".concat(prefixCls, "-scroll-position-").concat(position));
      }
    }
  }, {
    key: "setScrollPositionClassName",
    value: function setScrollPositionClassName() {
      var node = this.bodyTable;
      var scrollToLeft = node.scrollLeft === 0;
      var scrollToRight = node.scrollLeft + 1 >= node.children[0].getBoundingClientRect().width - node.getBoundingClientRect().width;

      if (scrollToLeft && scrollToRight) {
        this.setScrollPosition('both');
      } else if (scrollToLeft) {
        this.setScrollPosition('left');
      } else if (scrollToRight) {
        this.setScrollPosition('right');
      } else if (this.scrollPosition !== 'middle') {
        this.setScrollPosition('middle');
      }
    }
  }, {
    key: "resetScrollX",
    value: function resetScrollX() {
      if (this.headTable) {
        this.headTable.scrollLeft = 0;
      }

      if (this.bodyTable) {
        this.bodyTable.scrollLeft = 0;
      }
    }
  }, {
    key: "hasScrollX",
    value: function hasScrollX() {
      var _this$props$scroll = this.props.scroll,
          scroll = _this$props$scroll === void 0 ? {} : _this$props$scroll;
      return 'x' in scroll;
    }
  }, {
    key: "renderMainTable",
    value: function renderMainTable() {
      var _this$props2 = this.props,
          scroll = _this$props2.scroll,
          tableLayout = _this$props2.tableLayout;
      var table = [this.renderTable({
        columns: this.columnManager.groupedColumns(),
        onScroll: scroll.onScroll,
        tableLayout: tableLayout
      }), this.renderEmptyText(), this.renderFooter()];
      return table;
    }
  }, {
    key: "renderTable",
    value: function renderTable(options) {
      var _this4 = this;

      var columns = options.columns,
          onScroll = options.onScroll,
          tableLayout = options.tableLayout;

      var headTable = /*#__PURE__*/_react.default.createElement(_HeadTable.default, {
        key: "head",
        columns: columns,
        tableClassName: "",
        handleBodyScrollLeft: this.handleBodyScrollLeft,
        expander: this.expander,
        tableLayout: tableLayout
      });

      var bodyTable = /*#__PURE__*/_react.default.createElement(_BodyTable.default, {
        key: "body",
        columns: columns,
        tableClassName: "",
        getRowKey: this.getRowKey,
        handleBodyScroll: function (e) {
          (0, _newArrowCheck2.default)(this, _this4);
          this.handleBodyScroll(e);
          onScroll && onScroll(e);
        }.bind(this),
        expander: this.expander,
        tableLayout: tableLayout
      });

      return [headTable, bodyTable];
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this$props3 = this.props,
          title = _this$props3.title,
          prefixCls = _this$props3.prefixCls;
      return title ? /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "-title"),
        key: "title"
      }, title(this.props.data)) : null;
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this$props4 = this.props,
          footer = _this$props4.footer,
          prefixCls = _this$props4.prefixCls;
      return footer ? /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "-footer"),
        key: "footer"
      }, footer(this.props.data)) : null;
    }
  }, {
    key: "renderEmptyText",
    value: function renderEmptyText() {
      var _this$props5 = this.props,
          emptyText = _this$props5.emptyText,
          prefixCls = _this$props5.prefixCls,
          data = _this$props5.data;

      if (data.length) {
        return null;
      }

      var emptyClassName = "".concat(prefixCls, "-placeholder");
      return /*#__PURE__*/_react.default.createElement("div", {
        className: emptyClassName,
        key: "emptyText"
      }, typeof emptyText === 'function' ? emptyText() : emptyText);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var props = this.props;
      var prefixCls = props.prefixCls;

      if (this.state.columns) {
        this.columnManager.reset(props.columns);
      }

      var className = props.prefixCls;

      if (props.className) {
        className += " ".concat(props.className);
      }

      if (this.useFixedHeader()) {
        className += " ".concat(prefixCls, "-fixed-header");
      }

      return /*#__PURE__*/_react.default.createElement(_miniStore.Provider, {
        store: this.store
      }, /*#__PURE__*/_react.default.createElement(_ExpandableTable.default, (0, _extends2.default)({}, props, {
        columnManager: this.columnManager,
        getRowKey: this.getRowKey
      }), function (expander) {
        (0, _newArrowCheck2.default)(this, _this5);
        this.expander = expander;
        return /*#__PURE__*/_react.default.createElement("div", {
          ref: this.saveRef('tableNode'),
          className: className,
          style: props.style
        }, this.renderTitle(), /*#__PURE__*/_react.default.createElement("div", {
          className: "".concat(prefixCls, "-content")
        }, this.renderMainTable()));
      }.bind(this)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.columns && nextProps.columns !== prevState.columns) {
        return {
          columns: nextProps.columns
        };
      }

      return null;
    }
  }]);
  return Table;
}(_react.default.Component);

Table.propTypes = _objectSpread({
  data: _propTypes.default.array,
  useFixedHeader: _propTypes.default.bool,
  columns: _propTypes.default.array,
  prefixCls: _propTypes.default.string,
  bodyStyle: _propTypes.default.object,
  style: _propTypes.default.object,
  rowKey: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  rowClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  onRow: _propTypes.default.func,
  onHeaderRow: _propTypes.default.func,
  showHeader: _propTypes.default.bool,
  title: _propTypes.default.func,
  footer: _propTypes.default.func,
  emptyText: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  scroll: _propTypes.default.object,
  rowRef: _propTypes.default.func,
  tableLayout: _propTypes.default.oneOf(['fixed', 'auto']),
  components: _propTypes.default.shape({
    table: _propTypes.default.any,
    header: _propTypes.default.shape({
      wrapper: _propTypes.default.any,
      row: _propTypes.default.any,
      cell: _propTypes.default.any
    }),
    body: _propTypes.default.shape({
      wrapper: _propTypes.default.any,
      row: _propTypes.default.any,
      cell: _propTypes.default.any
    })
  })
}, _ExpandableTable.default.propTypes);
Table.childContextTypes = {
  table: _propTypes.default.any,
  components: _propTypes.default.any
};
Table.defaultProps = {
  data: [],
  useFixedHeader: false,
  rowKey: 'key',
  rowClassName: function rowClassName() {
    (0, _newArrowCheck2.default)(this, _this6);
    return '';
  }.bind(void 0),
  onRow: function onRow() {},
  onHeaderRow: function onHeaderRow() {},
  prefixCls: 'rc-table',
  bodyStyle: {},
  style: {},
  showHeader: true,
  scroll: {},
  rowRef: function rowRef() {
    (0, _newArrowCheck2.default)(this, _this6);
    return null;
  }.bind(void 0),
  emptyText: function emptyText() {
    (0, _newArrowCheck2.default)(this, _this6);
    return 'No Data';
  }.bind(void 0)
};
(0, _reactLifecyclesCompat.polyfill)(Table);
var _default = Table;
exports.default = _default;