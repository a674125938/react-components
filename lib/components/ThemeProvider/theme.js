"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "defaultDesignTokens", {
  enumerable: true,
  get: function get() {
    return _designTokens.default;
  }
});
exports.defaultTheme = exports.default = exports.generateTheme = exports.extend = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _keys2 = _interopRequireDefault(require("lodash/keys"));

var _mapValues2 = _interopRequireDefault(require("lodash/mapValues"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _isObject2 = _interopRequireDefault(require("lodash/isObject"));

var _each2 = _interopRequireDefault(require("lodash/each"));

var _designTokens = _interopRequireDefault(require("./designTokens"));

var _this = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// 主题唯一标识
_designTokens.default['T_THEME'] = 'default';
var defaultSizeTheme = {
  // default font-size
  fontSize: '12px',
  // font-size of title
  titleFontSize: '14px',
  // height of size (px)
  Height: {
    sm: '24px',
    md: '28px',
    lg: '32px'
  },
  // padding of size (px)
  Padding: {
    sm: '8px',
    md: '8px',
    lg: '12px'
  }
};
var componentThemeGeneratorMap = {};

var extend = function extend(source, target) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var cloneSource = JSON.parse(JSON.stringify(source));

  var _extend2 = function _extend(source, target) {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    (0, _each2.default)(target, function (v, k) {
      (0, _newArrowCheck2.default)(this, _this3);

      if ((0, _isObject2.default)(v) && (0, _isObject2.default)(source[k])) {
        source[k] = _extend2(source[k], v);
      } else {
        source[k] = v;
      }
    }.bind(this));
    return source;
  }.bind(this);

  return _extend2(cloneSource, target);
}.bind(void 0);

exports.extend = extend;

var generateTheme = function generateTheme() {
  var _this4 = this;

  var originTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var originDesignTokens = originTheme.designTokens;
  var sizeTheme = (0, _pick2.default)(originTheme, ['fontSize', 'titleFontSize', 'Height', 'Padding']);

  var theme = _objectSpread(_objectSpread(_objectSpread({}, defaultSizeTheme), sizeTheme), {}, {
    designTokens: _objectSpread(_objectSpread({}, _designTokens.default), originDesignTokens)
  });

  theme.HeightNumber = (0, _mapValues2.default)(theme.Height, function (v) {
    (0, _newArrowCheck2.default)(this, _this4);
    return +v.replace('px', '');
  }.bind(this));
  var componentNames = (0, _keys2.default)(componentThemeGeneratorMap);
  theme = extend(theme, (0, _omit2.default)(originTheme, componentNames));
  var componentTheme = (0, _mapValues2.default)(componentThemeGeneratorMap, function (componentThemeGenerator) {
    (0, _newArrowCheck2.default)(this, _this4);
    return componentThemeGenerator(theme);
  }.bind(this));
  return extend(_objectSpread(_objectSpread({}, theme), componentTheme), (0, _pick2.default)(originTheme, componentNames));
};

exports.generateTheme = generateTheme;
var defaultTheme = generateTheme();
exports.defaultTheme = defaultTheme;
var _default = defaultTheme;
exports.default = _default;