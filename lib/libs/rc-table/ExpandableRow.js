"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _miniStore = require("mini-store");

var _ExpandIcon = _interopRequireDefault(require("./ExpandIcon"));

var _this3 = void 0;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ExpandableRow = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ExpandableRow, _React$Component);

  var _super = _createSuper(ExpandableRow);

  function ExpandableRow() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, ExpandableRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.hasExpandIcon = function (columnIndex) {
      (0, _newArrowCheck2.default)(this, _this2);
      var expandRowByClick = _this.props.expandRowByClick;
      return !_this.expandIconAsCell && !expandRowByClick && columnIndex === _this.expandIconColumnIndex;
    }.bind(this);

    _this.handleExpandChange = function (record, event) {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props = _this.props,
          onExpandedChange = _this$props.onExpandedChange,
          expanded = _this$props.expanded,
          rowKey = _this$props.rowKey;

      if (_this.expandable) {
        onExpandedChange(!expanded, record, event, rowKey);
      }
    }.bind(this);

    _this.handleRowClick = function (record, index, event) {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props2 = _this.props,
          expandRowByClick = _this$props2.expandRowByClick,
          onRowClick = _this$props2.onRowClick;

      if (expandRowByClick) {
        _this.handleExpandChange(record, event);
      }

      if (onRowClick) {
        onRowClick(record, index, event);
      }
    }.bind(this);

    _this.renderExpandIcon = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props3 = _this.props,
          prefixCls = _this$props3.prefixCls,
          expanded = _this$props3.expanded,
          record = _this$props3.record,
          needIndentSpaced = _this$props3.needIndentSpaced;
      return /*#__PURE__*/_react.default.createElement(_ExpandIcon.default, {
        expandable: _this.expandable,
        prefixCls: prefixCls,
        onExpand: _this.handleExpandChange,
        needIndentSpaced: needIndentSpaced,
        expanded: expanded,
        record: record
      });
    }.bind(this);

    _this.renderExpandIconCell = function (cells) {
      (0, _newArrowCheck2.default)(this, _this2);

      if (!_this.expandIconAsCell) {
        return;
      }

      var prefixCls = _this.props.prefixCls;
      cells.push( /*#__PURE__*/_react.default.createElement("td", {
        className: "".concat(prefixCls, "-expand-icon-cell"),
        key: "rc-table-expand-icon-cell"
      }, _this.renderExpandIcon()));
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(ExpandableRow, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleDestroy();
    }
  }, {
    key: "handleDestroy",
    value: function handleDestroy() {
      var _this$props4 = this.props,
          onExpandedChange = _this$props4.onExpandedChange,
          rowKey = _this$props4.rowKey,
          record = _this$props4.record;

      if (this.expandable) {
        onExpandedChange(false, record, null, rowKey, true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          childrenColumnName = _this$props5.childrenColumnName,
          expandedRowRender = _this$props5.expandedRowRender,
          indentSize = _this$props5.indentSize,
          record = _this$props5.record,
          fixed = _this$props5.fixed;
      this.expandIconAsCell = fixed !== 'right' ? this.props.expandIconAsCell : false;
      this.expandIconColumnIndex = fixed !== 'right' ? this.props.expandIconColumnIndex : -1;
      var childrenData = record && record[childrenColumnName];
      this.expandable = !!(childrenData || expandedRowRender);
      var expandableRowProps = {
        indentSize: indentSize,
        onRowClick: this.handleRowClick,
        hasExpandIcon: this.hasExpandIcon,
        renderExpandIcon: this.renderExpandIcon,
        renderExpandIconCell: this.renderExpandIconCell
      };
      return this.props.children(expandableRowProps);
    }
  }]);
  return ExpandableRow;
}(_react.default.Component);

ExpandableRow.propTypes = {
  prefixCls: _propTypes.default.string.isRequired,
  rowKey: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  fixed: _propTypes.default.oneOf([true, 'left', 'right']),
  record: _propTypes.default.object.isRequired,
  indentSize: _propTypes.default.number,
  needIndentSpaced: _propTypes.default.bool.isRequired,
  expandRowByClick: _propTypes.default.bool,
  expanded: _propTypes.default.bool.isRequired,
  expandIconAsCell: _propTypes.default.bool,
  expandIconColumnIndex: _propTypes.default.number,
  childrenColumnName: _propTypes.default.string,
  expandedRowRender: _propTypes.default.func,
  onExpandedChange: _propTypes.default.func.isRequired,
  onRowClick: _propTypes.default.func,
  children: _propTypes.default.func.isRequired
};

var _default = (0, _miniStore.connect)(function (_ref, _ref2) {
  (0, _newArrowCheck2.default)(this, _this3);
  var expandedRowKeys = _ref.expandedRowKeys;
  var rowKey = _ref2.rowKey;
  return {
    expanded: !!~expandedRowKeys.indexOf(rowKey)
  };
}.bind(void 0))(ExpandableRow);

exports.default = _default;