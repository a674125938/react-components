"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function isInvalidRenderCellText(text) {
  return text && ! /*#__PURE__*/_react.default.isValidElement(text) && Object.prototype.toString.call(text) === '[object Object]';
}

var TableCell = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TableCell, _React$Component);

  var _super = _createSuper(TableCell);

  function TableCell() {
    (0, _classCallCheck2.default)(this, TableCell);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TableCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          record = _this$props.record,
          indentSize = _this$props.indentSize,
          prefixCls = _this$props.prefixCls,
          indent = _this$props.indent,
          index = _this$props.index,
          expandIcon = _this$props.expandIcon,
          column = _this$props.column,
          BodyCell = _this$props.component;
      var dataIndex = column.dataIndex,
          render = column.render,
          _column$className = column.className,
          className = _column$className === void 0 ? '' : _column$className,
          offset = column.offset; // We should return undefined if no dataIndex is specified, but in order to
      // be compatible with object-path's behavior, we return the record object instead.

      var text;

      if (typeof dataIndex === 'number') {
        text = (0, _get.default)(record, dataIndex);
      } else if (!dataIndex || dataIndex.length === 0) {
        text = record;
      } else {
        text = (0, _get.default)(record, dataIndex);
      }

      var tdProps = {};
      var colSpan;
      var rowSpan;

      if (render) {
        text = render(text, record, index);

        if (isInvalidRenderCellText(text)) {
          tdProps = text.props || tdProps;
          colSpan = tdProps.colSpan;
          rowSpan = tdProps.rowSpan;
          text = text.children;
        }
      }

      if (column.onCell) {
        tdProps = _objectSpread(_objectSpread({}, tdProps), column.onCell(record));
      } // Fix https://github.com/ant-design/ant-design/issues/1202


      if (isInvalidRenderCellText(text)) {
        text = null;
      }

      var indentText = expandIcon ? /*#__PURE__*/_react.default.createElement("span", {
        style: {
          paddingLeft: "".concat(indentSize * indent, "px")
        },
        className: "".concat(prefixCls, "-indent indent-level-").concat(indent)
      }) : null;

      if (rowSpan === 0 || colSpan === 0) {
        return null;
      }

      var _tdProps = tdProps,
          _tdProps$style = _tdProps.style,
          style = _tdProps$style === void 0 ? {} : _tdProps$style,
          _className = _tdProps.className;
      style = _objectSpread({}, style);
      className = (0, _classnames.default)(className, _className);

      if (column.align) {
        style.textAlign = column.align;
      }

      if (column.fixed && offset != null) {
        className = (0, _classnames.default)(className, "".concat(prefixCls, "-cell-fixed"));
        style.position = 'sticky';
        style.zIndex = 2;

        if (column.fixed === 'left') {
          style.left = offset;

          if (column.latestLeftFixed) {
            className = (0, _classnames.default)(className, "".concat(prefixCls, "-cell-fixed-left-latest"));
          }
        } else if (column.fixed === 'right') {
          style.right = offset;

          if (column.firstRightFixed) {
            className = (0, _classnames.default)(className, "".concat(prefixCls, "-cell-fixed-right-first"));
          }
        }
      }

      return /*#__PURE__*/_react.default.createElement(BodyCell, (0, _extends2.default)({}, tdProps, {
        className: className,
        style: style
      }), indentText, expandIcon, text);
    }
  }]);
  return TableCell;
}(_react.default.Component);

exports.default = TableCell;
TableCell.propTypes = {
  record: _propTypes.default.object,
  prefixCls: _propTypes.default.string,
  index: _propTypes.default.number,
  indent: _propTypes.default.number,
  indentSize: _propTypes.default.number,
  column: _propTypes.default.object,
  expandIcon: _propTypes.default.node,
  component: _propTypes.default.any
};