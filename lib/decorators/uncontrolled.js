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

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _hoistStatics = _interopRequireDefault(require("../utils/hoistStatics"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var uncontrolledDecorator = function uncontrolledDecorator(option) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  return function (Child) {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);

    var _ref = option || {},
        _ref$valueName = _ref.valueName,
        valueName = _ref$valueName === void 0 ? 'value' : _ref$valueName,
        _ref$onChangeName = _ref.onChangeName,
        onChangeName = _ref$onChangeName === void 0 ? 'onChange' : _ref$onChangeName,
        _defaultValueName = _ref.defaultValueName;

    var defaultValueName = _defaultValueName || "default".concat(valueName.replace(/^\S/, function (s) {
      (0, _newArrowCheck2.default)(this, _this3);
      return s.toUpperCase();
    }.bind(this)));

    var onChangeNames = Array.isArray(onChangeName) ? onChangeName : [onChangeName]; // eslint-disable-next-line react/display-name

    var UncontrolledWrappedComponent = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      // controlled is fixed after constructor
      var isControlled = (0, _react.useMemo)(function () {
        (0, _newArrowCheck2.default)(this, _this4);
        return valueName in props;
      }.bind(this), [props]);

      var _useState = (0, _react.useState)(function () {
        (0, _newArrowCheck2.default)(this, _this4);
        return props[defaultValueName];
      }.bind(this)),
          _useState2 = (0, _slicedToArray2.default)(_useState, 2),
          value = _useState2[0],
          setValue = _useState2[1];

      var finalValue = isControlled ? props[valueName] : value;
      var onChanges = onChangeNames.map(function (onChangeName) {
        (0, _newArrowCheck2.default)(this, _this4);
        return props[onChangeName];
      }.bind(this));
      var onChangesProps = (0, _react.useMemo)(function () {
        var _this5 = this;

        (0, _newArrowCheck2.default)(this, _this4);
        var onChangesProps = {};
        onChangeNames.forEach(function (onChangeName) {
          (0, _newArrowCheck2.default)(this, _this5);

          onChangesProps[onChangeName] = function (v) {
            var onChange = props[onChangeName];
            if (!isControlled) setValue(v);

            for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              rest[_key - 1] = arguments[_key];
            }

            onChange === null || onChange === void 0 ? void 0 : onChange.apply(void 0, [v].concat(rest));
          };
        }.bind(this));
        return onChangesProps; // rebuild when one of onChange changed
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }.bind(this), [isControlled].concat((0, _toConsumableArray2.default)(onChanges)));
      var valueProps = (0, _defineProperty2.default)({}, valueName, finalValue); // ignore default value prop
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      var defaultValue = props[defaultValueName],
          restProps = (0, _objectWithoutProperties2.default)(props, [defaultValueName].map(_toPropertyKey));
      return /*#__PURE__*/_react.default.createElement(Child, (0, _extends2.default)({}, restProps, valueProps, onChangesProps, {
        ref: ref
      }));
    }.bind(this));

    (0, _hoistStatics.default)(UncontrolledWrappedComponent, Child);
    return UncontrolledWrappedComponent;
  }.bind(this);
}.bind(void 0);

var _default = uncontrolledDecorator;
exports.default = _default;