"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWrap = exports.tableWrapCls = exports.prefixCls = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _config = _interopRequireDefault(require("../../../config"));

var _withProps = _interopRequireDefault(require("../../../utils/withProps"));

var _style = require("../../../components/Table/style");

var _this = void 0;

var _prefixCls = _config.default.prefixCls;
var prefixCls = _prefixCls + '-transfer-table';
exports.prefixCls = prefixCls;
var tableWrapCls = prefixCls + '-table-wrap';
exports.tableWrapCls = tableWrapCls;
var SWrap = (0, _withProps.default)({
  className: tableWrapCls
})(( /*#__PURE__*/0, _styledBase.default)('div', {
  target: "eugb8x70",
  label: "SWrap"
})(function () {
  (0, _newArrowCheck2.default)(this, _this);
  return /*#__PURE__*/(0, _core.css)(".", _style.prefixCls, "-row[data-disabled]{td{opacity:0.4;}td.", _style.prefixCls, "-row-select-icon-cell{opacity:1;}};label:SWrap;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyYW5zZmVyVGFibGUvc3R5bGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UcmFuc2ZlclRhYmxlL3N0eWxlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnc3JjL2NvbmZpZyc7XG5pbXBvcnQgd2l0aFByb3BzIGZyb20gJ3NyYy91dGlscy93aXRoUHJvcHMnO1xuaW1wb3J0IHsgcHJlZml4Q2xzIGFzIHRhYmxlUHJlZml4Q2xzIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvVGFibGUvc3R5bGUnO1xuXG5jb25zdCB7IHByZWZpeENsczogX3ByZWZpeENscyB9ID0gY29uZmlnO1xuZXhwb3J0IGNvbnN0IHByZWZpeENscyA9IF9wcmVmaXhDbHMgKyAnLXRyYW5zZmVyLXRhYmxlJztcblxuZXhwb3J0IGNvbnN0IHRhYmxlV3JhcENscyA9IHByZWZpeENscyArICctdGFibGUtd3JhcCc7XG5cbmV4cG9ydCBjb25zdCBTV3JhcCA9IHdpdGhQcm9wcyh7XG4gICAgY2xhc3NOYW1lOiB0YWJsZVdyYXBDbHNcbn0pKFxuICAgIHN0eWxlZCgnZGl2JykoKCkgPT4ge1xuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICAgICAgLiR7dGFibGVQcmVmaXhDbHN9LXJvd1tkYXRhLWRpc2FibGVkXSB7XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRkLiR7dGFibGVQcmVmaXhDbHN9LXJvdy1zZWxlY3QtaWNvbi1jZWxsIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgfSlcbik7XG4iXX0= */"));
}.bind(void 0), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyYW5zZmVyVGFibGUvc3R5bGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUkiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVHJhbnNmZXJUYWJsZS9zdHlsZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJ3NyYy9jb25maWcnO1xuaW1wb3J0IHdpdGhQcm9wcyBmcm9tICdzcmMvdXRpbHMvd2l0aFByb3BzJztcbmltcG9ydCB7IHByZWZpeENscyBhcyB0YWJsZVByZWZpeENscyB9IGZyb20gJ3NyYy9jb21wb25lbnRzL1RhYmxlL3N0eWxlJztcblxuY29uc3QgeyBwcmVmaXhDbHM6IF9wcmVmaXhDbHMgfSA9IGNvbmZpZztcbmV4cG9ydCBjb25zdCBwcmVmaXhDbHMgPSBfcHJlZml4Q2xzICsgJy10cmFuc2Zlci10YWJsZSc7XG5cbmV4cG9ydCBjb25zdCB0YWJsZVdyYXBDbHMgPSBwcmVmaXhDbHMgKyAnLXRhYmxlLXdyYXAnO1xuXG5leHBvcnQgY29uc3QgU1dyYXAgPSB3aXRoUHJvcHMoe1xuICAgIGNsYXNzTmFtZTogdGFibGVXcmFwQ2xzXG59KShcbiAgICBzdHlsZWQoJ2RpdicpKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgICAgIC4ke3RhYmxlUHJlZml4Q2xzfS1yb3dbZGF0YS1kaXNhYmxlZF0ge1xuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZC4ke3RhYmxlUHJlZml4Q2xzfS1yb3ctc2VsZWN0LWljb24tY2VsbCB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgO1xuICAgIH0pXG4pO1xuIl19 */"));
exports.SWrap = SWrap;