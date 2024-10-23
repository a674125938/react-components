"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ContainerContext = require("../../components/Popover/ContainerContext");

var _style = require("./style");

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Content = function Content(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var props = (0, _extends2.default)({}, _ref);
  var containerRef = (0, _react.useRef)(null);
  var getContainer = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return containerRef.current;
  }.bind(this), []);
  return /*#__PURE__*/_react.default.createElement(_ContainerContext.InheritProvider, {
    value: {
      getPopupContainer: getContainer
    }
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: containerRef
  }), /*#__PURE__*/_react.default.createElement(_style.SContent, props)));
}.bind(void 0);

Content.propTypes = {
  /** 定义容器最大高度，传入后超过高度会出滚动 */
  maxHeight: _propTypes.default.string,

  /** @ignore */
  className: _propTypes.default.string
};
var _default = Content;
exports.default = _default;