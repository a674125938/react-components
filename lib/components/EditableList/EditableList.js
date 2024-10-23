"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _localeConsumerDecorator = _interopRequireDefault(require("../../components/LocaleProvider/localeConsumerDecorator"));

var _Grid = require("../../components/Grid");

var _Button = _interopRequireDefault(require("../../components/Button"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _Combine = _interopRequireDefault(require("../../components/Combine"));

var _Size = _interopRequireDefault(require("../../interfaces/Size"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _style = require("./style");

var _this = void 0,
    _dec,
    _class,
    _class2,
    _temp;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var noop = function noop() {
  (0, _newArrowCheck2.default)(this, _this);
}.bind(void 0);

var colShape = {
  /** 栅格占位格数 */
  span: _propTypes.default.number,

  /** 栅格向右偏移格数，偏移占位 */
  offset: _propTypes.default.number,

  /** 栅格向左偏移格数，偏移不占位 */
  pull: _propTypes.default.number,

  /** 栅格向右偏移格数，偏移不占位 */
  push: _propTypes.default.number
};
var EditableList = (_dec = (0, _localeConsumerDecorator.default)({
  defaultLocale: _zh_CN.default,
  localeName: 'EditableList'
}), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(EditableList, _PureComponent);

  var _super = _createSuper(EditableList);

  function EditableList() {
    var _this3 = this;

    var _this2;

    (0, _classCallCheck2.default)(this, EditableList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    _this2.onAdd = function () {
      (0, _newArrowCheck2.default)(this, _this3);
      var addition = _this2.props.addition;
      var _addition$onAdd = addition.onAdd,
          onAdd = _addition$onAdd === void 0 ? noop : _addition$onAdd;
      onAdd();
    }.bind(this);

    _this2.onDelete = function (item) {
      (0, _newArrowCheck2.default)(this, _this3);
      var itemDeletion = _this2.props.itemDeletion;
      var _itemDeletion$onDelet = itemDeletion.onDelete,
          onDelete = _itemDeletion$onDelet === void 0 ? noop : _itemDeletion$onDelet;
      onDelete(item);
    }.bind(this);

    _this2.renderItem = function (item, latest) {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props = _this2.props,
          _this2$props$renderIt = _this2$props.renderItem,
          renderItem = _this2$props$renderIt === void 0 ? noop : _this2$props$renderIt,
          itemDeletion = _this2$props.itemDeletion,
          addition = _this2$props.addition,
          grid = _this2$props.grid,
          size = _this2$props.size;
      var getDisabledOfItem = itemDeletion.getDisabledOfItem;

      var _item = renderItem(item);

      var _action = /*#__PURE__*/_react.default.createElement(_Combine.default, {
        sharedProps: {
          size: size
        }
      }, !itemDeletion || getDisabledOfItem && getDisabledOfItem(item) ? null : /*#__PURE__*/_react.default.createElement(_Button.default, {
        onClick: function () {
          (0, _newArrowCheck2.default)(this, _this4);
          return _this2.onDelete(item);
        }.bind(this),
        shape: "square"
      }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        type: "minus"
      })), latest && addition && !addition.disabled && /*#__PURE__*/_react.default.createElement(_Button.default, {
        onClick: _this2.onAdd,
        shape: "square"
      }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        type: "plus"
      })));

      if (grid) {
        var _ref = grid || {},
            _ref$itemCol = _ref.itemCol,
            itemCol = _ref$itemCol === void 0 ? {
          span: 8
        } : _ref$itemCol,
            _ref$actionCol = _ref.actionCol,
            actionCol = _ref$actionCol === void 0 ? {
          span: 4
        } : _ref$actionCol;

        return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
          key: item.key,
          className: _style.liGridCls
        }, /*#__PURE__*/_react.default.createElement(_Grid.Col, (0, _extends2.default)({}, itemCol, {
          className: _style.itemCls
        }), _item), /*#__PURE__*/_react.default.createElement(_Grid.Col, (0, _extends2.default)({}, actionCol, {
          className: _style.actionCls
        }), _action));
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        key: item.key,
        className: _style.liCls
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _style.itemCls
      }, _item), /*#__PURE__*/_react.default.createElement("div", {
        className: _style.actionCls
      }, _action));
    }.bind(this);

    _this2.renderList = function () {
      var _this5 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props2 = _this2.props,
          _this2$props2$dataSou = _this2$props2.dataSource,
          dataSource = _this2$props2$dataSou === void 0 ? [] : _this2$props2$dataSou,
          addition = _this2$props2.addition,
          size = _this2$props2.size,
          locale = _this2$props2.locale;
      return !dataSource.length ? /*#__PURE__*/_react.default.createElement(_Button.default, {
        onClick: _this2.onAdd,
        disabled: !addition || addition.disabled,
        size: size
      }, locale.add) : dataSource.map(function (item, i) {
        (0, _newArrowCheck2.default)(this, _this5);
        return _this2.renderItem(item, i === dataSource.length - 1);
      }.bind(this));
    }.bind(this);

    return _this2;
  }

  (0, _createClass2.default)(EditableList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_style.ListWrap, null, this.renderList());
    }
  }]);
  return EditableList;
}(_react.PureComponent), _class2.propTypes = {
  /**
   * 数据列表
   */
  dataSource: _propTypes.default.array,

  /**
   * 数据渲染
   * @param item 数据
   */
  renderItem: _propTypes.default.func,

  /**
   * 使用 grid 布局
   */
  grid: _propTypes.default.shape({
    /**
     * item 的 col 配置
     */
    itemCol: _propTypes.default.shape(colShape),
    actionCol: _propTypes.default.shape(colShape)
  }),

  /**
   * 自带控件尺寸
   */
  size: _propTypes.default.oneOf(_Size.default),

  /**
   * 是否可添加（false 时禁用添加栏）
   */
  addition: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    /**
     * 添加回调
     */
    onAdd: _propTypes.default.func,

    /**
     * 是否禁用
     */
    disabled: _propTypes.default.bool
  })]),

  /**
   * 是否可删除（false 隐藏删除按钮）
   */
  itemDeletion: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    /**
     * 列删除回调
     * @param record 删除列数据
     */
    onDelete: _propTypes.default.func,

    /**
     * 获取当前列的是否禁用删除
     * @param record 当前列数据
     */
    getDisabledOfItem: _propTypes.default.func
  })]),

  /** @ignore */
  locale: _propTypes.default.object
}, _class2.defaultProps = {
  addition: true,
  itemDeletion: true,
  size: 'md'
}, _temp)) || _class);
var _default = EditableList;
exports.default = _default;