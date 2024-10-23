"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWrap = exports.prefixCls = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _Combine = _interopRequireDefault(require("../../../components/Combine"));

var _config = _interopRequireDefault(require("../../../config"));

var _this = void 0;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _prefixCls = _config.default.prefixCls;
var prefixCls = _prefixCls + '-actionlist';
exports.prefixCls = prefixCls;

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1rn6kt6-SWrap",
  styles: "white-space:nowrap;;label:SWrap;"
} : {
  name: "1rn6kt6-SWrap",
  styles: "white-space:nowrap;;label:SWrap;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbkxpc3Qvc3R5bGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWMiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWN0aW9uTGlzdC9zdHlsZS9pbmRleC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgQ29tYmluZSBmcm9tICdzcmMvY29tcG9uZW50cy9Db21iaW5lJztcbmltcG9ydCBjb25maWcgZnJvbSAnc3JjL2NvbmZpZyc7XG5cbmNvbnN0IHsgcHJlZml4Q2xzOiBfcHJlZml4Q2xzIH0gPSBjb25maWc7XG5leHBvcnQgY29uc3QgcHJlZml4Q2xzID0gX3ByZWZpeENscyArICctYWN0aW9ubGlzdCc7XG5cbmV4cG9ydCBjb25zdCBTV3JhcCA9IHN0eWxlZChDb21iaW5lKSgoKSA9PiB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBgO1xufSk7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var SWrap = ( /*#__PURE__*/0, _styledBase.default)(_Combine.default, {
  target: "e17ez9160",
  label: "SWrap"
})(function () {
  (0, _newArrowCheck2.default)(this, _this);
  return _ref;
}.bind(void 0), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbkxpc3Qvc3R5bGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3FCIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbkxpc3Qvc3R5bGUvaW5kZXgudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IENvbWJpbmUgZnJvbSAnc3JjL2NvbXBvbmVudHMvQ29tYmluZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ3NyYy9jb25maWcnO1xuXG5jb25zdCB7IHByZWZpeENsczogX3ByZWZpeENscyB9ID0gY29uZmlnO1xuZXhwb3J0IGNvbnN0IHByZWZpeENscyA9IF9wcmVmaXhDbHMgKyAnLWFjdGlvbmxpc3QnO1xuXG5leHBvcnQgY29uc3QgU1dyYXAgPSBzdHlsZWQoQ29tYmluZSkoKCkgPT4ge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgYDtcbn0pO1xuIl19 */");
exports.SWrap = SWrap;