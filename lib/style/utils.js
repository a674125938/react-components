"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execSizeCal = exports.getControlSpacingBySize = exports.getControlFontSizeBySize = exports.getControlHeightBySize = exports.ignoreProps = exports.offsetPaddingBySize = exports.getPaddingBySize = exports.offsetHeightBySize = exports.getHeightBySize = exports.offsetValue = exports.Sizes = exports.tuple = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _isPropValid = _interopRequireDefault(require("@emotion/is-prop-valid"));

var _this = void 0;

var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

exports.tuple = tuple;
var Sizes = tuple('sm', 'md', 'lg');
exports.Sizes = Sizes;
var keyMap = {
  sm: 'T_HEIGHT_SM',
  md: 'T_HEIGHT_MD',
  lg: 'T_HEIGHT_LG'
};
var paddingKeyMap = {
  sm: 'T_SPACING_COMMON_SM',
  md: 'T_SPACING_COMMON_SM',
  lg: 'T_SPACING_COMMON_MD'
};
var controlHeightMap = {
  sm: 'T_CONTROL_HEIGHT_SM',
  md: 'T_CONTROL_HEIGHT_MD',
  lg: 'T_CONTROL_HEIGHT_LG'
};
var controlFontSizeMap = {
  sm: 'T_CONTROL_FONT_SIZE_SM',
  md: 'T_CONTROL_FONT_SIZE_MD',
  lg: 'T_CONTROL_FONT_SIZE_LG'
};
var controlSpacingMap = {
  sm: 'T_CONTROL_SPACING_SM',
  md: 'T_CONTROL_SPACING_MD',
  lg: 'T_CONTROL_SPACING_LG'
};

var offsetValue = function offsetValue(value, offset) {
  (0, _newArrowCheck2.default)(this, _this);

  var _ref = /^(\d+)(\S+)$/.exec(value) || [],
      _ref2 = (0, _slicedToArray2.default)(_ref, 3),
      number = _ref2[1],
      unit = _ref2[2];

  return +number + +offset + unit;
}.bind(void 0);

exports.offsetValue = offsetValue;

var getHeightBySize = function getHeightBySize(DT, size) {
  (0, _newArrowCheck2.default)(this, _this);
  var token = keyMap[size];
  return DT[token];
}.bind(void 0);

exports.getHeightBySize = getHeightBySize;

var offsetHeightBySize = function offsetHeightBySize(DT, size, offset) {
  (0, _newArrowCheck2.default)(this, _this);
  var sizeValue = getHeightBySize(DT, size);
  return offsetValue(sizeValue, offset);
}.bind(void 0);

exports.offsetHeightBySize = offsetHeightBySize;

var getPaddingBySize = function getPaddingBySize(DT, size) {
  (0, _newArrowCheck2.default)(this, _this);
  var token = paddingKeyMap[size];
  return DT[token];
}.bind(void 0);

exports.getPaddingBySize = getPaddingBySize;

var offsetPaddingBySize = function offsetPaddingBySize(DT, size, offset) {
  (0, _newArrowCheck2.default)(this, _this);
  var sizeValue = getPaddingBySize(DT, size);
  return offsetValue(sizeValue, offset);
}.bind(void 0);

exports.offsetPaddingBySize = offsetPaddingBySize;

var ignoreProps = function ignoreProps() {
  var _this2 = this;

  for (var _len2 = arguments.length, props = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    props[_key2] = arguments[_key2];
  }

  return function (prop) {
    (0, _newArrowCheck2.default)(this, _this2);
    return (0, _isPropValid.default)(prop) && !props.includes(prop);
  }.bind(this);
};

exports.ignoreProps = ignoreProps;

var getControlHeightBySize = function getControlHeightBySize(DT, size) {
  (0, _newArrowCheck2.default)(this, _this);
  var token = controlHeightMap[size];
  return DT[token];
}.bind(void 0);

exports.getControlHeightBySize = getControlHeightBySize;

var getControlFontSizeBySize = function getControlFontSizeBySize(DT, size) {
  (0, _newArrowCheck2.default)(this, _this);
  var token = controlFontSizeMap[size];
  return DT[token];
}.bind(void 0);

exports.getControlFontSizeBySize = getControlFontSizeBySize;

var getControlSpacingBySize = function getControlSpacingBySize(DT, size) {
  (0, _newArrowCheck2.default)(this, _this);
  var token = controlSpacingMap[size];
  return DT[token];
}.bind(void 0);

exports.getControlSpacingBySize = getControlSpacingBySize;

var getSizeNumber = function getSizeNumber(size) {
  (0, _newArrowCheck2.default)(this, _this);

  var _ref3 = /^(\d+)(.*)$/.exec(size) || [],
      _ref4 = (0, _slicedToArray2.default)(_ref3, 3),
      _ref4$ = _ref4[1],
      number = _ref4$ === void 0 ? 0 : _ref4$,
      _ref4$2 = _ref4[2],
      unit = _ref4$2 === void 0 ? 'px' : _ref4$2;

  return {
    number: number,
    unit: unit
  };
}.bind(void 0);

var cacheMap = {};

var execSizeCal = function execSizeCal(size, formula) {
  (0, _newArrowCheck2.default)(this, _this);
  var key = "size".concat(size, "-formula").concat(formula);
  if (key in cacheMap) return cacheMap[key];

  var _getSizeNumber = getSizeNumber(size),
      number = _getSizeNumber.number,
      unit = _getSizeNumber.unit;

  var exec = new Function('number', "return number".concat(formula));
  var result = exec(number) + unit;
  return cacheMap[key] = result;
}.bind(void 0);

exports.execSizeCal = execSizeCal;