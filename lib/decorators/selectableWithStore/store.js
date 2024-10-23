"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _findIndex2 = _interopRequireDefault(require("lodash/findIndex"));

var _each2 = _interopRequireDefault(require("lodash/each"));

var _indexOf2 = _interopRequireDefault(require("lodash/indexOf"));

var _find2 = _interopRequireDefault(require("lodash/find"));

var _filter2 = _interopRequireDefault(require("lodash/filter"));

var _keys2 = _interopRequireDefault(require("lodash/keys"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SimpleStore = _interopRequireDefault(require("../../stores/SimpleStore"));

var _excluded = ["innerRef", "onItemsChange"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var noop = function noop() {
  (0, _newArrowCheck2.default)(this, _this);
}.bind(void 0);

var storeDecorator = function storeDecorator(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref$valueName = _ref.valueName,
      valueName = _ref$valueName === void 0 ? 'value' : _ref$valueName,
      _ref$onChangeName = _ref.onChangeName,
      onChangeName = _ref$onChangeName === void 0 ? 'onChange' : _ref$onChangeName,
      _ref$childValueName = _ref.childValueName,
      childValueName = _ref$childValueName === void 0 ? 'value' : _ref$childValueName,
      StoreContext = _ref.StoreContext,
      getItemValue = _ref.getItemValue,
      _ref$getValue = _ref.getValue,
      getValue = _ref$getValue === void 0 ? function (v) {
    (0, _newArrowCheck2.default)(this, _this2);
    return v;
  }.bind(this) : _ref$getValue,
      _ref$setValue = _ref.setValue,
      setValue = _ref$setValue === void 0 ? function (v) {
    (0, _newArrowCheck2.default)(this, _this2);
    return v;
  }.bind(this) : _ref$setValue,
      _ref$callOnChangeBefo = _ref.callOnChangeBeforeMounted,
      callOnChangeBeforeMounted = _ref$callOnChangeBefo === void 0 ? false : _ref$callOnChangeBefo;
  return function (Parent) {
    var _this3 = this,
        _class,
        _temp;

    (0, _newArrowCheck2.default)(this, _this2);

    if (!StoreContext) {
      console.error('Must pass in StoreContext');
    }

    if (!getItemValue) {
      getItemValue = function getItemValue(item) {
        (0, _newArrowCheck2.default)(this, _this3);
        return item.props[childValueName] === undefined ? item.uid : item.props[childValueName];
      }.bind(this);
    }

    return _temp = _class = /*#__PURE__*/function (_Component) {
      (0, _inherits2.default)(StoreWrappedComponent, _Component);

      var _super = _createSuper(StoreWrappedComponent);

      function StoreWrappedComponent(props) {
        var _this5 = this;

        var _this4;

        (0, _classCallCheck2.default)(this, StoreWrappedComponent);
        _this4 = _super.call(this, props);

        _this4.handleValueChange = function (value) {
          (0, _newArrowCheck2.default)(this, _this5);
          var selectable = _this4.props.selectable;

          if (!selectable) {
            return;
          }

          _this4.handleOnChange(value);
        }.bind(this);

        _this4.handleItemsChange = function (items) {
          (0, _newArrowCheck2.default)(this, _this5);

          _this4.store.setState({
            items: items
          });

          _this4.onItemsChange(items);

          _this4.forceUpdate();
        }.bind(this);

        _this4.onItemsChange = (0, _debounce2.default)(function (items) {
          (0, _newArrowCheck2.default)(this, _this5);
          var onItemsChange = _this4.props.onItemsChange;
          onItemsChange(items);
        }.bind(this));
        _this4.handleOnChange = noop;
        _this4._handleOnChange = (0, _debounce2.default)(function (value) {
          (0, _newArrowCheck2.default)(this, _this5);
          var multiple = _this4.props.multiple;
          var onChange = _this4.props[onChangeName] || noop;

          if (multiple) {
            onChange(setValue(value), _this4.getAllSelectedStatus(setValue(value)));
          } else {
            onChange(setValue(value));
          }
        }.bind(this));

        _this4.getCurrentValue = function (copy) {
          (0, _newArrowCheck2.default)(this, _this5);
          var value = getValue(_this4.props[valueName]) || [];
          return copy ? (0, _toConsumableArray2.default)(value) : value;
        }.bind(this);

        _this4.getAllSelectedStatus = function (value) {
          (0, _newArrowCheck2.default)(this, _this5);

          var _this4$store$getState = _this4.store.getState(),
              items = _this4$store$getState.items;

          var itemLength = (0, _keys2.default)(items).length;
          var valueLength = value.length;
          return valueLength === 0 ? 'NONE' : valueLength === itemLength ? 'ALL' : 'PART';
        }.bind(this);

        _this4.getAllSelectedStatusOfMiddle = function (middle) {
          var _this6 = this;

          (0, _newArrowCheck2.default)(this, _this5);

          var value = _this4.getCurrentValue();

          var _this4$store$getState2 = _this4.store.getState(),
              items = _this4$store$getState2.items;

          var middleUid = middle.uid;
          var middleItems = (0, _filter2.default)(items, function (item) {
            (0, _newArrowCheck2.default)(this, _this6);
            return item.parents[middleUid];
          }.bind(this));
          var middleValue = (0, _filter2.default)(value, function (v) {
            var _this7 = this;

            (0, _newArrowCheck2.default)(this, _this6);
            return (0, _find2.default)(middleItems, function (item) {
              (0, _newArrowCheck2.default)(this, _this7);
              return getItemValue(item.item) === v;
            }.bind(this));
          }.bind(this));
          var itemLength = middleItems.length;
          var valueLength = middleValue.length;
          return valueLength === 0 ? 'NONE' : valueLength === itemLength ? 'ALL' : 'PART';
        }.bind(this);

        _this4.appendItem = function (item) {
          var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var uid = item.uid;

          if (!uid) {
            return console.error('Must have uid for store item');
          }

          var _this4$store$getState3 = _this4.store.getState(),
              items = _this4$store$getState3.items;

          if (uid in items) {
            return console.error("Can't have same uid form diffent items: ".concat(uid));
          }

          _this4.handleItemsChange(_objectSpread(_objectSpread({}, items), {}, (0, _defineProperty2.default)({}, uid, {
            item: item,
            parents: parents
          })));
        };

        _this4.removeItem = function (item) {
          (0, _newArrowCheck2.default)(this, _this5);
          var uid = item.uid;

          if (!uid) {
            return console.error('Must have uid for store item');
          }

          var _this4$store$getState4 = _this4.store.getState(),
              items = _this4$store$getState4.items;

          if (!(uid in items)) {
            return console.error("There is no this item: ".concat(uid));
          }

          items = _objectSpread({}, items);
          delete items[uid];

          _this4.handleItemsChange(items);
        }.bind(this);

        _this4.toggleItem = function (item, selected) {
          (0, _newArrowCheck2.default)(this, _this5);
          var uid = item.uid;

          if (!uid) {
            return console.error('Must have uid for store item');
          }

          var itemValue = getItemValue(item);
          var multiple = _this4.props.multiple;

          var currentSelected = _this4.getItemSelected(item);

          if (multiple) {
            var value = _this4.getCurrentValue(true);

            var itemIndex = (0, _indexOf2.default)(value, itemValue);

            if (currentSelected && !selected) {
              value.splice(itemIndex, 1);

              _this4.handleValueChange(value);
            } else if (!currentSelected && selected) {
              value.push(itemValue);

              _this4.handleValueChange(value);
            }
          } else {
            if (currentSelected && !selected) {
              _this4.handleValueChange([]);
            } else if (!currentSelected && selected) {
              _this4.handleValueChange([itemValue]);
            }
          }
        }.bind(this);

        _this4.getItemSelected = function (item) {
          (0, _newArrowCheck2.default)(this, _this5);

          var value = _this4.getCurrentValue();

          var itemValue = getItemValue(item);
          var multiple = _this4.props.multiple;

          if (multiple) {
            return (0, _indexOf2.default)(value, itemValue) >= 0;
          } else {
            return !!value.length && value[0] === itemValue;
          }
        }.bind(this);

        _this4.selectAllOfMiddle = function (middle) {
          var _this8 = this;

          (0, _newArrowCheck2.default)(this, _this5);

          var value = _this4.getCurrentValue(true);

          var _this4$store$getState5 = _this4.store.getState(),
              items = _this4$store$getState5.items;

          var middleUid = middle.uid;
          var middleItems = (0, _filter2.default)(items, function (item) {
            (0, _newArrowCheck2.default)(this, _this8);
            return item.parents[middleUid];
          }.bind(this));
          (0, _each2.default)(middleItems, function (item) {
            (0, _newArrowCheck2.default)(this, _this8);
            var itemValue = getItemValue(item.item);

            if ((0, _indexOf2.default)(value, itemValue) === -1) {
              value.push(itemValue);
            }
          }.bind(this));

          _this4.handleValueChange(value);
        }.bind(this);

        _this4.unselectAllOfMiddle = function (middle) {
          var _this9 = this;

          (0, _newArrowCheck2.default)(this, _this5);

          var value = _this4.getCurrentValue(true);

          var _this4$store$getState6 = _this4.store.getState(),
              items = _this4$store$getState6.items;

          var middleUid = middle.uid;
          var middleItems = (0, _filter2.default)(items, function (item) {
            (0, _newArrowCheck2.default)(this, _this9);
            return item.parents[middleUid];
          }.bind(this));
          value = (0, _filter2.default)(value, function (v) {
            var _this10 = this;

            (0, _newArrowCheck2.default)(this, _this9);
            return (0, _findIndex2.default)(middleItems, function (item) {
              (0, _newArrowCheck2.default)(this, _this10);
              return getItemValue(item.item) === v;
            }.bind(this)) === -1;
          }.bind(this));

          _this4.handleValueChange(value);
        }.bind(this);

        _this4.store = new _SimpleStore.default({
          items: {}
        });

        if (callOnChangeBeforeMounted) {
          _this4.handleOnChange = _this4._handleOnChange;
        }

        return _this4;
      }

      (0, _createClass2.default)(StoreWrappedComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.handleOnChange = this._handleOnChange;
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.handleOnChange = noop;
        }
      }, {
        key: "render",
        value: function render() {
          /* eslint-disable-next-line no-unused-vars*/
          var _this$props = this.props,
              innerRef = _this$props.innerRef,
              onItemsChange = _this$props.onItemsChange,
              rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
          return /*#__PURE__*/_react.default.createElement(StoreContext.Provider, {
            value: {
              store: this.store,
              multiple: this.props.multiple,
              appendItem: this.appendItem,
              removeItem: this.removeItem,
              toggleItem: this.toggleItem,
              getItemSelected: this.getItemSelected,
              getAllSelectedStatusOfMiddle: this.getAllSelectedStatusOfMiddle,
              selectAllOfMiddle: this.selectAllOfMiddle,
              unselectAllOfMiddle: this.unselectAllOfMiddle,
              selectable: this.props.selectable
            }
          }, /*#__PURE__*/_react.default.createElement(Parent, (0, _extends2.default)({
            ref: innerRef
          }, rest)));
        }
      }]);
      return StoreWrappedComponent;
    }(_react.Component), _class.displayName = "StoreWrapped".concat(Parent.name), _class.propTypes = {
      multiple: _propTypes.default.bool,
      selectable: _propTypes.default.bool,
      innerRef: _propTypes.default.any,
      onItemsChange: _propTypes.default.func
    }, _class.defaultProps = {
      multiple: Parent.defaultProps && Parent.defaultProps.multiple,
      selectable: Parent.defaultProps && Parent.defaultProps.selectable,
      onItemsChange: noop
    }, _temp;
  }.bind(this);
}.bind(void 0);

var _default = storeDecorator;
exports.default = _default;