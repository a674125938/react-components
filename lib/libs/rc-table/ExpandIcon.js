"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ExpandIcon = function ExpandIcon(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var expandable = _ref.expandable,
      prefixCls = _ref.prefixCls,
      onExpand = _ref.onExpand,
      needIndentSpaced = _ref.needIndentSpaced,
      expanded = _ref.expanded,
      record = _ref.record;
  var handleClick = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    return onExpand(record, e);
  }.bind(this), [onExpand, record]);

  if (expandable) {
    var expandClassName = expanded ? 'expanded' : 'collapsed';
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(prefixCls, "-expand-icon ").concat(prefixCls, "-").concat(expandClassName),
      onClick: handleClick
    });
  } else if (needIndentSpaced) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(prefixCls, "-expand-icon ").concat(prefixCls, "-spaced")
    });
  }

  return null;
}.bind(void 0);

ExpandIcon.propTypes = {
  record: _propTypes.default.any.isRequired,
  prefixCls: _propTypes.default.string.isRequired,
  expandable: _propTypes.default.any.isRequired,
  expanded: _propTypes.default.bool.isRequired,
  needIndentSpaced: _propTypes.default.bool.isRequired,
  onExpand: _propTypes.default.func.isRequired
};

var _default = /*#__PURE__*/_react.default.memo(ExpandIcon);

exports.default = _default;