"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));

var _react = _interopRequireWildcard(require("react"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var contextProps = 'ITEM_DECORATOR_CONTEXT_PROPS';

var itemDecorator = function itemDecorator(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref$checkedName = _ref.checkedName,
      checkedName = _ref$checkedName === void 0 ? 'checked' : _ref$checkedName,
      _ref$onChangeName = _ref.onChangeName,
      onChangeName = _ref$onChangeName === void 0 ? 'onChange' : _ref$onChangeName,
      StoreContext = _ref.StoreContext;
  return function (Item) {
    (0, _newArrowCheck2.default)(this, _this2);

    if (!StoreContext) {
      console.error('Must have StoreContext');
    }

    var ItemWrappedComponent = /*#__PURE__*/function (_Component) {
      (0, _inherits2.default)(ItemWrappedComponent, _Component);

      var _super = _createSuper(ItemWrappedComponent);

      function ItemWrappedComponent(props) {
        var _this4 = this;

        var _this3;

        (0, _classCallCheck2.default)(this, ItemWrappedComponent);
        _this3 = _super.call(this, props);

        _this3.onChange = function (checked) {
          var storeContext = _this3.props[contextProps];

          if (storeContext && storeContext.selectable) {
            storeContext.toggleItem((0, _assertThisInitialized2.default)(_this3), checked);
          }

          if (_this3.props[onChangeName]) {
            var _this3$props;

            for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              rest[_key - 1] = arguments[_key];
            }

            (_this3$props = _this3.props)[onChangeName].apply(_this3$props, [checked].concat(rest));
          }
        };

        _this3.getChecked = function () {
          (0, _newArrowCheck2.default)(this, _this4);
          var storeContext = _this3.props[contextProps];

          if (storeContext) {
            return storeContext.getItemSelected((0, _assertThisInitialized2.default)(_this3));
          } else {
            return _this3.props[checkedName];
          }
        }.bind(this);

        _this3.uid = (0, _uniqueId2.default)("uc-".concat(Item.name.toLowerCase(), "-"));
        return _this3;
      }

      (0, _createClass2.default)(ItemWrappedComponent, [{
        key: "componentWillMount",
        value: function componentWillMount() {
          var storeContext = this.props[contextProps];

          if (storeContext) {
            storeContext.appendItem(this);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var storeContext = this.props[contextProps];

          if (storeContext) {
            storeContext.removeItem(this);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _ref2;

          var rest = (0, _extends2.default)({}, this.props);
          delete rest[contextProps];
          var storeContext = this.props[contextProps] || {};
          return /*#__PURE__*/_react.default.createElement(Item, (0, _extends2.default)({
            multiple: storeContext.multiple
          }, rest, (_ref2 = {}, (0, _defineProperty2.default)(_ref2, checkedName, this.getChecked()), (0, _defineProperty2.default)(_ref2, onChangeName, this.onChange), _ref2)));
        }
      }]);
      return ItemWrappedComponent;
    }(_react.Component);

    ItemWrappedComponent.displayName = "ItemWrapped".concat(Item.name);
    return /*#__PURE__*/function (_Component2) {
      (0, _inherits2.default)(ItemWrappedComponentWithContext, _Component2);

      var _super2 = _createSuper(ItemWrappedComponentWithContext);

      function ItemWrappedComponentWithContext() {
        (0, _classCallCheck2.default)(this, ItemWrappedComponentWithContext);
        return _super2.apply(this, arguments);
      }

      (0, _createClass2.default)(ItemWrappedComponentWithContext, [{
        key: "render",
        value: function render() {
          var _this5 = this;

          return /*#__PURE__*/_react.default.createElement(StoreContext.Consumer, null, function (context) {
            (0, _newArrowCheck2.default)(this, _this5);
            return /*#__PURE__*/_react.default.createElement(ItemWrappedComponent, (0, _extends2.default)({}, (0, _defineProperty2.default)({}, contextProps, context), this.props));
          }.bind(this));
        }
      }]);
      return ItemWrappedComponentWithContext;
    }(_react.Component);
  }.bind(this);
}.bind(void 0);

var _default = itemDecorator;
exports.default = _default;