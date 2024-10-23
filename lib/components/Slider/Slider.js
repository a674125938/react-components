"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _isNaN2 = _interopRequireDefault(require("lodash/isNaN"));

var _find2 = _interopRequireDefault(require("lodash/find"));

var _isObject2 = _interopRequireDefault(require("lodash/isObject"));

var _each2 = _interopRequireDefault(require("lodash/each"));

var _keys2 = _interopRequireDefault(require("lodash/keys"));

var _sortBy2 = _interopRequireDefault(require("lodash/sortBy"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcSlider = _interopRequireDefault(require("rc-slider"));

var _Tooltip = _interopRequireDefault(require("../../components/Tooltip"));

var _NumberInput = _interopRequireDefault(require("../../components/NumberInput"));

var _uncontrolled = _interopRequireDefault(require("../../decorators/uncontrolled"));

var _localeConsumerDecorator = _interopRequireDefault(require("../../components/LocaleProvider/localeConsumerDecorator"));

var _style = require("./style");

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _excluded = ["value", "dragging", "index", "tipFormatter"],
    _excluded2 = ["value", "defaultValue", "range", "onChange", "className", "style", "disabled", "min", "max", "step", "sliderClassName", "sliderStyle", "numberInput", "numberInputTipFormatter", "tipFormatter", "size", "marks", "isSensitive", "locale", "onLastChange"];

var _this = void 0,
    _dec,
    _dec2,
    _class,
    _class2,
    _temp;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Handle = _rcSlider.default.Handle;
var Range = _rcSlider.default.Range;
var Size = ['sm', 'md', 'lg'];

var handle = function handle(props) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var value = props.value,
      dragging = props.dragging,
      index = props.index,
      tipFormatter = props.tipFormatter,
      restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  return /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    popupClassName: "".concat(_style.prefixCls, "-tooltip"),
    popup: (0, _isFunction2.default)(tipFormatter) ? tipFormatter(value) : value == null ? '' : value,
    visible: dragging && tipFormatter !== null,
    placement: "top",
    key: index,
    theme: "dark",
    getPopupContainer: function (triggerNode) {
      (0, _newArrowCheck2.default)(this, _this2);
      return triggerNode;
    }.bind(this)
  }, /*#__PURE__*/_react.default.createElement(Handle, (0, _extends2.default)({
    value: value
  }, restProps)));
}.bind(void 0);

handle.propTypes = {
  value: _propTypes.default.number,
  dragging: _propTypes.default.bool,
  index: _propTypes.default.number,
  tipFormatter: _propTypes.default.func
};

var getPrecision = function getPrecision(n) {
  (0, _newArrowCheck2.default)(this, _this);
  var valueString = n.toString();

  if (valueString.indexOf('e-') >= 0) {
    return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
  }

  var precision = 0;

  if (valueString.indexOf('.') >= 0) {
    precision = valueString.length - valueString.indexOf('.') - 1;
  }

  return precision;
}.bind(void 0);

var sliderSplit = 300;
var Slider = (_dec = (0, _localeConsumerDecorator.default)({
  defaultLocale: _zh_CN.default,
  localeName: 'Slider'
}), _dec2 = (0, _uncontrolled.default)({}), _dec(_class = _dec2(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider(_props) {
    var _this4 = this;

    var _this3;

    (0, _classCallCheck2.default)(this, Slider);
    _this3 = _super.call(this, _props);

    _this3.simpleClone = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return JSON.parse(JSON.stringify(obj));
    };

    _this3.resetCache = function () {
      (0, _newArrowCheck2.default)(this, _this4);
      _this3.cache = {
        valueToSliderValueMap: {},
        sliderValueToValueMap: {},
        numberInputValueToValueMap: {},
        valueToValueStepMap: {}
      };
    }.bind(this);

    _this3.computeMarks = function (_marks, props) {
      var _this5 = this;

      (0, _newArrowCheck2.default)(this, _this4);

      if ((0, _isEmpty2.default)(_marks)) {
        return null;
      }

      var min = props.min,
          max = props.max,
          step = props.step;
      var values = (0, _sortBy2.default)((0, _keys2.default)(_marks), function (v) {
        (0, _newArrowCheck2.default)(this, _this5);
        return +v;
      }.bind(this));
      var l = values.length;
      var marks = [];
      var indexWithRatio = [];
      var indexWithoutRatio = [];
      var usedRatio = 0;
      var usedRange = 0;

      if (+values[l - 1] !== +max) {
        values.push(max);
      }

      (0, _each2.default)(values, function (v, i) {
        (0, _newArrowCheck2.default)(this, _this5);
        var info = _marks[v];
        v = +v;

        if (!(0, _isObject2.default)(info)) {
          info = {
            label: info
          };
        } else {
          info = _objectSpread({}, info);
        }

        var range = [];

        if (i === 0) {
          range[0] = min;
        } else {
          range[0] = +values[i - 1];
        }

        range[1] = v;
        info.range = range;
        info.value = v;
        marks.push(info);

        if (info.ratio) {
          indexWithRatio.push(i);
          usedRatio += info.ratio;
          usedRange += range[1] - range[0];
        } else {
          indexWithoutRatio.push(i);
        }

        if (!('step' in info)) {
          info.step = step;
        }
      }.bind(this));
      var remainRange = max - min - usedRange;
      (0, _each2.default)(indexWithoutRatio, function (i) {
        (0, _newArrowCheck2.default)(this, _this5);
        var info = marks[i];
        info.ratio = (info.range[1] - info.range[0]) / remainRange * (100 - usedRatio);
      }.bind(this));
      var ratioBefore = 0;
      (0, _each2.default)(marks, function (mark) {
        (0, _newArrowCheck2.default)(this, _this5);
        mark.ratioBefore = ratioBefore;
        ratioBefore += mark.ratio;
      }.bind(this));
      return marks;
    }.bind(this);

    _this3.computeMarksForSlider = function (_marks, props) {
      var _this6 = this;

      (0, _newArrowCheck2.default)(this, _this4);

      if ((0, _isEmpty2.default)(_marks)) {
        return null;
      }

      var _props$max = props.max,
          max = _props$max === void 0 ? 100 : _props$max,
          range = props.range;
      var marks = {};
      var baseRatio = 0;
      (0, _each2.default)(_marks, function (_mark) {
        (0, _newArrowCheck2.default)(this, _this6);

        if (_mark.label == null) {
          return;
        }

        var value = (baseRatio += _mark.ratio) / 100 * (range ? max : sliderSplit);
        var mark = {
          label: _mark.label,
          style: _objectSpread(_objectSpread({
            transform: 'none'
          }, _mark.value == max ? {
            borderRight: 'none'
          } : {}), _mark.style)
        };
        marks[value] = mark;
      }.bind(this));
      return marks;
    }.bind(this);

    _this3.handleChange = function (v, latest) {
      (0, _newArrowCheck2.default)(this, _this4);
      var _this3$props = _this3.props,
          onChange = _this3$props.onChange,
          onLastChange = _this3$props.onLastChange,
          value = _this3$props.value;

      if (v + '' !== value + '') {
        onChange(v);
      }

      if (latest) {
        onLastChange(v);
      }
    }.bind(this);

    _this3.onNumberInputNumberChange = function (v) {
      (0, _newArrowCheck2.default)(this, _this4);

      _this3.handleChange(v, true);
    }.bind(this);

    _this3.onNumberInputChange = function (v) {
      (0, _newArrowCheck2.default)(this, _this4);
      var isSensitive = _this3.props.isSensitive;

      if (isSensitive) {
        var validValue = _this3.translateNumberInputValueToValue(v);

        if (validValue + '' === v + '') {
          _this3.handleChange(v);
        }
      }

      _this3.setState({
        numberInputValue: v
      });
    }.bind(this);

    _this3.onNumberInputFocus = function () {
      (0, _newArrowCheck2.default)(this, _this4);

      _this3.setState({
        numberInputValue: _this3.props.value,
        isNumberInputFocused: true
      });
    }.bind(this);

    _this3.onNumberInputBlur = function () {
      (0, _newArrowCheck2.default)(this, _this4);

      _this3.setState({
        isNumberInputFocused: false
      });
    }.bind(this);

    _this3.onSliderChange = function (v, latest) {
      (0, _newArrowCheck2.default)(this, _this4);
      var range = _this3.props.range;
      var value = range ? v : _this3.translateSliderValueToValue(v);

      _this3.handleChange(value, latest);
    }.bind(this);

    _this3.translateSliderValueToValue = function (v) {
      var _this7 = this;

      (0, _newArrowCheck2.default)(this, _this4);

      if (v in _this3.cache.sliderValueToValueMap) {
        return _this3.cache.sliderValueToValueMap[v];
      }

      var marks = _this3.state.marks;
      var _this3$props2 = _this3.props,
          min = _this3$props2.min,
          max = _this3$props2.max,
          step = _this3$props2.step;
      var value;

      if ((0, _isEmpty2.default)(marks)) {
        value = _this3.computeValidNumber(min + (max - min) * v / sliderSplit, {
          step: step,
          min: min,
          max: max
        });
      } else if (v == sliderSplit) {
        value = max;
      } else {
        var vRatio = v / sliderSplit * 100;
        var mark = (0, _find2.default)(marks, function (mark) {
          (0, _newArrowCheck2.default)(this, _this7);
          var ratioBefore = mark.ratioBefore,
              ratio = mark.ratio;

          if (vRatio >= ratioBefore && vRatio < ratioBefore + ratio) {
            return true;
          }
        }.bind(this));
        if (!mark) mark = marks[0];
        var _mark2 = mark,
            ratioBefore = _mark2.ratioBefore,
            range = _mark2.range,
            ratio = _mark2.ratio,
            _step = _mark2.step;
        value = _this3.computeValidNumber((vRatio - ratioBefore) / ratio * (range[1] - range[0]) + range[0], {
          min: range[0],
          max: range[1],
          step: _step
        });
      }

      _this3.cache.sliderValueToValueMap[v] = value;
      return value;
    }.bind(this);

    _this3.translateValueToSliderValue = function (v) {
      var _this8 = this;

      (0, _newArrowCheck2.default)(this, _this4);

      if (v in _this3.cache.valueToSliderValueMap) {
        return _this3.cache.valueToSliderValueMap[v];
      }

      var marks = _this3.state.marks;
      var _this3$props3 = _this3.props,
          min = _this3$props3.min,
          max = _this3$props3.max;
      var value;

      if (v == undefined) {
        value = 0;
      } else if ((0, _isEmpty2.default)(marks)) {
        value = (v - min) / (max - min) * sliderSplit;
      } else if (v == max) {
        value = sliderSplit;
      } else {
        var mark = (0, _find2.default)(marks, function (mark) {
          (0, _newArrowCheck2.default)(this, _this8);
          var range = mark.range;

          if (v >= range[0] && v < range[1]) {
            return true;
          }
        }.bind(this));
        if (!mark) mark = marks[0];
        var _mark3 = mark,
            range = _mark3.range,
            ratio = _mark3.ratio,
            ratioBefore = _mark3.ratioBefore;
        value = ((v - range[0]) / (range[1] - range[0]) * ratio + ratioBefore) / 100 * sliderSplit;
      }

      _this3.cache.valueToSliderValueMap[v] = value;
      return value;
    }.bind(this);

    _this3.translateNumberInputValueToValue = function (v) {
      (0, _newArrowCheck2.default)(this, _this4);

      if (v in _this3.cache.numberInputValueToValueMap) {
        return _this3.cache.numberInputValueToValueMap[v];
      }

      var marks = _this3.state.marks;
      var _this3$props4 = _this3.props,
          min = _this3$props4.min,
          max = _this3$props4.max,
          step = _this3$props4.step;

      if (isNaN(v) || v + '' !== +v + '') {
        return min;
      }

      var value;

      if ((0, _isEmpty2.default)(marks)) {
        value = _this3.computeValidNumber(v, {
          step: step,
          min: min,
          max: max
        });
      } else if (v === max) {
        value = max;
      } else {
        var mark = marks[0];

        for (var i in marks) {
          i = +i;
          var _mark = marks[i];
          var _range = _mark.range;

          if (v >= _range[0] && v < _range[1]) {
            mark = _mark;
          }
        }

        var _mark4 = mark,
            range = _mark4.range,
            _step2 = _mark4.step;
        value = _this3.computeValidNumber(v, {
          min: range[0],
          max: range[1],
          step: _step2
        });
      }

      _this3.cache.numberInputValueToValueMap[v] = value;
      return value;
    }.bind(this);

    _this3.getValueStep = function (v) {
      (0, _newArrowCheck2.default)(this, _this4);

      if (v in _this3.cache.valueToValueStepMap) {
        return _this3.cache.valueToValueStepMap[v];
      }

      var marks = _this3.state.marks;
      var step = _this3.props.step;
      var valueStep = {
        step: step
      };

      if (!(0, _isEmpty2.default)(marks)) {
        var l = marks.length;

        for (var i in marks) {
          i = +i;
          var mark = marks[i];
          var range = mark.range,
              markStep = mark.step;

          if (+v === +range[0]) {
            valueStep = {
              upStep: markStep,
              downStep: i > 0 ? marks[i - 1].step : step
            };
            break;
          } else if (v > range[0] && v < range[1]) {
            valueStep = {
              upStep: markStep,
              downStep: markStep
            };
            break;
          } else if (+v === +range[1]) {
            valueStep = {
              upStep: i < l - 1 ? marks[i + 1].step : step,
              downStep: markStep
            };
            break;
          }
        }
      }

      _this3.cache.valueToValueStepMap[v] = valueStep;
      return valueStep;
    }.bind(this);

    _this3.computeValidNumber = function (number, options) {
      (0, _newArrowCheck2.default)(this, _this4);

      var _ref = options || _this3.props,
          step = _ref.step,
          min = _ref.min,
          max = _ref.max;

      if (number < min) {
        return min;
      }

      if (number > max) {
        return max;
      }

      var stepPrecision = getPrecision(step);
      var maxPrecision = getPrecision(max);
      var minPrecision = getPrecision(min);
      var precision = Math.max(stepPrecision, maxPrecision, minPrecision);
      number = +(((number - min) / step).toFixed(0) * step + min).toFixed(precision);

      if (number < min) {
        return min;
      }

      if (number > max) {
        return max;
      }

      return (0, _isNaN2.default)(number) ? 0 : number;
    }.bind(this);

    _this3.state = {};
    _this3.state.cacheMarks = _this3.simpleClone(_props.marks);
    _this3.state.marks = _this3.computeMarks(_props.marks, _props);
    _this3.state.marksForSlider = _this3.computeMarksForSlider(_this3.state.marks, _props);

    _this3.resetCache();

    return _this3;
  }

  (0, _createClass2.default)(Slider, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(nextProps.marks == this.state.cacheMarks || (0, _isEqual2.default)(nextProps.marks, this.state.cacheMarks)) || nextProps.max !== this.props.max || nextProps.min !== this.props.min || nextProps.step !== this.props.step) {
        var marks = this.computeMarks(nextProps.marks, nextProps);
        this.setState({
          cacheMarks: this.simpleClone(nextProps.marks),
          marks: marks,
          marksForSlider: this.computeMarksForSlider(marks, nextProps)
        });
        this.resetCache();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      /* eslint-disable no-unused-vars */
      var _this$props = this.props,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          range = _this$props.range,
          onChange = _this$props.onChange,
          className = _this$props.className,
          style = _this$props.style,
          disabled = _this$props.disabled,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          sliderClassName = _this$props.sliderClassName,
          sliderStyle = _this$props.sliderStyle,
          _inputProps = _this$props.numberInput,
          numberInputTipFormatter = _this$props.numberInputTipFormatter,
          tipFormatter = _this$props.tipFormatter,
          size = _this$props.size,
          _marks = _this$props.marks,
          isSensitive = _this$props.isSensitive,
          locale = _this$props.locale,
          onLastChange = _this$props.onLastChange,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded2);
      /* eslint-enable no-unused-vars */

      var _this$state = this.state,
          marksForSlider = _this$state.marksForSlider,
          isNumberInputFocused = _this$state.isNumberInputFocused,
          numberInputValue = _this$state.numberInputValue;
      var sharingProps = {
        disabled: disabled
      };

      var sliderProps = _objectSpread(_objectSpread({}, rest), {}, {
        className: sliderClassName,
        style: sliderStyle,
        onChange: this.onSliderChange,
        onAfterChange: function onAfterChange() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _this9.onSliderChange.apply(_this9, args.concat([true]));
        }
      });

      var inputProps = _objectSpread(_objectSpread(_objectSpread({}, _inputProps), {}, {
        min: min,
        max: max,
        size: size,
        value: isNumberInputFocused ? numberInputValue : value
      }, this.getValueStep(value)), {}, {
        onChange: this.onNumberInputChange,
        onNumberChange: this.onNumberInputNumberChange,
        onFocus: this.onNumberInputFocus,
        onBlur: this.onNumberInputBlur,
        computeValidNumber: this.translateNumberInputValueToValue
      });

      var isNumberInputValid = numberInputValue + '' === value + '';

      if (range) {
        return /*#__PURE__*/_react.default.createElement(_style.SliderWrap, {
          disabled: disabled,
          style: style,
          className: className,
          size: size
        }, /*#__PURE__*/_react.default.createElement(_style.RcSliderWrap, null, /*#__PURE__*/_react.default.createElement(Range, (0, _extends2.default)({
          min: min,
          max: max,
          defaultValue: defaultValue,
          value: value,
          step: step,
          prefixCls: _style.prefixCls,
          marks: marksForSlider || {},
          handle: function (handleProps) {
            (0, _newArrowCheck2.default)(this, _this9);
            return handle(_objectSpread(_objectSpread({}, handleProps), {}, {
              // value,
              tipFormatter: tipFormatter
            }));
          }.bind(this)
        }, sliderProps, sharingProps))));
      }

      return /*#__PURE__*/_react.default.createElement(_style.SliderWrap, {
        disabled: disabled,
        style: style,
        className: className,
        size: size
      }, /*#__PURE__*/_react.default.createElement(_style.RcSliderWrap, null, /*#__PURE__*/_react.default.createElement(_rcSlider.default, (0, _extends2.default)({
        min: 0,
        max: sliderSplit,
        step: 1,
        value: this.translateValueToSliderValue(value),
        prefixCls: _style.prefixCls,
        handle: function (handleProps) {
          (0, _newArrowCheck2.default)(this, _this9);
          return handle(_objectSpread(_objectSpread({}, handleProps), {}, {
            value: value,
            tipFormatter: tipFormatter
          }));
        }.bind(this),
        marks: marksForSlider || {}
      }, sliderProps, sharingProps))), _inputProps === null ? null : /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
        popupClassName: "".concat(_style.prefixCls, "-tooltip"),
        popup: (0, _isFunction2.default)(numberInputTipFormatter) ? numberInputTipFormatter({
          currentValue: value,
          inputValue: numberInputValue,
          isSensitive: isSensitive,
          locale: locale
        }) : "".concat(locale.currentValueIs).concat(value).concat(locale.comma).concat(locale.inputValueIs).concat(numberInputValue) + (isSensitive ? "".concat(locale.comma).concat(locale.input).concat(isNumberInputValid ? locale.isValid : locale.isInvalid).concat(isNumberInputValid ? '' : "".concat(locale.comma).concat(locale.tip)) : ''),
        visible: isNumberInputFocused && numberInputTipFormatter !== null,
        placement: "top",
        theme: "dark",
        getPopupContainer: function (triggerNode) {
          (0, _newArrowCheck2.default)(this, _this9);
          return triggerNode.parentNode;
        }.bind(this)
      }, /*#__PURE__*/_react.default.createElement(_NumberInput.default, (0, _extends2.default)({}, inputProps, sharingProps))));
    }
  }]);
  return Slider;
}(_react.Component), _class2.propTypes = {
  /** 值，受控 */
  value: _propTypes.default.number | _propTypes.default.arrayOf(_propTypes.default.number),

  /** 默认值，非受控 */
  defaultValue: _propTypes.default.number | _propTypes.default.arrayOf(_propTypes.default.number),

  /** 是否为双滑块模式 */
  range: _propTypes.default.bool,

  /** 修改回调 */
  onChange: _propTypes.default.func,

  /** 拖拽结束、输入回车、输入失焦、数字输入框上下按钮等时触发 */
  onLastChange: _propTypes.default.func,

  /** 是否禁用 */
  disabled: _propTypes.default.bool,

  /** 最小值 */
  min: _propTypes.default.number,

  /** 最大值 */
  max: _propTypes.default.number,

  /** 每次变动的大小，传入的(最大值-最小值)必须为step的整数倍，大于0 */
  step: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** 标记 */
  marks: _propTypes.default.object,

  /** @ignore */
  className: _propTypes.default.string,

  /** @ignore */
  style: _propTypes.default.object,

  /** slider 类名 */
  sliderClassName: _propTypes.default.string,

  /** slider 样式 */
  sliderStyle: _propTypes.default.object,

  /** number input 的自定义 props，为null时隐藏 */
  numberInput: _propTypes.default.object,

  /** 是否灵敏的触发onChange，为true时当NumberInput中实时输入有效值时会触发onChange */
  isSensitive: _propTypes.default.bool,

  /**
   * 输入框提示语格式化，传入null隐藏
   * @param option - 包含当前值、生效值等
   */
  numberInputTipFormatter: _propTypes.default.func,

  /**
   * 提示语格式化，传入null隐藏
   * @param value - 当前值
   */
  tipFormatter: _propTypes.default.func,

  /** 尺寸 */
  size: _propTypes.default.oneOf(Size),

  /** @ignore */
  locale: _propTypes.default.object
}, _class2.defaultProps = {
  onChange: function onChange() {
    (0, _newArrowCheck2.default)(this, _this);
  }.bind(void 0),
  onLastChange: function onLastChange() {
    (0, _newArrowCheck2.default)(this, _this);
  }.bind(void 0),
  defaultValue: 0,
  range: false,
  step: 1,
  size: 'md',
  min: 0,
  max: 100
}, _temp)) || _class) || _class);
Slider.Size = Size;
var _default = Slider;
exports.default = _default;