"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ConfigContext = _interopRequireDefault(require("../../components/ConfigProvider/ConfigContext"));

var _style = require("./style");

var _excluded = ["type", "spin", "prefix", "className"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** 图标控件 */
var Icon = function Icon(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var type = _ref.type,
      spin = _ref.spin,
      prefix = _ref.prefix,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var configContext = (0, _react.useContext)(_ConfigContext.default);
  var finalPrefix = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return prefix || configContext.iconDefaultPrefix || 'icon__';
  }.bind(this), [configContext.iconDefaultPrefix, prefix]);
  return /*#__PURE__*/_react.default.createElement(_style.IconWrap, (0, _extends2.default)({
    className: (0, _classnames.default)(_style.prefixCls, "".concat(finalPrefix).concat(type), spin && "".concat(_style.prefixCls, "-spin"), className),
    spin: spin
  }, rest));
}.bind(void 0);

Icon.propTypes = {
  type: _propTypes.default.string.isRequired,
  spin: _propTypes.default.bool,
  prefix: _propTypes.default.string
};

var _default = /*#__PURE__*/_react.default.memo(Icon);

exports.default = _default;