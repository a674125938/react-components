"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transitionFlat = exports.transitionDown = exports.transitionUp = exports.spinKeyframes = exports.slideInRight = exports.slideInDown = exports.slideOutDown = exports.zoomOut = exports.zoomIn = exports.bounceOut = exports.bounceIn = exports.fadeOut = exports.fadeIn = exports.slideDownOut = exports.slideDownIn = exports.slideUpOut = exports.slideUpIn = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _core = require("@emotion/core");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

var slideUpIn = (0, _core.keyframes)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n    0% {\n        opacity: 0;\n        transform-origin: 0% 0%;\n        transform: scaleY(0);\n    }\n    100% {\n        opacity: 1;\n        transform-origin: 0% 0%;\n        transform: scaleY(1);\n    }\n"])));
exports.slideUpIn = slideUpIn;
var slideUpOut = (0, _core.keyframes)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n    0% {\n        opacity: 1;\n        transform-origin: 0% 0%;\n        transform: scaleY(1);\n    }\n    100% {\n        opacity: 0;\n        transform-origin: 0% 0%;\n        transform: scaleY(0);\n    }\n"])));
exports.slideUpOut = slideUpOut;
var slideDownIn = (0, _core.keyframes)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n    0% {\n        opacity: 0;\n        transform-origin: 0% 100%;\n        transform: scaleY(0);\n    }\n    100% {\n        opacity: 1;\n        transform-origin: 0% 100%;\n        transform: scaleY(1);\n    }\n"])));
exports.slideDownIn = slideDownIn;
var slideDownOut = (0, _core.keyframes)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n    0% {\n        opacity: 1;\n        transform-origin: 0% 100%;\n        transform: scaleY(1);\n    }\n    100% {\n        opacity: 0;\n        transform-origin: 0% 100%;\n        transform: scaleY(0);\n    }\n"])));
exports.slideDownOut = slideDownOut;
var fadeIn = (0, _core.keyframes)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n"])));
exports.fadeIn = fadeIn;
var fadeOut = (0, _core.keyframes)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n"])));
exports.fadeOut = fadeOut;
var bounceIn = (0, _core.keyframes)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n    from,\n    20%,\n    40%,\n    60%,\n    80%,\n    to {\n        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n\n    0% {\n        opacity: 0;\n        transform: scale3d(0.3, 0.3, 0.3);\n    }\n\n    20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n    }\n\n    40% {\n        transform: scale3d(0.9, 0.9, 0.9);\n    }\n\n    60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n    }\n\n    80% {\n        transform: scale3d(0.97, 0.97, 0.97);\n    }\n\n    to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n    }\n"])));
exports.bounceIn = bounceIn;
var bounceOut = (0, _core.keyframes)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n    20% {\n        transform: scale3d(0.9, 0.9, 0.9);\n    }\n\n    50%,\n    55% {\n        opacity: 1;\n        transform: scale3d(1.1, 1.1, 1.1);\n    }\n\n    to {\n        opacity: 0;\n        transform: scale3d(0.3, 0.3, 0.3);\n    }\n"])));
exports.bounceOut = bounceOut;
var zoomIn = (0, _core.keyframes)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n    from {\n        opacity: 0;\n        transform: scale3d(0.3, 0.3, 0.3);\n    }\n\n    50% {\n        opacity: 1;\n    }\n"])));
exports.zoomIn = zoomIn;
var zoomOut = (0, _core.keyframes)(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2.default)(["\n    from {\n        opacity: 1;\n    }\n\n    50% {\n        opacity: 0;\n        transform: scale3d(0.3, 0.3, 0.3);\n    }\n\n    to {\n        opacity: 0;\n    }\n"])));
exports.zoomOut = zoomOut;
var slideOutDown = (0, _core.keyframes)(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2.default)(["\n    from {\n        transform: translate3d(0, 0, 0);\n    }\n\n    to {\n        visibility: hidden;\n        transform: translate3d(0, 100%, 0);\n    }\n"])));
exports.slideOutDown = slideOutDown;
var slideInDown = (0, _core.keyframes)(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2.default)(["\n    from {\n        transform: translate3d(0, -100%, 0);\n        visibility: visible;\n    }\n\n    to {\n        transform: translate3d(0, 0, 0);\n    }\n"])));
exports.slideInDown = slideInDown;
var slideInRight = (0, _core.keyframes)(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2.default)(["\n    0% {\n        transform: translate3d(100%, 0, 0);\n        visibility: hidden;\n    }\n\n    100% {\n        transform: translate3d(0, 0, 0);\n    }\n"])));
exports.slideInRight = slideInRight;
var spinKeyframes = (0, _core.keyframes)(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2.default)(["\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n"])));
exports.spinKeyframes = spinKeyframes;
var transitionUp = '.22s cubic-bezier(.4,0,.2,1)';
exports.transitionUp = transitionUp;
var transitionDown = '.18s cubic-bezier(.4,0,.2,1)';
exports.transitionDown = transitionDown;
var transitionFlat = '.16s ease-out';
exports.transitionFlat = transitionFlat;