"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _this = void 0;

var RefContext = /*#__PURE__*/_react.default.createContext({
  getRef: function getRef() {
    (0, _newArrowCheck2.default)(this, _this);
    return null;
  }.bind(void 0),
  saveRef: function saveRef() {
    var _this2 = this;

    (0, _newArrowCheck2.default)(this, _this);
    return function () {
      (0, _newArrowCheck2.default)(this, _this2);
      return null;
    }.bind(this);
  }.bind(void 0)
});

var _default = RefContext;
exports.default = _default;