"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _selectable = require("../../hooks/selectable");

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _CheckboxContext = _interopRequireDefault(require("./CheckboxContext"));

var _style = require("./style");

var _excluded = ["value", "defaultValue", "onChange", "options", "disabled", "size", "styleType", "children"],
    _excluded2 = ["label"];

var _this = void 0;

var Group = function Group(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _value = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? [] : _ref$defaultValue,
      _onChange = _ref.onChange,
      options = _ref.options,
      disabled = _ref.disabled,
      size = _ref.size,
      styleType = _ref.styleType,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useUncontrolled = (0, _useUncontrolled3.default)(_value, defaultValue, _onChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      value = _useUncontrolled2[0],
      onChange = _useUncontrolled2[1];

  var _useGroup = (0, _selectable.useGroup)(value, onChange),
      valueMap = _useGroup.valueMap,
      toggleSelect = _useGroup.toggleSelect,
      addItem = _useGroup.addItem,
      removeItem = _useGroup.removeItem;

  var renderOptions = function renderOptions() {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);

    if (options) {
      var _options$map;

      return (_options$map = options.map) === null || _options$map === void 0 ? void 0 : _options$map.call(options, function (option) {
        (0, _newArrowCheck2.default)(this, _this3);
        var label = option.label,
            restOptionProps = (0, _objectWithoutProperties2.default)(option, _excluded2);
        return /*#__PURE__*/_react.default.createElement(_Checkbox.default, (0, _extends2.default)({
          key: option.value
        }, restOptionProps), label !== undefined ? label : option.value);
      }.bind(this));
    } else {
      return children;
    }
  }.bind(this);

  return /*#__PURE__*/_react.default.createElement(_CheckboxContext.default.Provider, {
    value: {
      disabled: disabled,
      size: size,
      styleType: styleType,
      valueMap: valueMap,
      toggleSelect: toggleSelect,
      addItem: addItem,
      removeItem: removeItem
    }
  }, /*#__PURE__*/_react.default.createElement(_style.CheckboxGroupWrap, rest, renderOptions()));
}.bind(void 0);

Group.propTypes = {
  value: _propTypes.default.array,
  defaultValue: _propTypes.default.array,
  onChange: _propTypes.default.func,
  options: _propTypes.default.array,
  disabled: _propTypes.default.bool,
  children: _propTypes.default.node
};

var _default = /*#__PURE__*/_react.default.memo(Group);

exports.default = _default;