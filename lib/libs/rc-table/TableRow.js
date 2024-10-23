"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _miniStore = require("mini-store");

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _this2 = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TableRow = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TableRow, _React$Component);

  var _super = _createSuper(TableRow);

  function TableRow(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TableRow);
    _this = _super.call(this, props);
    _this.shouldRender = props.visible;
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(TableRow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.shouldRender) {
        this.saveRowRef();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !!(this.props.visible || nextProps.visible);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.shouldRender && !this.rowRef) {
        this.saveRowRef();
      }
    }
  }, {
    key: "setExpanedRowHeight",
    value: function setExpanedRowHeight() {
      var _this$props = this.props,
          store = _this$props.store,
          rowKey = _this$props.rowKey;

      var _store$getState = store.getState(),
          expandedRowsHeight = _store$getState.expandedRowsHeight;

      var height = this.rowRef.getBoundingClientRect().height;
      expandedRowsHeight = _objectSpread(_objectSpread({}, expandedRowsHeight), {}, (0, _defineProperty2.default)({}, rowKey, height));
      store.setState({
        expandedRowsHeight: expandedRowsHeight
      });
    }
  }, {
    key: "setRowHeight",
    value: function setRowHeight() {
      var _this$props2 = this.props,
          store = _this$props2.store,
          rowKey = _this$props2.rowKey;

      var _store$getState2 = store.getState(),
          fixedColumnsBodyRowsHeight = _store$getState2.fixedColumnsBodyRowsHeight;

      var height = this.rowRef.getBoundingClientRect().height;
      store.setState({
        fixedColumnsBodyRowsHeight: _objectSpread(_objectSpread({}, fixedColumnsBodyRowsHeight), {}, (0, _defineProperty2.default)({}, rowKey, height))
      });
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var _this$props3 = this.props,
          height = _this$props3.height,
          visible = _this$props3.visible;

      if (height && height !== this.style.height) {
        this.style = _objectSpread(_objectSpread({}, this.style), {}, {
          height: height
        });
      }

      if (!visible && !this.style.display) {
        this.style = _objectSpread(_objectSpread({}, this.style), {}, {
          display: 'none'
        });
      }

      return this.style;
    }
  }, {
    key: "saveRowRef",
    value: function saveRowRef() {
      // eslint-disable-next-line react/no-find-dom-node
      this.rowRef = _reactDom.default.findDOMNode(this);
      var _this$props4 = this.props,
          fixed = _this$props4.fixed,
          expandedRow = _this$props4.expandedRow,
          ancestorKeys = _this$props4.ancestorKeys;

      if (!fixed && expandedRow) {
        this.setExpanedRowHeight();
      }

      if (!fixed && ancestorKeys.length >= 0) {
        this.setRowHeight();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.shouldRender) {
        return null;
      }

      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          columns = _this$props5.columns,
          record = _this$props5.record,
          rowKey = _this$props5.rowKey,
          index = _this$props5.index,
          onRow = _this$props5.onRow,
          indent = _this$props5.indent,
          indentSize = _this$props5.indentSize,
          height = _this$props5.height,
          visible = _this$props5.visible,
          components = _this$props5.components,
          hasExpandIcon = _this$props5.hasExpandIcon,
          renderExpandIcon = _this$props5.renderExpandIcon,
          renderExpandIconCell = _this$props5.renderExpandIconCell;
      var BodyRow = components.body.row;
      var BodyCell = components.body.cell;
      var className = this.props.className;
      var cells = [];
      renderExpandIconCell(cells);

      for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        cells.push( /*#__PURE__*/_react.default.createElement(_TableCell.default, {
          prefixCls: prefixCls,
          record: record,
          indentSize: indentSize,
          indent: indent,
          index: index,
          column: column,
          key: column.key || column.dataIndex,
          expandIcon: hasExpandIcon(i) && renderExpandIcon(),
          component: BodyCell
        }));
      }

      var rowClassName = "".concat(prefixCls, " ").concat(className, " ").concat(prefixCls, "-level-").concat(indent).trim();
      var rowProps = onRow(record, index);
      var customStyle = rowProps ? rowProps.style : {};
      var style = {
        height: height
      };

      if (!visible) {
        style.display = 'none';
      }

      style = _objectSpread(_objectSpread({}, style), customStyle);
      return /*#__PURE__*/_react.default.createElement(BodyRow, (0, _extends2.default)({
        className: rowClassName
      }, rowProps, {
        style: style,
        "data-row-key": rowKey,
        "data-row-index": index
      }), cells);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.visible || !prevState.visible && nextProps.visible) {
        return {
          shouldRender: true,
          visible: nextProps.visible
        };
      }

      return {
        visible: nextProps.visible
      };
    }
  }]);
  return TableRow;
}(_react.default.Component);

TableRow.propTypes = {
  onRow: _propTypes.default.func,
  record: _propTypes.default.object,
  prefixCls: _propTypes.default.string,
  columns: _propTypes.default.array,
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  index: _propTypes.default.number,
  rowKey: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  className: _propTypes.default.string,
  indent: _propTypes.default.number,
  indentSize: _propTypes.default.number,
  hasExpandIcon: _propTypes.default.func,
  visible: _propTypes.default.bool.isRequired,
  store: _propTypes.default.object.isRequired,
  fixed: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  renderExpandIcon: _propTypes.default.func,
  renderExpandIconCell: _propTypes.default.func,
  components: _propTypes.default.any,
  expandedRow: _propTypes.default.bool,
  ancestorKeys: _propTypes.default.array.isRequired
};
TableRow.defaultProps = {
  onRow: function onRow() {},
  onHover: function onHover() {},
  hasExpandIcon: function hasExpandIcon() {},
  renderExpandIcon: function renderExpandIcon() {},
  renderExpandIconCell: function renderExpandIconCell() {}
};

function getRowHeight(state, props) {
  var expandedRowsHeight = state.expandedRowsHeight,
      fixedColumnsBodyRowsHeight = state.fixedColumnsBodyRowsHeight;
  var fixed = props.fixed,
      rowKey = props.rowKey;

  if (!fixed) {
    return null;
  }

  if (expandedRowsHeight[rowKey]) {
    return expandedRowsHeight[rowKey];
  }

  if (fixedColumnsBodyRowsHeight[rowKey]) {
    return fixedColumnsBodyRowsHeight[rowKey];
  }

  return null;
}

(0, _reactLifecyclesCompat.polyfill)(TableRow);

var _default = (0, _miniStore.connect)(function (state, props) {
  var _this3 = this;

  (0, _newArrowCheck2.default)(this, _this2);
  var expandedRowKeys = state.expandedRowKeys;
  var ancestorKeys = props.ancestorKeys;
  var visible = ancestorKeys.length === 0 || ancestorKeys.every(function (k) {
    (0, _newArrowCheck2.default)(this, _this3);
    return ~expandedRowKeys.indexOf(k);
  }.bind(this));
  return {
    visible: visible,
    height: getRowHeight(state, props)
  };
}.bind(void 0))(TableRow);

exports.default = _default;