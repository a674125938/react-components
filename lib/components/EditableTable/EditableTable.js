"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Table = _interopRequireDefault(require("../../components/Table"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _style = require("./style");

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var noop = function noop() {
  (0, _newArrowCheck2.default)(this, _this);
}.bind(void 0);

var EditableTable = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(EditableTable, _PureComponent);

  var _super = _createSuper(EditableTable);

  function EditableTable() {
    var _this3 = this;

    var _this2;

    (0, _classCallCheck2.default)(this, EditableTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    _this2.onRemove = function (record) {
      (0, _newArrowCheck2.default)(this, _this3);
      var rowDeletion = _this2.props.rowDeletion;
      var _rowDeletion$onDelete = rowDeletion.onDelete,
          onDelete = _rowDeletion$onDelete === void 0 ? noop : _rowDeletion$onDelete;
      onDelete(record);
    }.bind(this);

    _this2.onAdd = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      var addition = _this2.props.addition;
      var _addition$onAdd = addition.onAdd,
          onAdd = _addition$onAdd === void 0 ? noop : _addition$onAdd;
      onAdd();
    }.bind(this);

    _this2.renderFooter = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props = _this2.props,
          footer = _this2$props.footer,
          addition = _this2$props.addition;
      var tip = addition.tip,
          disabled = addition.disabled,
          hidden = addition.hidden;

      var _disabled = !addition || disabled;

      return [hidden ? null : /*#__PURE__*/_react.default.createElement(_style.AddBar, {
        key: "add",
        onClick: _disabled ? null : _this2.onAdd,
        disabled: _disabled
      }, tip ? [/*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        className: _style.btnCls,
        type: "plus",
        key: "add_btn",
        size: "16px"
      }), /*#__PURE__*/_react.default.createElement(_style.AddTip, {
        key: "add_tip"
      }, tip)] : /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        className: _style.btnCls,
        type: "plus",
        size: "20px"
      })), footer()];
    }.bind(this);

    _this2.getColumns = function () {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props2 = _this2.props,
          columns = _this2$props2.columns,
          rowDeletion = _this2$props2.rowDeletion;
      if (!rowDeletion) return columns;
      var getDisabledOfRow = rowDeletion.getDisabledOfRow,
          fixed = rowDeletion.fixed;
      var removeColumn = {
        title: null,
        key: '__editable_table_remove',
        width: 40,
        fixed: fixed,
        render: function render(v, record) {
          var _this5 = this;

          (0, _newArrowCheck2.default)(this, _this4);
          return getDisabledOfRow && getDisabledOfRow(record) ? null : /*#__PURE__*/_react.default.createElement(_style.RemoveBtn, {
            type: "cross",
            onClick: function () {
              (0, _newArrowCheck2.default)(this, _this5);
              return _this2.onRemove(record);
            }.bind(this),
            size: "16px"
          });
        }.bind(this)
      };
      return [].concat((0, _toConsumableArray2.default)(columns), [removeColumn]);
    }.bind(this);

    return _this2;
  }

  (0, _createClass2.default)(EditableTable, [{
    key: "render",
    value: function render() {
      var rest = (0, _extends2.default)({}, this.props);
      return /*#__PURE__*/_react.default.createElement(_Table.default, (0, _extends2.default)({}, rest, {
        pagination: null,
        footer: this.renderFooter,
        columns: this.getColumns(),
        emptyContent: null
      }));
    }
  }]);
  return EditableTable;
}(_react.PureComponent);

EditableTable.propTypes = {
  /**
   * @ignore
   */
  footer: _propTypes.default.func,

  /**
   * @ignore
   */
  columns: _propTypes.default.array.isRequired,

  /**
   * 是否可添加（false 时禁用添加栏）
   */
  addition: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    /**
     * 添加回调
     */
    onAdd: _propTypes.default.func,

    /**
     * 添加区域的自定义提示信息
     */
    tip: _propTypes.default.node,

    /**
     * 是否禁用
     */
    disabled: _propTypes.default.bool,

    /**
     * 是否隐藏
     */
    hidden: _propTypes.default.bool
  })]),

  /**
   * 是否可删除（false 隐藏删除按钮）
   */
  rowDeletion: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    /**
     * 列删除回调
     * @param record 删除列数据
     */
    onDelete: _propTypes.default.func,

    /**
     * 获取当前列的是否禁用删除
     * @param record 当前列数据
     */
    getDisabledOfRow: _propTypes.default.func,

    /** 是否固定列 */
    fixed: _propTypes.default.bool
  })])
};
EditableTable.defaultProps = {
  footer: noop,
  addition: true,
  rowDeletion: true
};
var _default = EditableTable;
exports.default = _default;