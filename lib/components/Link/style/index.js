"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SLink = exports.prefixCls = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _config = _interopRequireDefault(require("../../../config"));

var _styledWrap = _interopRequireDefault(require("../../../utils/styledWrap"));

var _this = void 0;

var _prefixCls = _config.default.prefixCls;
var prefixCls = _prefixCls + '-link';
exports.prefixCls = prefixCls;
var SLink = (0, _styledWrap.default)({
  className: prefixCls
})((0, _styledBase.default)("a", {
  target: "e1vdn1i70",
  label: "SLink"
})(function (props) {
  (0, _newArrowCheck2.default)(this, _this);
  var DT = props.theme.designTokens;
  return /*#__PURE__*/(0, _core.css)("&,&:link,&:visited{text-decoration:underline;color:", DT.T_COLOR_TEXT_PRIMARY_DEFAULT, ";}&:hover,&:active{color:", DT.T_COLOR_TEXT_PRIMARY_HOVER, ";};label:SLink;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpbmsvc3R5bGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpbmsvc3R5bGUvaW5kZXgudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICdzcmMvY29uZmlnJztcbmltcG9ydCBzdHlsZWRXcmFwIGZyb20gJ3NyYy91dGlscy9zdHlsZWRXcmFwJztcblxuY29uc3QgeyBwcmVmaXhDbHM6IF9wcmVmaXhDbHMgfSA9IGNvbmZpZztcbmV4cG9ydCBjb25zdCBwcmVmaXhDbHMgPSBfcHJlZml4Q2xzICsgJy1saW5rJztcblxuZXhwb3J0IGNvbnN0IFNMaW5rID0gc3R5bGVkV3JhcDx1bmtub3duLCBIVE1MQW5jaG9yRWxlbWVudD4oeyBjbGFzc05hbWU6IHByZWZpeENscyB9KShcbiAgICBzdHlsZWQuYShwcm9wcyA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHRoZW1lOiB7IGRlc2lnblRva2VuczogRFQgfVxuICAgICAgICB9ID0gcHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgICAgICYsXG4gICAgICAgICAgICAmOmxpbmssXG4gICAgICAgICAgICAmOnZpc2l0ZWQge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke0RULlRfQ09MT1JfVEVYVF9QUklNQVJZX0RFRkFVTFR9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtEVC5UX0NPTE9SX1RFWFRfUFJJTUFSWV9IT1ZFUn07XG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgfSlcbik7XG4iXX0= */"));
}.bind(void 0), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpbmsvc3R5bGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUkiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTGluay9zdHlsZS9pbmRleC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJ3NyYy9jb25maWcnO1xuaW1wb3J0IHN0eWxlZFdyYXAgZnJvbSAnc3JjL3V0aWxzL3N0eWxlZFdyYXAnO1xuXG5jb25zdCB7IHByZWZpeENsczogX3ByZWZpeENscyB9ID0gY29uZmlnO1xuZXhwb3J0IGNvbnN0IHByZWZpeENscyA9IF9wcmVmaXhDbHMgKyAnLWxpbmsnO1xuXG5leHBvcnQgY29uc3QgU0xpbmsgPSBzdHlsZWRXcmFwPHVua25vd24sIEhUTUxBbmNob3JFbGVtZW50Pih7IGNsYXNzTmFtZTogcHJlZml4Q2xzIH0pKFxuICAgIHN0eWxlZC5hKHByb3BzID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdGhlbWU6IHsgZGVzaWduVG9rZW5zOiBEVCB9XG4gICAgICAgIH0gPSBwcm9wcztcblxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICAgICAgJixcbiAgICAgICAgICAgICY6bGluayxcbiAgICAgICAgICAgICY6dmlzaXRlZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7RFQuVF9DT0xPUl9URVhUX1BSSU1BUllfREVGQVVMVH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke0RULlRfQ09MT1JfVEVYVF9QUklNQVJZX0hPVkVSfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICB9KVxuKTtcbiJdfQ== */"));
exports.SLink = SLink;