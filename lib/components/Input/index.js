"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NumberInput = _interopRequireDefault(require("../../components/NumberInput"));

var _Textarea = _interopRequireDefault(require("../../components/Textarea"));

var _type = require("../../type");

var _Input = _interopRequireDefault(require("./Input"));

var _Search = _interopRequireDefault(require("./Search"));

// bind to avoid demo crash
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var ExportInput = (0, _type.ExportComponent)(_Input.default, {
  Search: _Search.default,
  Number: _NumberInput.default,
  Textarea: _Textarea.default,
  Sizes: _type.Sizes
});
var ClassInput = (0, _type.FunctionToClassComponent)(_Input.default);
var ClassSearch = (0, _type.FunctionToClassComponent)(_Search.default);
var ExportClassInput = (0, _type.ExportComponent)(ClassInput, {
  Search: ClassSearch,
  Number: _NumberInput.default,
  Textarea: _Textarea.default,
  Sizes: _type.Sizes
});
var _default = ExportClassInput;
exports.default = _default;