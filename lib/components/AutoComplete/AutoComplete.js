"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Input = _interopRequireDefault(require("../../components/Input"));

var _Popover = _interopRequireDefault(require("../../components/Popover"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _usePopoverConfig = _interopRequireDefault(require("../../hooks/usePopoverConfig"));

var _KeyCode = _interopRequireDefault(require("../../utils/KeyCode"));

var _Popup = _interopRequireDefault(require("./Popup"));

var _style = require("./style");

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AutoComplete = function AutoComplete(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _value = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
      _onChange = _ref.onChange,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      disabled = _ref.disabled,
      loading = _ref.loading,
      prefix = _ref.prefix,
      block = _ref.block,
      handleSearch = _ref.handleSearch,
      popoverProps = _ref.popoverProps,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      style = _ref.style,
      className = _ref.className,
      status = _ref.status,
      placeholder = _ref.placeholder,
      size = _ref.size;

  var _useUncontrolled = (0, _useUncontrolled3.default)(_value, defaultValue, _onChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      value = _useUncontrolled2[0],
      onChange = _useUncontrolled2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var list = (0, _react.useRef)(null);
  var onInputChange = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    onChange(e.target.value);
    setVisible(true);
  }.bind(this), [onChange]);
  var onKeyDown = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    var intercept = true;

    switch (e.keyCode) {
      case _KeyCode.default.ARROW_UP:
        list && list.current && list.current.moveUp();
        setVisible(true);
        break;

      case _KeyCode.default.ARROW_DOWN:
        list && list.current && list.current.moveDown();
        setVisible(true);
        break;

      case _KeyCode.default.ENTER:
        list && list.current && list.current.select();
        break;

      default:
        intercept = false;
        break;
    }

    if (intercept) {
      e.preventDefault();
      e.stopPropagation();
    }
  }.bind(this), []);
  var handleVisibleChange = (0, _react.useCallback)(function (visible) {
    (0, _newArrowCheck2.default)(this, _this2);
    return setVisible(visible);
  }.bind(this), []);
  var onSelect = (0, _react.useCallback)(function (v) {
    (0, _newArrowCheck2.default)(this, _this2);
    onChange(v);
    setVisible(false);
  }.bind(this), [onChange]);
  var popoverConfigProps = (0, _usePopoverConfig.default)();
  return /*#__PURE__*/_react.default.createElement(_style.SWrap, {
    className: className,
    style: style,
    block: block
  }, /*#__PURE__*/_react.default.createElement(_Popover.default, (0, _extends2.default)({}, popoverConfigProps, popoverProps, {
    popup: /*#__PURE__*/_react.default.createElement(_Popup.default, {
      searchValue: value,
      options: options,
      handleSearch: handleSearch,
      onChange: onSelect,
      loading: loading // ref={list}

    }),
    trigger: [],
    showAction: ['click', 'focus'],
    hideAction: ['blur'],
    visible: visible,
    stretch: ['minWidth'],
    onVisibleChange: handleVisibleChange
  }), /*#__PURE__*/_react.default.createElement(_Input.default, {
    size: size,
    value: value,
    onChange: onInputChange,
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    disabled: disabled,
    prefix: prefix,
    suffix: loading && /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      className: _style.loadingIconCls,
      type: "ring-loading",
      spin: true
    }),
    className: _style.inputCls,
    block: true,
    placeholder: placeholder,
    status: status
  })));
}.bind(void 0);

AutoComplete.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.string.isRequired,
    label: _propTypes.default.node
  })),
  value: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  onChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  prefix: _propTypes.default.node,
  block: _propTypes.default.bool,
  handleSearch: _propTypes.default.oneOfType([_propTypes.default.oneOf([false]), _propTypes.default.func]),
  popoverProps: _propTypes.default.objectOf(_propTypes.default.any),
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func
};

var _default = /*#__PURE__*/(0, _react.memo)(AutoComplete);

exports.default = _default;