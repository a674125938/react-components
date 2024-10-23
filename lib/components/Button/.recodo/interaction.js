"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _interactionDemo = _interopRequireWildcard(require("interaction-demo"));

var _reactComponents = require("@ucloud-fe/react-components");

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var config = {
  styleType: _interactionDemo.USE_DEFINE,
  size: _interactionDemo.USE_DEFINE,
  disabled: 'boolean',
  fakeDisabled: _interactionDemo.USE_DEFINE,
  loading: _interactionDemo.USE_DEFINE,
  shape: _interactionDemo.USE_DEFINE,
  icon: ['loading', 'check', 'square']
};

var DemoButton = function DemoButton(props) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  return /*#__PURE__*/_react.default.createElement(_reactComponents.Tooltip, {
    popup: "Some Tip"
  }, /*#__PURE__*/_react.default.createElement(_reactComponents.Button, (0, _extends2.default)({}, props, {
    onClick: function () {
      (0, _newArrowCheck2.default)(this, _this2);
      return console.log('clicked');
    }.bind(this)
  }), "Button"));
}.bind(void 0);

var Demo = function Demo() {
  (0, _newArrowCheck2.default)(this, _this);
  return /*#__PURE__*/_react.default.createElement(_interactionDemo.default, {
    config: config,
    initialState: {
      styleType: 'border',
      size: 'md'
    }
  }, /*#__PURE__*/_react.default.createElement(DemoButton, null));
}.bind(void 0);

var _default = Demo;
exports.default = _default;