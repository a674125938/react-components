"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _navigator, _navigator$userAgent, _navigator$userAgent$;

var _default = ((_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator$userAgent = _navigator.userAgent) === null || _navigator$userAgent === void 0 ? void 0 : (_navigator$userAgent$ = _navigator$userAgent.indexOf) === null || _navigator$userAgent$ === void 0 ? void 0 : _navigator$userAgent$.call(_navigator$userAgent, 'Firefox')) > -1;

exports.default = _default;