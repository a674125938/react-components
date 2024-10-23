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

var _react = _interopRequireDefault(require("react"));

var _interactionDemo = _interopRequireWildcard(require("interaction-demo"));

var _reactComponents = require("@ucloud-fe/react-components");

var _excluded = ["title"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var config = {
  styleType: _interactionDemo.USE_DEFINE,
  size: _interactionDemo.USE_DEFINE,
  checked: _interactionDemo.USE_DEFINE,
  disabled: _interactionDemo.USE_DEFINE,
  indeterminate: _interactionDemo.USE_DEFINE,
  title: {
    type: 'boolean',
    optionToProps: function optionToProps(title) {
      (0, _newArrowCheck2.default)(this, _this);
      return title ? 'title' : undefined;
    }.bind(void 0)
  }
};
var groupConfig = {
  styleType: ['card'],
  title: {
    type: 'boolean',
    optionToProps: function optionToProps(title) {
      (0, _newArrowCheck2.default)(this, _this);
      return title ? 'title' : undefined;
    }.bind(void 0)
  }
};

var GroupDemo = function GroupDemo(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var title = _ref.title,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_reactComponents.Checkbox.Group, (0, _extends2.default)({}, rest, {
    onChange: console.log,
    options: [1, 2, 3].map(function (v) {
      (0, _newArrowCheck2.default)(this, _this2);
      return {
        value: v,
        title: title
      };
    }.bind(this))
  }));
}.bind(void 0);

var list = [{
  title: 'Checkbox',
  children: /*#__PURE__*/_react.default.createElement(_interactionDemo.default, {
    config: config,
    initialState: {
      checked: false
    }
  }, /*#__PURE__*/_react.default.createElement(_reactComponents.Checkbox, {
    onChange: console.log
  }, "Checkbox"))
}, {
  title: 'Group',
  children: /*#__PURE__*/_react.default.createElement(_interactionDemo.default, {
    config: groupConfig
  }, /*#__PURE__*/_react.default.createElement(GroupDemo, null))
}];

var Demo = function Demo() {
  (0, _newArrowCheck2.default)(this, _this);
  return /*#__PURE__*/_react.default.createElement(_interactionDemo.Group, {
    list: list
  });
}.bind(void 0);

var _default = Demo;
exports.default = _default;