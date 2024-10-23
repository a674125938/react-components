"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _interactionDemo = _interopRequireWildcard(require("interaction-demo"));

var _reactComponents = require("@ucloud-fe/react-components");

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var config = {
  size: ['sm', 'md', 'lg'],
  clearable: 'boolean',
  disabled: 'boolean',
  block: _interactionDemo.USE_DEFINE,
  status: _interactionDemo.USE_DEFINE,
  prefix: {
    type: 'boolean',
    optionToProps: function optionToProps(prefix) {
      (0, _newArrowCheck2.default)(this, _this);
      return prefix ? /*#__PURE__*/_react.default.createElement(_reactComponents.Icon, {
        type: "circle"
      }) : undefined;
    }.bind(void 0)
  },
  suffix: {
    type: 'boolean',
    optionToProps: function optionToProps(suffix) {
      (0, _newArrowCheck2.default)(this, _this);
      return suffix ? /*#__PURE__*/_react.default.createElement(_reactComponents.Icon, {
        type: "circle"
      }) : undefined;
    }.bind(void 0)
  }
};
var searchConfig = {
  size: ['sm', 'md', 'lg'],
  clearable: 'boolean',
  disabled: 'boolean',
  block: 'boolean',
  prefix: {
    type: 'boolean',
    optionToProps: function optionToProps(prefix) {
      (0, _newArrowCheck2.default)(this, _this);
      return prefix ? /*#__PURE__*/_react.default.createElement(_reactComponents.Icon, {
        type: "circle"
      }) : undefined;
    }.bind(void 0)
  }
};
var list = [{
  title: 'Input',
  children: /*#__PURE__*/_react.default.createElement(_interactionDemo.default, {
    config: config,
    initialState: {
      value: ''
    }
  }, /*#__PURE__*/_react.default.createElement(_reactComponents.Input, {
    onChange: console.log
  }))
}, {
  title: 'Search',
  children: /*#__PURE__*/_react.default.createElement(_interactionDemo.default, {
    config: searchConfig,
    initialState: {
      value: ''
    }
  }, /*#__PURE__*/_react.default.createElement(_reactComponents.Input.Search, {
    onChange: console.log
  }))
}];

var Demo = function Demo() {
  (0, _newArrowCheck2.default)(this, _this);
  return /*#__PURE__*/_react.default.createElement(_interactionDemo.Group, {
    list: list
  });
}.bind(void 0);

var _default = Demo;
exports.default = _default;