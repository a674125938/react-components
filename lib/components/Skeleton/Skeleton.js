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

var _style = require("./style");

var _excluded = ["animated", "rows"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Skeleton = function Skeleton(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var animated = _ref.animated,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 1 : _ref$rows,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var content = (0, _react.useMemo)(function () {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, new Array(Math.max(rows, 1)).fill(null).map(function (_, i) {
      (0, _newArrowCheck2.default)(this, _this3);
      return /*#__PURE__*/_react.default.createElement("p", {
        key: i
      });
    }.bind(this)));
  }.bind(this), [rows]);
  return /*#__PURE__*/_react.default.createElement(_style.SWrap, (0, _extends2.default)({}, rest, {
    animated: animated
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.contentCls
  }, content));
}.bind(void 0);

Skeleton.propTypes = {
  animated: _propTypes.default.bool,
  rows: _propTypes.default.number,
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var _default = Skeleton;
exports.default = _default;