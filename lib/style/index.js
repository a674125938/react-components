"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  clearFixMixin: true,
  calculateSize: true,
  inlineBlockWithVerticalMixin: true,
  spinMixin: true,
  sWrap: true
};
Object.defineProperty(exports, "sWrap", {
  enumerable: true,
  get: function get() {
    return _sWrap.default;
  }
});
exports.spinMixin = exports.inlineBlockWithVerticalMixin = exports.calculateSize = exports.clearFixMixin = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _core = require("@emotion/core");

var _animation = require("./animation");

Object.keys(_animation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _animation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animation[key];
    }
  });
});

var _interface = require("./interface");

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _interface[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interface[key];
    }
  });
});

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _sWrap = _interopRequireDefault(require("./sWrap"));

var _this = void 0;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @deprecated */
var clearFixMixin = process.env.NODE_ENV === "production" ? {
  name: "evd7in-clearFixMixin",
  styles: "&:before,&:after{content:' ';display:table;}&:after{clear:both;};label:clearFixMixin;"
} : {
  name: "evd7in-clearFixMixin",
  styles: "&:before,&:after{content:' ';display:table;}&:after{clear:both;};label:clearFixMixin;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0MiLCJmaWxlIjoiLi4vLi4vc3JjL3N0eWxlL2luZGV4LnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmltcG9ydCB7IHNwaW5LZXlmcmFtZXMgfSBmcm9tICcuL2FuaW1hdGlvbic7XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGNvbnN0IGNsZWFyRml4TWl4aW4gPSBjc3NgXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG5gO1xuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlU2l6ZSA9IChzaXplOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgWywgbnVtYmVyLCB1bml0XSA9IC9eKFxcZCspKFxcUyspJC8uZXhlYyhzaXplKSB8fCBbXTtcbiAgICByZXR1cm4gK251bWJlciArICtvZmZzZXQgKyB1bml0O1xufTtcblxuZXhwb3J0IGNvbnN0IGlubGluZUJsb2NrV2l0aFZlcnRpY2FsTWl4aW4gPSBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5leHBvcnQgY29uc3Qgc3Bpbk1peGluID0gY3NzYFxuICAgIGFuaW1hdGlvbjogJHtzcGluS2V5ZnJhbWVzfSAxLjJzIGluZmluaXRlIGxpbmVhcjtcbmA7XG5cbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9hbmltYXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzV3JhcCB9IGZyb20gJy4vc1dyYXAnO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
/** @deprecated */

exports.clearFixMixin = clearFixMixin;

var calculateSize = function calculateSize(size, offset) {
  (0, _newArrowCheck2.default)(this, _this);

  var _ref = /^(\d+)(\S+)$/.exec(size) || [],
      _ref2 = (0, _slicedToArray2.default)(_ref, 3),
      number = _ref2[1],
      unit = _ref2[2];

  return +number + +offset + unit;
}.bind(void 0);

exports.calculateSize = calculateSize;
var inlineBlockWithVerticalMixin = process.env.NODE_ENV === "production" ? {
  name: "1keppjm-inlineBlockWithVerticalMixin",
  styles: "display:inline-block;vertical-align:middle;;label:inlineBlockWithVerticalMixin;"
} : {
  name: "1keppjm-inlineBlockWithVerticalMixin",
  styles: "display:inline-block;vertical-align:middle;;label:inlineBlockWithVerticalMixin;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQitDIiwiZmlsZSI6Ii4uLy4uL3NyYy9zdHlsZS9pbmRleC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgeyBzcGluS2V5ZnJhbWVzIH0gZnJvbSAnLi9hbmltYXRpb24nO1xuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBjb25zdCBjbGVhckZpeE1peGluID0gY3NzYFxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuYDtcbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVNpemUgPSAoc2l6ZTogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IFssIG51bWJlciwgdW5pdF0gPSAvXihcXGQrKShcXFMrKSQvLmV4ZWMoc2l6ZSkgfHwgW107XG4gICAgcmV0dXJuICtudW1iZXIgKyArb2Zmc2V0ICsgdW5pdDtcbn07XG5cbmV4cG9ydCBjb25zdCBpbmxpbmVCbG9ja1dpdGhWZXJ0aWNhbE1peGluID0gY3NzYFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuYDtcblxuZXhwb3J0IGNvbnN0IHNwaW5NaXhpbiA9IGNzc2BcbiAgICBhbmltYXRpb246ICR7c3BpbktleWZyYW1lc30gMS4ycyBpbmZpbml0ZSBsaW5lYXI7XG5gO1xuXG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc1dyYXAgfSBmcm9tICcuL3NXcmFwJztcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
exports.inlineBlockWithVerticalMixin = inlineBlockWithVerticalMixin;
var spinMixin = /*#__PURE__*/(0, _core.css)("animation:", _animation.spinKeyframes, " 1.2s infinite linear;;label:spinMixin;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQjRCIiwiZmlsZSI6Ii4uLy4uL3NyYy9zdHlsZS9pbmRleC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgeyBzcGluS2V5ZnJhbWVzIH0gZnJvbSAnLi9hbmltYXRpb24nO1xuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBjb25zdCBjbGVhckZpeE1peGluID0gY3NzYFxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuYDtcbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVNpemUgPSAoc2l6ZTogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IFssIG51bWJlciwgdW5pdF0gPSAvXihcXGQrKShcXFMrKSQvLmV4ZWMoc2l6ZSkgfHwgW107XG4gICAgcmV0dXJuICtudW1iZXIgKyArb2Zmc2V0ICsgdW5pdDtcbn07XG5cbmV4cG9ydCBjb25zdCBpbmxpbmVCbG9ja1dpdGhWZXJ0aWNhbE1peGluID0gY3NzYFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuYDtcblxuZXhwb3J0IGNvbnN0IHNwaW5NaXhpbiA9IGNzc2BcbiAgICBhbmltYXRpb246ICR7c3BpbktleWZyYW1lc30gMS4ycyBpbmZpbml0ZSBsaW5lYXI7XG5gO1xuXG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc1dyYXAgfSBmcm9tICcuL3NXcmFwJztcbiJdfQ== */"));
exports.spinMixin = spinMixin;