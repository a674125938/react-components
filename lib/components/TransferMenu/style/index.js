"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuWrap = exports.menuCls = exports.prefixCls = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _config = _interopRequireDefault(require("../../../config"));

var _prefixCls = _config.default.prefixCls;
var prefixCls = _prefixCls + '-transfer-menu';
exports.prefixCls = prefixCls;
var menuCls = prefixCls + '-transfer-menu';
exports.menuCls = menuCls;
var MenuWrap = ( /*#__PURE__*/0, _styledBase.default)('div', {
  target: "e1cr326k0",
  label: "MenuWrap"
})(".", menuCls, "{max-height:300px;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyYW5zZmVyTWVudS9zdHlsZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRcUMiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVHJhbnNmZXJNZW51L3N0eWxlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJ3NyYy9jb25maWcnO1xuXG5jb25zdCB7IHByZWZpeENsczogX3ByZWZpeENscyB9ID0gY29uZmlnO1xuZXhwb3J0IGNvbnN0IHByZWZpeENscyA9IF9wcmVmaXhDbHMgKyAnLXRyYW5zZmVyLW1lbnUnO1xuZXhwb3J0IGNvbnN0IG1lbnVDbHMgPSBwcmVmaXhDbHMgKyAnLXRyYW5zZmVyLW1lbnUnO1xuXG5leHBvcnQgY29uc3QgTWVudVdyYXAgPSBzdHlsZWQoJ2RpdicpYFxuICAgIC4ke21lbnVDbHN9IHtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgfVxuYDtcbiJdfQ== */"));
exports.MenuWrap = MenuWrap;