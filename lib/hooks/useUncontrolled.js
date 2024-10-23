"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import once from 'src/utils/once';
var useUncontrolled = function useUncontrolled(value, defaultValue, onChange, options) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);

  var _isControlled = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return value !== undefined;
  }.bind(this), [value]);

  var isControlledRef = (0, _react.useRef)(_isControlled); // const warningUncontrolledToControlled = useMemo(() => {
  //     return once(() => console.error(`Can't change Component from controlled to uncontrolled`));
  // }, []);
  // const warningControlledToUncontrolled = useMemo(() => {
  //     return once(() => console.error(`Can't change Component from controlled to uncontrolled`));
  // }, []);

  if (isControlledRef.current !== _isControlled) {
    if (_isControlled) {
      // warningUncontrolledToControlled();
      isControlledRef.current = _isControlled;
    } else {// warningControlledToUncontrolled();
      // don't change a controlled component to be uncontrolled to avoid unexpected undefined value
    }
  }

  var isControlled = isControlledRef.current;

  var _useState = (0, _react.useState)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return isControlled ? value : defaultValue;
  }.bind(this)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      v = _useState2[0],
      setV = _useState2[1];

  var cacheVRef = (0, _react.useRef)(v);
  var finalValue = isControlled ? value : cacheVRef.current;
  var updateValueWithoutCallOnChange = (0, _react.useCallback)(function (v) {
    (0, _newArrowCheck2.default)(this, _this2);
    var r = options !== null && options !== void 0 && options.getter ? options === null || options === void 0 ? void 0 : options.getter(v) : v; // save value for controlled change to be uncontrolled
    // don't use state for reduce necessary update
    // still keep state for uncontrolled update

    cacheVRef.current = r;
    if (!isControlled) setV(r);
  }.bind(this), [isControlled, options]);
  var callOnChange = (0, _react.useCallback)(function (v) {
    updateValueWithoutCallOnChange(v);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    onChange === null || onChange === void 0 ? void 0 : onChange.apply(void 0, [v].concat(rest));
  }, [updateValueWithoutCallOnChange, onChange]);
  return [finalValue, callOnChange, updateValueWithoutCallOnChange];
}.bind(void 0);

var _default = useUncontrolled;
exports.default = _default;