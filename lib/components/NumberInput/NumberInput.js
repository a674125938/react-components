"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _isObject2 = _interopRequireDefault(require("lodash/isObject"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _Tooltip = _interopRequireDefault(require("../../components/Tooltip"));

var _KeyCode = _interopRequireDefault(require("../../utils/KeyCode"));

var _style = require("./style");

var _this8 = void 0;

var _excluded = ["disabled", "className", "readOnly", "style", "defaultValue", "focusOnUpDown", "onChange", "onFocus", "onBlur", "onEnter", "upHandler", "downHandler", "formatter", "parser", "precision", "styleType", "suffix", "inputStyle", "onNumberChange", "computeValidNumber", "hideHandler", "size", "tooltip", "downStep", "upStep"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function noop() {}

function defaultParser(input) {
  return input.replace(/[^\w.-]+/g, '');
}

var SPEED = 200;
var DELAY = 600;
var StyleType = ['default', 'split', 'pagination'];
var Size = ['sm', 'md', 'lg'];
/**
 * Max Safe Integer -- on IE this is not available, so manually set the number in that case.
 * The reason this is used, instead of Infinity is because numbers above the MSI are unstable
 */

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var NumberInput = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(NumberInput, _Component);

  var _super = _createSuper(NumberInput);

  function NumberInput(props) {
    var _this3 = this;

    var _this;

    (0, _classCallCheck2.default)(this, NumberInput);
    _this = _super.call(this, props);

    _this.onKeyDown = function (e) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (e.keyCode === _KeyCode.default['ARROW_UP']) {
        var ratio = _this.getRatio(e);

        _this.up(e, ratio);

        _this.stop();
      } else if (e.keyCode === _KeyCode.default['ARROW_DOWN']) {
        var _ratio = _this.getRatio(e);

        _this.down(e, _ratio);

        _this.stop();
      } else if (e.keyCode === _KeyCode.default['ENTER']) {
        var _this2;

        (_this2 = _this).onEnter.apply(_this2, [e].concat(args));
      }

      var onKeyDown = _this.props.onKeyDown;

      if (onKeyDown) {
        onKeyDown.apply(void 0, [e].concat(args));
      }
    };

    _this.onKeyUp = function (e) {
      _this.stop();

      var onKeyUp = _this.props.onKeyUp;

      if (onKeyUp) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        onKeyUp.apply(void 0, [e].concat(args));
      }
    };

    _this.onChange = function (e) {
      (0, _newArrowCheck2.default)(this, _this3);

      if (_this.state.focused) {
        _this.inputting = true;
      }

      var input = _this.props.parser(_this.getValueFromEvent(e));

      _this.setState({
        inputValue: input
      });

      _this.props.onChange(_this.toNumberWhenUserInput(input)); // valid number or invalid string

    }.bind(this);

    _this.onFocus = function () {
      var _this$props;

      _this.setState({
        focused: true
      });

      (_this$props = _this.props).onFocus.apply(_this$props, arguments);
    };

    _this.onBlur = function (e) {
      var _this4 = this;

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      _this.inputting = false;

      _this.setState({
        focused: false
      });

      var value = _this.getCurrentValidValue(_this.state.inputValue);

      e.persist(); // fix https://github.com/react-component/input-number/issues/51

      _this.setValue(value, function () {
        var _this$props2;

        (0, _newArrowCheck2.default)(this, _this4);

        (_this$props2 = _this.props).onBlur.apply(_this$props2, [e].concat(args));

        _this.props.onNumberChange(value);
      }.bind(this));
    };

    _this.onEnter = function (e) {
      var _this5 = this;

      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      var value = _this.getCurrentValidValue(_this.state.inputValue);

      if (e) {
        e.persist();
        e.preventDefault();
      }

      _this.setValue(value, function () {
        var _this$props3;

        (0, _newArrowCheck2.default)(this, _this5);

        (_this$props3 = _this.props).onEnter.apply(_this$props3, [e].concat(args));

        _this.props.onNumberChange(value);
      }.bind(this));
    };

    _this.stop = function () {
      (0, _newArrowCheck2.default)(this, _this3);

      if (_this.autoStepTimer) {
        clearTimeout(_this.autoStepTimer);
      }
    }.bind(this);

    _this.down = function (e, ratio, recursive) {
      (0, _newArrowCheck2.default)(this, _this3);
      _this.pressingUpOrDown = true;

      _this.step('down', e, ratio, recursive);
    }.bind(this);

    _this.up = function (e, ratio, recursive) {
      (0, _newArrowCheck2.default)(this, _this3);
      _this.pressingUpOrDown = true;

      _this.step('up', e, ratio, recursive);
    }.bind(this);

    _this.renderHandler = function () {
      var _this6 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var _this$props4 = _this.props,
          upHandler = _this$props4.upHandler,
          downHandler = _this$props4.downHandler,
          readOnly = _this$props4.readOnly,
          max = _this$props4.max,
          min = _this$props4.min,
          disabled = _this$props4.disabled,
          styleType = _this$props4.styleType,
          hideHandler = _this$props4.hideHandler;
      if (hideHandler) return null;
      var value = _this.state.value;
      var editable = !readOnly && !disabled;
      var upDisabled;
      var downDisabled;

      if (value || value === 0) {
        if (!isNaN(value)) {
          var val = Number(value);

          if (val >= max) {
            upDisabled = true;
          }

          if (val <= min) {
            downDisabled = true;
          }
        } else {
          upDisabled = true;
          downDisabled = true;
        }
      }

      var upEvents = {
        onMouseDown: function onMouseDown(e) {
          (0, _newArrowCheck2.default)(this, _this6);
          return editable && !upDisabled ? _this.up(e) : noop();
        }.bind(this),
        onMouseUp: function onMouseUp(e) {
          (0, _newArrowCheck2.default)(this, _this6);
          return _this.stop(e);
        }.bind(this),
        onMouseLeave: function onMouseLeave(e) {
          (0, _newArrowCheck2.default)(this, _this6);
          return _this.stop(e);
        }.bind(this)
      };
      var downEvents = {
        onMouseDown: function onMouseDown(e) {
          (0, _newArrowCheck2.default)(this, _this6);
          return editable && !downDisabled ? _this.down(e) : noop();
        }.bind(this),
        onMouseUp: function onMouseUp(e) {
          (0, _newArrowCheck2.default)(this, _this6);
          return _this.stop(e);
        }.bind(this),
        onMouseLeave: function onMouseLeave(e) {
          (0, _newArrowCheck2.default)(this, _this6);
          return _this.stop(e);
        }.bind(this)
      };
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
        className: (0, _classnames.default)(_style.handlerUpCls, (disabled || upDisabled) && _style.handlerDisabledCls),
        unselectable: "unselectable",
        disabled: disabled || upDisabled
      }, upEvents), upHandler || /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        type: {
          default: 'triangle-up',
          split: 'plus',
          pagination: 'arrow-right'
        }[styleType]
      })), /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
        className: (0, _classnames.default)(_style.handlerDownCls, (disabled || downDisabled) && _style.handlerDisabledCls),
        unselectable: "unselectable",
        disabled: disabled || downDisabled
      }, downEvents), downHandler || /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        type: {
          default: 'triangle-down',
          split: 'minus',
          pagination: 'arrow-left'
        }[styleType]
      })));
    }.bind(this);

    _this.onTooltipVisibleChange = function (visible) {
      (0, _newArrowCheck2.default)(this, _this3);

      _this.setState({
        tooltipVisible: visible
      });
    }.bind(this);

    _this.renderInput = function () {
      (0, _newArrowCheck2.default)(this, _this3);

      /* eslint-disable no-unused-vars */
      var _this$props5 = _this.props,
          disabled = _this$props5.disabled,
          className = _this$props5.className,
          readOnly = _this$props5.readOnly,
          style = _this$props5.style,
          defaultValue = _this$props5.defaultValue,
          focusOnUpDown = _this$props5.focusOnUpDown,
          onChange = _this$props5.onChange,
          onFocus = _this$props5.onFocus,
          onBlur = _this$props5.onBlur,
          onEnter = _this$props5.onEnter,
          upHandler = _this$props5.upHandler,
          downHandler = _this$props5.downHandler,
          formatter = _this$props5.formatter,
          parser = _this$props5.parser,
          precision = _this$props5.precision,
          styleType = _this$props5.styleType,
          suffix = _this$props5.suffix,
          inputStyle = _this$props5.inputStyle,
          onNumberChange = _this$props5.onNumberChange,
          computeValidNumber = _this$props5.computeValidNumber,
          hideHandler = _this$props5.hideHandler,
          size = _this$props5.size,
          tooltip = _this$props5.tooltip,
          downStep = _this$props5.downStep,
          upStep = _this$props5.upStep,
          rest = (0, _objectWithoutProperties2.default)(_this$props5, _excluded);
      /* eslint-enable no-unused-vars */

      var _this$state = _this.state,
          focused = _this$state.focused,
          inputValue = _this$state.inputValue,
          value = _this$state.value,
          tooltipVisible = _this$state.tooltipVisible; // focus state, show input value
      // unfocus state, show valid value

      var inputDisplayValue;

      if (focused) {
        inputDisplayValue = inputValue;
      } else {
        inputDisplayValue = _this.toPrecisionAsStep(value);
      }

      if (inputDisplayValue === undefined || inputDisplayValue === null) {
        inputDisplayValue = '';
      }

      var inputDisplayValueFormat = _this.formatWrapper(inputDisplayValue);

      var editable = !readOnly && !disabled;

      var input = /*#__PURE__*/_react.default.createElement("div", {
        className: _style.inputWrapCls
      }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, rest, {
        className: _style.inputCls,
        size: size,
        autoComplete: "off",
        onFocus: _this.onFocus,
        onBlur: _this.onBlur,
        onKeyDown: editable ? _this.onKeyDown : noop,
        onKeyUp: editable ? _this.onKeyUp : noop,
        onChange: _this.onChange,
        disabled: disabled,
        readOnly: readOnly,
        ref: _this.input,
        value: inputDisplayValueFormat,
        style: inputStyle
      })), suffix && /*#__PURE__*/_react.default.createElement("span", {
        className: _style.suffixCls
      }, suffix));

      if (!tooltip) {
        return input;
      } else if (typeof tooltip === 'string' || /*#__PURE__*/_react.default.isValidElement(tooltip)) {
        return /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
          popup: tooltip,
          visible: focused || tooltipVisible,
          onVisibleChange: _this.onTooltipVisibleChange
        }, input);
      } else if ((0, _isObject2.default)(tooltip)) {
        return /*#__PURE__*/_react.default.createElement(_Tooltip.default, (0, _extends2.default)({
          visible: focused || tooltipVisible,
          onVisibleChange: _this.onTooltipVisibleChange
        }, tooltip), input);
      } else {
        return input;
      }
    }.bind(this);

    var _value;

    if ('value' in props) {
      _value = props.value;
    } else {
      _value = props.defaultValue;
    }

    _value = _this.toNumber(_value);
    _this.state = {
      inputValue: _this.toPrecisionAsStep(_value),
      value: _value,
      focused: props.autoFocus,
      tooltipVisible: false
    };
    _this.input = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  (0, _createClass2.default)(NumberInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.componentDidUpdate();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        var value = this.state.focused ? nextProps.value : this.getValidValue(nextProps.value, nextProps.min, nextProps.max);
        this.setState({
          value: value,
          inputValue: this.inputting ? value : this.toPrecisionAsStep(value)
        });
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      try {
        this.start = this.input.current.selectionStart;
        this.end = this.input.current.selectionEnd;
      } catch (e) {// Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // pressingUpOrDown is true means that someone just click up or down button
      // https://github.com/ant-design/ant-design/issues/9204
      if (!this.pressingUpOrDown) {
        return;
      }

      if (this.props.focusOnUpDown && this.state.focused) {
        var selectionRange = this.input.current.setSelectionRange;

        if (selectionRange && typeof selectionRange === 'function' && this.start !== undefined && this.end !== undefined) {
          this.input.current.setSelectionRange(this.start, this.end);
        } else {
          this.focus();
        }

        this.pressingUpOrDown = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: "getCurrentValidValue",
    value: function getCurrentValidValue(value) {
      var val = value;

      if (val === '') {
        val = '';
      } else if (!this.isNotCompleteNumber(val)) {
        val = this.getValidValue(val);
      } else {
        val = this.state.value;
      }

      return this.props.computeValidNumber(this.toNumber(val));
    }
  }, {
    key: "getRatio",
    value: function getRatio(e) {
      var ratio = 1;

      if (e.metaKey || e.ctrlKey) {
        ratio = 0.1;
      } else if (e.shiftKey) {
        ratio = 10;
      }

      return ratio;
    }
  }, {
    key: "getValueFromEvent",
    value: function getValueFromEvent(e) {
      return e.target.value.trim().replace(/。/g, '.');
    }
  }, {
    key: "getValidValue",
    value: function getValidValue(value) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.min;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.max;
      var val = parseFloat(value, 10); // https://github.com/ant-design/ant-design/issues/7358

      if (isNaN(val)) {
        return value;
      }

      if (val < min) {
        val = min;
      }

      if (val > max) {
        val = max;
      }

      return val;
    }
  }, {
    key: "setValue",
    value: function setValue(v, callback) {
      // trigger onChange
      var newValue = this.isNotCompleteNumber(parseFloat(v, 10)) ? undefined : parseFloat(v, 10);
      var changed = newValue !== this.state.value || "".concat(newValue) !== "".concat(this.state.inputValue); // https://github.com/ant-design/ant-design/issues/7363

      if (!('value' in this.props)) {
        this.setState({
          value: newValue,
          inputValue: this.toPrecisionAsStep(v)
        }, callback);
      } else {
        // always set input value same as value
        this.setState({
          inputValue: this.toPrecisionAsStep(this.state.value)
        }, callback);
      }

      if (changed) {
        this.props.onChange(newValue);
      }
    }
  }, {
    key: "getPrecision",
    value: function getPrecision(value) {
      if ('precision' in this.props) {
        return this.props.precision;
      }

      var valueString = value.toString();

      if (valueString.indexOf('e-') >= 0) {
        return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
      }

      var precision = 0;

      if (valueString.indexOf('.') >= 0) {
        precision = valueString.length - valueString.indexOf('.') - 1;
      }

      return precision;
    } // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39

  }, {
    key: "getMaxPrecision",
    value: function getMaxPrecision(currentValue) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if ('precision' in this.props) {
        return this.props.precision;
      }

      var step = this.props.step;
      var ratioPrecision = this.getPrecision(ratio);
      var stepPrecision = this.getPrecision(step);
      var currentValuePrecision = this.getPrecision(currentValue);

      if (!currentValue) {
        return ratioPrecision + stepPrecision;
      }

      return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    }
  }, {
    key: "getPrecisionFactor",
    value: function getPrecisionFactor(currentValue) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var precision = this.getMaxPrecision(currentValue, ratio);
      return Math.pow(10, precision);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.input.current.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.current.blur();
    }
  }, {
    key: "formatWrapper",
    value: function formatWrapper(num) {
      if (this.props.formatter) {
        return this.props.formatter(num);
      }

      return num;
    }
  }, {
    key: "toPrecisionAsStep",
    value: function toPrecisionAsStep(num) {
      if (this.isNotCompleteNumber(num) || num === '') {
        return num;
      }

      var precision = Math.abs(this.getMaxPrecision(num));

      if (precision === 0) {
        return num.toString();
      }

      if (!isNaN(precision)) {
        return Number(num).toFixed(precision);
      }

      return num.toString();
    } // '1.' '1x' 'xx' '' => are not complete numbers

  }, {
    key: "isNotCompleteNumber",
    value: function isNotCompleteNumber(num) {
      return isNaN(num) || num === '' || num === null || num && num.toString().indexOf('.') === num.toString().length - 1;
    }
  }, {
    key: "toNumber",
    value: function toNumber(num) {
      if (this.isNotCompleteNumber(num)) {
        return num;
      }

      if ('precision' in this.props) {
        return Number(Number(num).toFixed(this.props.precision));
      }

      return Number(num);
    } // '1.0' '1.00'  => may be a inputing number

  }, {
    key: "toNumberWhenUserInput",
    value: function toNumberWhenUserInput(num) {
      // num.length > 16 => prevent input large number will became Infinity
      if ((/\.\d*0$/.test(num) || num.length > 16) && this.state.focused) {
        return num;
      }

      return this.toNumber(num);
    }
  }, {
    key: "upStep",
    value: function upStep(val, rat) {
      var _this$props6 = this.props,
          step = _this$props6.step,
          upStep = _this$props6.upStep,
          min = _this$props6.min;
      var precisionFactor = this.getPrecisionFactor(val, rat);
      var precision = Math.abs(this.getMaxPrecision(val, rat));

      if (upStep != null) {
        step = upStep;
      }

      var result;

      if (typeof val === 'number') {
        result = ((precisionFactor * val + precisionFactor * step * rat) / precisionFactor).toFixed(precision);
      } else {
        result = min === -Infinity ? step : min;
      }

      return this.toNumber(result);
    }
  }, {
    key: "downStep",
    value: function downStep(val, rat) {
      var _this$props7 = this.props,
          step = _this$props7.step,
          downStep = _this$props7.downStep,
          min = _this$props7.min;
      var precisionFactor = this.getPrecisionFactor(val, rat);
      var precision = Math.abs(this.getMaxPrecision(val, rat));

      if (downStep != null) {
        step = downStep;
      }

      var result;

      if (typeof val === 'number') {
        result = ((precisionFactor * val - precisionFactor * step * rat) / precisionFactor).toFixed(precision);
      } else {
        result = min === -Infinity ? -step : min;
      }

      return this.toNumber(result);
    }
  }, {
    key: "step",
    value: function step(type, e) {
      var _this7 = this;

      var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var recursive = arguments.length > 3 ? arguments[3] : undefined;
      this.stop();

      if (e) {
        e.persist();
        e.preventDefault();
      }

      var props = this.props;

      if (props.disabled) {
        return;
      }

      var value = this.toNumber(this.state.inputValue || 0);

      if (this.isNotCompleteNumber(value)) {
        return;
      }

      var val = this["".concat(type, "Step")](value, ratio);
      var outOfRange = val > props.max || val < props.min;

      if (val > props.max) {
        val = props.max;
      } else if (val < props.min) {
        val = props.min;
      }

      if (outOfRange) {
        return;
      }

      this.setValue(this.getCurrentValidValue(val), function () {
        (0, _newArrowCheck2.default)(this, _this7);
        return this.props.onNumberChange(val);
      }.bind(this));
      this.autoStepTimer = setTimeout(function () {
        (0, _newArrowCheck2.default)(this, _this7);
        this[type](e, ratio, true);
      }.bind(this), recursive ? SPEED : DELAY);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          disabled = _this$props8.disabled,
          className = _this$props8.className,
          style = _this$props8.style,
          styleType = _this$props8.styleType,
          hideHandler = _this$props8.hideHandler,
          size = _this$props8.size;
      var focused = this.state.focused;
      return /*#__PURE__*/_react.default.createElement(_style.NumberInputWrap, {
        focused: focused,
        disabled: disabled,
        hideHandler: hideHandler,
        size: size,
        styleType: styleType,
        style: style,
        className: (0, _classnames.default)(_style.prefixCls, "".concat(_style.prefixCls, "-styletype-").concat(styleType), focused && "".concat(_style.prefixCls, "-focused"), disabled && "".concat(_style.prefixCls, "-disabled"), className)
      }, this.renderHandler(), this.renderInput());
    }
  }]);
  return NumberInput;
}(_react.Component);

NumberInput.propTypes = {
  /** 值，受控 */
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** 默认值，非受控 */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** @ignore */
  focusOnUpDown: _propTypes.default.bool,

  /** @ignore */
  autoFocus: _propTypes.default.bool,

  /** 修改回调 */
  onChange: _propTypes.default.func,

  /**
   * 有效的修改回调，使用按钮改变值或者输入、回车后失焦时触发，可防止监听到无效的回调
   * @param value - 当前的值，必为有效数字
   */
  onNumberChange: _propTypes.default.func,

  /** @ignore */
  onKeyDown: _propTypes.default.func,

  /** @ignore */
  onKeyUp: _propTypes.default.func,

  /** @ignore */
  onEnter: _propTypes.default.func,

  /** 禁用 */
  disabled: _propTypes.default.bool,

  /** @ignore */
  onFocus: _propTypes.default.func,

  /** @ignore */
  onBlur: _propTypes.default.func,

  /** 只读 */
  readOnly: _propTypes.default.bool,

  /** 最大值 */
  max: _propTypes.default.number,

  /** 最小值 */
  min: _propTypes.default.number,

  /** 按钮每次变动大小 */
  step: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** 增加按钮点击增加的大小，会覆盖 step */
  upStep: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** 减少按钮点击减少的大小，会覆盖 step */
  downStep: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** 自定义'+'按钮 */
  upHandler: _propTypes.default.node,

  /** 自定义'-'按钮 */
  downHandler: _propTypes.default.node,

  /** 定义数值展示格式化 */
  formatter: _propTypes.default.func,

  /** 定义输入内容过滤 */
  parser: _propTypes.default.func,

  /** 精度，小数点位数 */
  precision: _propTypes.default.number,

  /** @ignore */
  className: _propTypes.default.string,

  /** @ignore */
  style: _propTypes.default.object,

  /** 样式风格 */
  styleType: _propTypes.default.oneOf(StyleType),

  /** 尺寸 */
  size: _propTypes.default.oneOf(Size),

  /** 自定义后缀 */
  suffix: _propTypes.default.node,

  /** input框自定义样式 */
  inputStyle: _propTypes.default.object,

  /** 计算合法值 */
  computeValidNumber: _propTypes.default.func,

  /** 是否隐藏操作按钮 */
  hideHandler: _propTypes.default.bool,

  /**
   * 输入提示，hover 和输入焦点时显示，可直接传入 tooltip 内容，或传入 tooltip 的 props，props 参考 tooltip 组件文档
   * 注意，如果使用自定义 props 中的 visible 和 onVisibleChange 则需要自己去控制 tooltip 的显示隐藏
   */
  tooltip: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.object])
};
NumberInput.defaultProps = {
  focusOnUpDown: true,
  min: -MAX_SAFE_INTEGER,
  step: 1,
  onChange: noop,
  onNumberChange: noop,
  onKeyDown: noop,
  onEnter: noop,
  onFocus: noop,
  onBlur: noop,
  parser: defaultParser,
  styleType: StyleType[0],
  size: 'md',
  computeValidNumber: function computeValidNumber(v) {
    (0, _newArrowCheck2.default)(this, _this8);
    return v;
  }.bind(void 0)
};
NumberInput.StyleType = StyleType;
NumberInput.Size = Size;
var _default = NumberInput;
exports.default = _default;