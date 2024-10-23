"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _useIsInitial = _interopRequireDefault(require("./useIsInitial"));

var _this = void 0;

var useInitial = function useInitial(cb) {
  (0, _newArrowCheck2.default)(this, _this);
  var isInitial = (0, _useIsInitial.default)();
  if (isInitial) cb();
}.bind(void 0);

var _default = useInitial;
exports.default = _default;