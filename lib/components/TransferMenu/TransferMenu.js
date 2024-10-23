"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transfer = _interopRequireDefault(require("../../components/Transfer"));

var _Menu = _interopRequireDefault(require("../../components/Menu"));

var _style = require("./style");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TransferMenu = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(TransferMenu, _PureComponent);

  var _super = _createSuper(TransferMenu);

  function TransferMenu() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, TransferMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.renderList = function (_ref) {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var dataSource = _ref.dataSource,
          selectedKeys = _ref.selectedKeys,
          onChange = _ref.onChange,
          disabled = _ref.disabled;
      var renderItem = _this.props.renderItem;
      return /*#__PURE__*/_react.default.createElement(_style.MenuWrap, null, /*#__PURE__*/_react.default.createElement(_Menu.default, {
        className: _style.menuCls,
        multiple: true,
        showSelectAll: true,
        block: true,
        disabled: disabled,
        onChange: onChange,
        selectedKeys: selectedKeys
      }, dataSource.map(function (item) {
        (0, _newArrowCheck2.default)(this, _this3);
        return /*#__PURE__*/_react.default.createElement(_Menu.default.Item, {
          key: item.key,
          itemKey: item.key,
          disabled: item.disabled
        }, renderItem ? renderItem(item) : item.label);
      }.bind(this))));
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(TransferMenu, [{
    key: "render",
    value: function render() {
      var rest = (0, _extends2.default)({}, this.props);
      return /*#__PURE__*/_react.default.createElement(_Transfer.default, (0, _extends2.default)({}, rest, {
        renderList: this.renderList
      }));
    }
  }]);
  return TransferMenu;
}(_react.PureComponent);

TransferMenu.propTypes = _objectSpread(_objectSpread({}, _Transfer.default.propTypes), {}, {
  /** 渲染项 */
  renderItem: _propTypes.default.func
});
var _default = TransferMenu;
exports.default = _default;